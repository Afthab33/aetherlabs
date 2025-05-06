import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectCard({ project }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Project Image */}
      <div className="h-36 sm:h-48 bg-primary/10 flex items-center justify-center overflow-hidden">
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={`${project.title} thumbnail`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-primary font-medium">Project Image</span>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
          {project.categories && project.categories.map((category, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-0.5 sm:py-1 bg-primary/10 text-black rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground line-clamp-2">{project.title}</h3>
        <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4 flex-grow line-clamp-3">{project.description}</p>
        <Link 
          to={`/projects/${project.slug}`} 
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm sm:text-base"
        >
          View Project <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}