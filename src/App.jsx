import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Components/HomeMain";
import Navbar from "./Components/Navbar";
import DarkFooterSection from "./Components/DarkFooterSection";
import Abouty from "./Pages/Abouty";
import Contacty from "./Pages/Contacty";
import BlogDetailHeader from "./Pages/BlogDetailHeader";
import BlogHeader from "./Pages/BlogHeader";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<Abouty />} />
        <Route path="/contact" element={<Contacty />} />
        <Route path="/blogs" element={<BlogHeader />} />
        <Route path="/blog/:id" element={<BlogDetailHeader/>} />
      </Routes>
      <DarkFooterSection />
    </div>
  );
};

export default App;
