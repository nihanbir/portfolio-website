import React from "react";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
    technologies: string[];
    selectedTechs: string[];
    toggleTech: (tech: string) => void;
}

export function ProjectFilter({ technologies, selectedTechs, onFilterChange }: ProjectFilterProps) {
    const [localSelectedTechs, setLocalSelectedTechs] = useState<string[]>(selectedTechs);

    useEffect(() => {
        setLocalSelectedTechs(selectedTechs);
    }, [selectedTechs]);

    const toggleTech = (techId: string) => {
        let newSelected;
        if (localSelectedTechs.includes(techId)) {
            newSelected = localSelectedTechs.filter(id => id !== techId);
        } else {
            newSelected = [...localSelectedTechs, techId];
        }
        setLocalSelectedTechs(newSelected);
        onFilterChange(newSelected);
    };

    const clearFilters = () => {
        setLocalSelectedTechs([]);
        onFilterChange([]);
    };
    
    return (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Filter by Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`tech-tag ${
                  selectedTechs.includes(tech) ? "tech-tag-active" : "tech-tag-inactive"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
    );
}
