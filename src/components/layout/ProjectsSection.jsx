import React, { useState } from 'react';
import { CategoryTabs } from '../projects/CategoryTabs';
import { SubcategoryTabs } from '../projects/SubcategoryTabs';
import { ProjectsGrid } from '../projects/ProjectsGrid';
import { ProjectCard } from '../projects/ProjectCard';
import { Link } from 'react-router-dom';
import { allProjects } from '@/data/projects';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('A11Y');
  const [activeSubcategory, setActiveSubcategory] = useState('Accessibility Tools');
  
  // Extract unique categories and subcategories
  const categories = {
    'A11Y': ['All', 'Accessibility Tools', 'Screen Readers', 'WCAG Standards'],
    'AI/ML': ['All', 'Neural Networks', 'Data Analysis', 'Predictive Models'],
    'Web Application': ['All', 'Frontend', 'Backend', 'Full Stack'],
    'Mobile Application': ['All', 'Android', 'iOS', 'Cross-platform']
  };
  
  // Helper function to determine if a project belongs to a subcategory
  const belongsToSubcategory = (project, subcategory) => {
    if (subcategory === 'All') return true;
    
    // Check if the project has a subcategories array
    if (project.subcategories && project.subcategories.includes(subcategory)) {
      return true;
    }
    
    // Fallback to checking if project has a single subcategory property
    return project.subcategory === subcategory;
  };
  
  // Filter projects by active category and subcategory
  const filteredProjects = allProjects.filter(project => 
    project.categories.includes(activeCategory) && 
    belongsToSubcategory(project, activeSubcategory)
  );

  return (
    <div className="py-16 px-6 bg-muted/30" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Our Projects</h2>
        
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
          categories={categories}
        />
        
        <SubcategoryTabs
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
          setActiveSubcategory={setActiveSubcategory}
          categories={categories}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="block h-full">
              <ProjectCard project={project} />
            </Link>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-3 text-center py-12 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}