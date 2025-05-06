import React from 'react';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({ filteredProjects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground col-span-3">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}