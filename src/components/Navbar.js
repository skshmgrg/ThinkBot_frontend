import React, { useRef, useEffect, useContext } from "react";
import { SiChatbot } from "react-icons/si";
import { FaTemperatureHalf } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import SliderBar from "./Sliderbar";
import { functionsContext } from "../context/context";
import { Delay } from "./Delay";

const Navbar = () => {
  const functions = useContext(functionsContext);
  const sliderRef = useRef(null);
  const delayRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      (sliderRef.current && !sliderRef.current.contains(event.target)) ||
      (delayRef.current && !delayRef.current.contains(event.target))
    ) {
      functions.setActiveComponent(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className="w-full h-16 backdrop-blur-md bg-gradient-to-r from-gray-950/80 via-gray-900/80 to-gray-950/80 
                   text-white flex items-center justify-between px-6 border-b border-gray-800 shadow-sm"
      >
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
         
            <SiChatbot size={22} className="text-blue-400" />
          
          <h1 className="text-lg font-semibold tracking-wide">
            ThinkBot
          </h1>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Temperature Control"
            className="p-2.5 rounded-full bg-gray-800/60 hover:bg-blue-600/40 transition-all duration-300 
                       hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            onClick={functions.handleToggleClick}
          >
            <FaTemperatureHalf className="text-xl text-blue-400" />
          </button>

          <button
            aria-label="Timer"
            className="p-2.5 rounded-full bg-gray-800/60 hover:bg-blue-600/40 transition-all duration-300 
                       hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            onClick={functions.handleToggleClick2}
          >
            <IoTimer className="text-xl text-blue-400" />
          </button>
        </div>
      </nav>

      {/* Conditional Rendering of SliderBar */}
      {functions.activeComponent === "sliderbarcomponent" && (
        <div ref={sliderRef}>
          <SliderBar />
        </div>
      )}

      {/* Conditional Rendering of Delay */}
      {functions.activeComponent === "delaycomponent" && (
        <div ref={delayRef}>
          <Delay />
        </div>
      )}
    </>
  );
};

export default Navbar;
