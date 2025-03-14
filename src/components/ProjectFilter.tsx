
import React from "react";

interface ProjectFilterProps {
  technologies: string[];
  activeTechs: string[];
  toggleTech: (tech: string) => void;
}

const ProjectFilter = ({ technologies, activeTechs, toggleTech }: ProjectFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Filter by Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`tech-tag ${
              activeTechs.includes(tech) ? "tech-tag-active" : "tech-tag-inactive"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
