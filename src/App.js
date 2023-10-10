import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import SkillSection from './components/SkillSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <SkillSection />
      <EducationSection/>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
