// 
import React, { useContext } from "react";
import { functionsContext } from "../context/context";

const SliderBar = () => {
  const functions = useContext(functionsContext);

  return (
    <div
      className="absolute top-13 right-12 flex flex-col items-center p-2 bg-gray-100 rounded shadow-md "
      style={{ width: "150px", height:"80px" }}
    >
      <label htmlFor="slider" className="block mb-2 text-sm font-medium text-gray-800 dark:text-dark">
        Temperature (0-1):
      </label>
      <input
        id="slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={functions.value}
        onChange={functions.handleChangeTemp}
        className="w-full h-2 bg-gray-900 rounded-lg appearance-none cursor-pointer dark:bg-gray-400"
      />
      {/* Start and end labels */}
      <div className="w-full flex justify-between text-xs text-gray-600 mt-1">
        <span className="font-black ">0</span>
        <span className="font-black">1</span>
      </div>
      <div className="text-xs mt-1 text-black relative bottom-5 font-semibold">{functions.value}</div>
    </div>
  );
};

export default SliderBar;
