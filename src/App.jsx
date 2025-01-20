import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="content">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<Home />} /> {/* Default route */}
          </Routes>
        </div>
        <div className="footer">
          <div>&copy;2025 Matt Martinez. All rights reserved.</div>
          <div className="footer-right">mattmartinez64@icloud.com</div>
        </div>
      </div>
    </Router>
  );
};

export default App;
