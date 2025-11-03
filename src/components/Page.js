import { useState, useContext } from "react";
import { Chat } from "./Chat.js";
import { functionsContext } from "../context/context.js";
import Navbar from "./Navbar.js";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Correct import
// import SliderBar from "./Sliderbar.js";
// import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
console.log("Using backend:",BASE_URL);


function Page() {
  const [input, setInput] = useState(""); //taking input from the user
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // New loader state
  const [value, setValue] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [activeComponent, setActiveComponent] = useState(null);
  // const [progress,setProgress]=useState({started:false,pc:0});
  // const [msg, setMsg] = useState(null);

  const handleChangeTemp = (e) => {
    setValue(e.target.value);
  };

  const handleToggleClick = () => {
    setActiveComponent("sliderbarcomponent");
  };
  const handleToggleClick2 = () => {
    setActiveComponent("delaycomponent");
  };

  // Function to handle user input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleFileUpload = async (file) => {
  setMessages((prev) => [
    ...prev,
    { type: "prompt", text: ` Uploaded file: ${file.name}` },
  ]);
  setLoading(true);
  const startTime = Date.now();

  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${BASE_URL}/generatefromfile`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
  throw new Error(`Server returned status ${res.status}`);
  }

    const data = await res.json();
    const reply = data.result || "No response from Gemini";

    const endTime = Date.now();
    setTimeTaken(endTime - startTime);

    setMessages((prev) => [
      ...prev,
      { type: "response", text: reply },
    ]);
  } catch (error) {
    const endTime = Date.now();
    setTimeTaken(endTime - startTime);

    console.error("Upload error:", error);
    setMessages((prev) => [
      ...prev,
      {
        type: "response",
        text: "Error uploading file or getting response from Gemini.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};


const handleClick = async () => {
  if (input.trim()) {
    setMessages((prev) => [...prev, { type: "prompt", text: input }]);
    setInput("");
    setLoading(true);
    const startTime = Date.now();

    try {
      const res = await fetch(`${BASE_URL}/generatefromtext`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      const reply = data.reply;

      const endTime = Date.now();
      setTimeTaken(endTime - startTime);

      setMessages((prev) => [
        ...prev,
        { type: "response", text: reply || "No response from Gemini" },
      ]);
    } catch (error) {
      const endTime = Date.now();
      setTimeTaken(endTime - startTime);

      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "response",
          text: "Error fetching from backend. Fallback response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }
};



  return (
    <>
      <functionsContext.Provider
        value={{
          handleClick,
          handleChange,
          handleChangeTemp,
          handleKeyDown,
          handleFileUpload,
          handleToggleClick,
          handleToggleClick2,
          timeTaken,
          value,
          input,
          messages,
          loading,
          activeComponent,
          setActiveComponent, // Provide loading state to Chat component
        }}
      >
        <div className="h-screen w-screen bg-gradient-to-b from-gray-950 to-gray-700  text-white">
          <Navbar />
          <Chat />
        </div>
      </functionsContext.Provider>
    </>
  );
}

export default Page;
