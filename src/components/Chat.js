
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
          {global.messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-40 h-full text-gray-400">
            <p className="text-lg font-medium">Start chatting with ThinkBot 🤖</p>
            <p className="text-sm">Type a message or upload a file to begin</p>
          </div>
        ) : (
          global.messages.map((msg, index) =>
            msg.type === "prompt" ? (
              <UserMessage key={index} message={msg.text} />
            ) : (
              <ResponseMessage key={index} message={msg.text} />
            )
          )
        )}
      </div>
      <Input value={global.input} className="fixed bottom-0 w-full" />
    </>
  );
};

export default Chat;
