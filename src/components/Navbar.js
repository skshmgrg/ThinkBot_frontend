
import React, { useRef, useEffect, useContext } from "react";
import { SiChatbot } from "react-icons/si";
import SliderBar from "./Sliderbar";
import { functionsContext } from "../context/context";
import { FaTemperatureHalf } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { Delay } from "./Delay";

const Navbar = () => {
  const functions = useContext(functionsContext);  
  const sliderRef = useRef(null); // Reference for the SliderBar component
  const delayRef = useRef(null); // Reference for the SliderBar component

  // Handle click outside of SliderBar
  const handleClickOutside = (event) => {
    if ((sliderRef.current && !sliderRef.current.contains(event.target))||(delayRef.current && !delayRef.current.contains(event.target))) {
      functions.setActiveComponent(null); // Close the SliderBar
    }
  };

  useEffect(() => {
    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="w-full h-14 bg-black text-white flex items-center justify-between px-4 relative">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <div className="pt-1">
            <SiChatbot size={23} />
          </div>
          <h1>
            {/* <img src={logo} width={130} alt="Logo" /> */}
            <span className="text-lg font-semibold">MyChatbot</span>
          </h1>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center space-x-4">
          {/* Functional Button */}
          <button
            aria-label="Toggle Component"
            className="p-2 hover:bg-blue-700 rounded-full"
            onClick={functions.handleToggleClick}
          >
            <span role="img" aria-label="Toggle Component" className="text-2xl">
              <FaTemperatureHalf />
            </span>
          </button>

          
          <button
            aria-label="Profile"
            className="p-2 hover:bg-blue-700 rounded-full"
            onClick={functions.handleToggleClick2}
          >
            <span role="img" aria-label="Profile" className="text-2xl">
              <IoTimer />
            </span>
          </button>
        </div>
      </nav>

      {/* Conditional Rendering of SliderBar */}
      {functions.activeComponent=='sliderbarcomponent' && (
        <div ref={sliderRef}>
          <SliderBar />
        </div>
      )}
      {/* Conditional Rendering of Delay */}
      {functions.activeComponent=='delaycomponent' && (
        <div ref={delayRef}>
          <Delay />
        </div>
      )}
    </>
  );
};

export default Navbar;
