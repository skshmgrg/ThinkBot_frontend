
import React, { useContext, useEffect, useRef } from "react";
import { UserMessage } from "./UserMessage";
import { ResponseMessage } from "./ResponseMessage";
import { Input } from "./Input";
import { functionsContext } from "../context/context";

export const Chat = () => {
  const global = useContext(functionsContext);
  const containerRef = useRef(null);

  
  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [global.messages]);



  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col max-h-[78vh] overflow-y-auto overflow-x-hidden w-full mt-3"
      >
        {global.messages.map((value, index) =>
          value.type === "prompt" ? (
            <UserMessage key={index} message={value.text} />
          ) : (
            <ResponseMessage key={index} message={value.text} />
          )
        )}
      </div>
      <Input value={global.input} className="fixed bottom-0 w-full" />
    </>
  );
};

export default Chat;
