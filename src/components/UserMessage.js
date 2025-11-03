import React from "react";
import { FaRegUser } from "react-icons/fa6";
// import { SiChatbot } from "react-icons/si";
export const UserMessage = (props) => {
  return (
    <div className="w-[100vw] flex">
      <div className="bg-slate-100 text-stone-700 p-3 mb-2 shadow-md max-w-[60vw] w-fit break-words ml-auto mt-2 rounded-xl font-semibold">
        {props.message}
      </div>
      <div className="flex justify-center items-center">
        <FaRegUser 
          size={25}
          style={{ width: "50px", padding: "2px", margin: "2px" }}
        />
      </div>
    </div>
  );
};
