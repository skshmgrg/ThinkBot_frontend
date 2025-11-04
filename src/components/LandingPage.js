import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Image from "../assets/chatbot.png"; // use a generic chatbot/AI GIF here

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/chat");
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-[#e8e9eb] relative overflow-hidden font-['Poppins']">
      {/* --- Animated Wave Background --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg
          className="absolute bottom-0 w-[200%] h-auto animate-wave-slow opacity-40"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1e40af"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
          />
        </svg>

        <svg
          className="absolute bottom-0 w-[200%] h-auto animate-wave-fast opacity-25 scale-y-[-1]"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2563eb"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* --- Main Section --- */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-12 text-left">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start justify-center space-y-6 md:space-y-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Meet Your <br />
            <span className="text-[#38bdf8]">AI Chat Assistant</span> <br />
            ThinkBot
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-light max-w-md text-[#cbd5e1]">
            Ask questions, get insights, and chat with an AI that understands you —
            anytime, anywhere.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2563eb] text-white py-3 px-8 rounded-xl font-semibold shadow-lg hover:bg-[#1e40af] transition-all duration-300"
            onClick={handleStartChat}
          >
            Start Chat
          </motion.button>
        </motion.div>

      </main>

      {/* --- Footer --- */}
      <footer className="w-full py-4 bg-[#1e3a8a] text-center text-sm text-[#e8e9eb] relative z-10">
        <p>&copy; 2025 ChatBot AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
