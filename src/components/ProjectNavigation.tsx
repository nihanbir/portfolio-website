import { useState, useEffect } from 'react';
import { Project } from '@/data/index.ts';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Monitor } from 'lucide-react';

interface ProjectNavigationProps {
    projects: Project[];
    expandedProject: string | null;
    onProjectSelect: (projectId: string) => void;
    className?: string;
}

export function ProjectNavigation({
                                      projects,
                                      expandedProject,
                                      onProjectSelect,
                                      className
                                  }: ProjectNavigationProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const scrollToProject = (projectId: string) => {
        onProjectSelect(projectId);

        // Allow time for state to update and render
        setTimeout(() => {
            const element = document.getElementById(`project-${projectId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <div className={cn(
            "bg-sidebar transition-all duration-300",
            isCollapsed ? "w-12" : "w-56",
            className
        )}>
            <div className="sticky top-20 flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
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
                                "nav-button",
                                expandedProject === project.id && "active",
                                isCollapsed ? "justify-center px-2" : "pl-3"
                            )}
                            onClick={() => scrollToProject(project.id)}
                            title={isCollapsed ? project.title : undefined}
                        >
                            <Monitor size={isCollapsed ? 20 : 16} className="flex-shrink-0" />
                            <span className={cn(
                                "ml-2 truncate text-left transition-opacity duration-300",
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
