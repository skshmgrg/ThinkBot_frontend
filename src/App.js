// import React,{useState}from "react";
// import Page from "./components/Page";
// import axios from 'axios'

// function App() {
//   return (
//     <div>
//       <Page />
//     </div>
//   );
// }
// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Landing Page Component
import Page from "./components/Page"; // Chat Page Component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;