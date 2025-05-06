import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ProjectDetail } from './components/projects/ProjectDetail';
import { allProjects } from './data/projects';

// Import project data
import { a11yPDFProject } from './data/projects/a11yPDF';
// Import other project data files

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* Project pages */}
        <Route 
          path="/projects/accessibility-for-pdf" 
          element={<ProjectDetail {...a11yPDFProject} />} 
        />
        
        {/* Add more project routes */}
        
        {/* 404 Not found */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}