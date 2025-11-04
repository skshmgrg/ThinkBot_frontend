import React from "react";
import { SiChatbot } from "react-icons/si";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const ResponseMessage = ({ message }) => {
  return (
    <div className="w-[100vw] flex">
      <div className="flex justify-center items-start">
        <SiChatbot
          size={30}
          style={{ width: "50px", padding: "2px", margin: "2px" }}
          className="text-blue-400"
        />
      </div>

      <div className="bg-slate-100 text-stone-700 p-3 mb-2 shadow-md max-w-[60vw] w-fit break-words rounded-xl font-medium leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            strong: ({ children }) => (
              <strong className="font-semibold text-stone-900">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-stone-600">{children}</em>
            ),
            li: ({ children }) => <li className="ml-5 list-disc">{children}</li>,
            p: ({ children }) => <p className="mb-2">{children}</p>,
          }}
        >
          {message}
        </ReactMarkdown>
      </div>
    </div>
  );
};
