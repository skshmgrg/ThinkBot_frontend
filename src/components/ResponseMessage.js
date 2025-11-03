import React from "react";
import { SiChatbot } from "react-icons/si";


export const ResponseMessage = (props) => {
  return (
    <div className="w-[100vw] flex">
      <div className="flex justify-center items-center"><SiChatbot  size={30}style={{width:"50px", padding:"2px",margin:"2px"}}/></div>
      <div className="bg-slate-100 text-stone-700 p-3 mb-2 shadow-md max-w-[60vw] w-fit break-words rounded-xl font-semibold">
        {props.message}
      </div>
    </div>
  );
};

