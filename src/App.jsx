import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import SkillsSection from "./components/SkillsSection";
import AboutMeSection from "./components/AboutMeSection";
import ExtracurricularsSection from "./components/ExtracurricularsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = 'Justin\'s Portfolio';
  }, []); 
  return (
    <div className="App">
      <Header  />
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <TechnologiesSection />
      <SkillsSection />
      <ProjectsSection />
      <ExtracurricularsSection />
      <Footer />
    </div>
  );
}

export default App;
