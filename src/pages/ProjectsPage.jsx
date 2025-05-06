import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategoryIcon } from '../utils/iconUtils';
import { CategoryTabs } from '../components/projects/CategoryTabs';
import { SubcategoryTabs } from '../components/projects/SubcategoryTabs';
import { ProjectCard } from '../components/projects/ProjectCard';

// Import all projects
import { allProjects } from '../data/projects';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('A11Y');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  
  // Extract unique categories and subcategories from projects
  const categories = {};
  allProjects.forEach(project => {
    project.categories.forEach(category => {
      if (!categories[category]) {
        categories[category] = ['All'];
      }
      
      // Add subcategories if they exist
      if (project.subcategories) {
        project.subcategories.forEach(subcategory => {
          if (!categories[category].includes(subcategory)) {
            categories[category].push(subcategory);
          }
        });
      }
    });
  });
  
  // Filter projects by active category and subcategory
  const filteredProjects = allProjects.filter(project => 
    project.categories.includes(activeCategory) && 
    (activeSubcategory === 'All' || (project.subcategories && project.subcategories.includes(activeSubcategory)))
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-gray-900">Our Projects</h1>
        
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
          categories={categories}
        />
        
        {categories[activeCategory]?.length > 1 && (
          <SubcategoryTabs
            activeCategory={activeCategory}
            activeSubcategory={activeSubcategory}
            setActiveSubcategory={setActiveSubcategory}
            categories={categories}
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.slug}`}>
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