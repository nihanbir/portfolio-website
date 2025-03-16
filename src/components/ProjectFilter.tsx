import React from "react";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
    technologies: string[];
    selectedTechs: string[];
    onFilterChange: (selected: string[]) => void;
}

export function ProjectFilter({ technologies, selectedTechs, onFilterChange }: ProjectFilterProps) {
    const [localSelectedTechs, setLocalSelectedTechs] = useState<string[]>(selectedTechs);

    useEffect(() => {
        setLocalSelectedTechs(selectedTechs);
    }, [selectedTechs]);

    const toggleTech = (tech: string) => {
        let newSelected;
        if (localSelectedTechs.includes(tech)) {
            newSelected = localSelectedTechs.filter(id => id !== tech);
        } else {
            newSelected = [...localSelectedTechs, tech];
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
                        className={cn(
                            "tech-tag",
                            selectedTechs.includes(tech) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        )}
                    >
                        {tech}
                    </button>
                ))}
                {selectedTechs.length > 0 && (
                    <button
                        onClick={clearFilters}
                        className="tech-tag bg-destructive/10 text-destructive hover:bg-destructive/20"
                    >
                        Clear All
                    </button>
                )}
            </div>
        </div>
    );
}