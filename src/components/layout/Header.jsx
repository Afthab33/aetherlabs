import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  // Function to handle scroll to section
  const scrollToSection = (sectionId) => {
    // If already on homepage, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };
  
  return (
    <nav className="bg-background border-b border-border px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-foreground">
          Aether<span className="text-primary">Labs</span>
        </Link>
        <div className="flex space-x-6">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-muted-foreground hover:text-primary"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('collaborators')} 
            className="text-muted-foreground hover:text-primary"
          >
            Collaborators
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-muted-foreground hover:text-primary"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}