import React, { useState, useEffect } from 'react';
import { Project } from '@/data/index.ts';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Monitor } from 'lucide-react';

interface ProjectNavigationProps {
    projects: Project[];
    expandedProjects: string[];
    activeProject: string | null;
    onProjectSelect: (projectId: string) => void;
    className?: string;
}

export function ProjectNavigation({
                                      projects,
                                      expandedProjects,
                                      activeProject,
                                      onProjectSelect,
                                      className
                                  }: ProjectNavigationProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Check for mobile on initial render
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToProject = (projectId: string) => {
        onProjectSelect(projectId);

        // Allow time for state to update and render
        setTimeout(() => {
            const element = document.getElementById(`project-${projectId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        }, 100);
    };

    return (
        <div className={cn(
            "bg-sidebar h-[calc(100vh-5rem)] fixed top-20 left-0 transition-all duration-300 z-50",
            isCollapsed ? "w-12" : "w-56",
            className
        )}>
            <div className="sticky top-20 flex flex-col h-full overflow-y-auto">
                <div className="flex items-center justify-between p-3 border-b border-sidebar-border">
                    <h3 className={cn(
                        "font-bold transition-opacity duration-300",
                        isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    )}>
                        Projects
                    </h3>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 rounded hover:bg-sidebar-accent transition-colors"
                        aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
                    >
                        {isCollapsed ? <ChevronRight className="text-sidebar-foreground" /> : <ChevronLeft className="text-sidebar-foreground" />}
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            className={cn(
                                "nav-button w-full flex items-center my-1 py-2 rounded-md hover:bg-sidebar-accent transition-colors project-card backdrop-blur-md bg-background/60 border border-border/55 shadow-lg overflow-hidden",
                                expandedProjects.includes(project.id) ? "bg-primary/20 text-primary" : "hover:bg-sidebar-accent",
                                isCollapsed ? "justify-center px-2" : "pl-3 pr-2 justify-start"
                            )}
                            onClick={() => scrollToProject(project.id)}
                            title={isCollapsed ? project.title : undefined}
                        >
                            <Monitor size={isCollapsed ? 20 : 16} className="flex-shrink-0 text-sidebar-foreground" />
                            <span className={cn(
                                "ml-2 truncate text-left transition-opacity duration-300 text-sidebar-foreground",
                                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                            )}>
                                {project.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}