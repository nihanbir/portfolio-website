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

    // Update local state when parent state changes
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
            <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
            <h3 className="text-xl font-semibold mb-4">Filter by Technologies</h3>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <button
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                            localSelectedTechs.includes(tech)
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                        aria-pressed={localSelectedTechs.includes(tech)}
                    >
                        {tech}
                    </button>
                ))}
                {localSelectedTechs.length > 0 && (
                    <button
                        onClick={clearFilters}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                    >
                        Clear All
                    </button>
                )}
            </div>
        </div>
    );
}