import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectCard({ project }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Project Image */}
      <div className="h-48 bg-primary/10 flex items-center justify-center overflow-hidden">
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={`${project.title} thumbnail`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-primary font-medium">Project Image</span>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories && project.categories.map((category, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-card-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <Link 
          to={`/projects/${project.slug}`} 
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          View Project <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}