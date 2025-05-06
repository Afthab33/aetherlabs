import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { ProjectsSection } from '@/components/layout/ProjectsSection';
import { CtaSection } from '@/components/layout/CtaSection';
import { Footer } from '@/components/layout/Footer';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { a11yPDFProject } from '@/data/projects/a11yPDF';

// This component handles scrolling logic after navigation
function ScrollToSection() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.hash) {
      // Remove the # symbol
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.state && location.state.scrollToSection) {
      // Handle scrolling from state (used by ProjectDetail)
      const element = document.getElementById(location.state.scrollToSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProjectsSection />
            </>
          } />
          
          <Route 
            path="/projects/accessibility-for-pdf" 
            element={<ProjectDetail {...a11yPDFProject} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
