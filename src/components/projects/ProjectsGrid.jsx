import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({ filteredProjects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground col-span-1 sm:col-span-2 lg:col-span-3">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}