import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Function to handle scroll to section
  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
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
    <nav className="bg-background border-b border-border px-4 md:px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-foreground">
          Aether<span className="text-primary">Labs</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-black font-bold hover:text-primary"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-black font-bold hover:text-primary"
          >
            About
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 mt-4 border-t border-border">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-black font-bold hover:text-primary text-left py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-black font-bold hover:text-primary text-left py-2"
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}