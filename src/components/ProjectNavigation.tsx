import React, { useState, useEffect } from 'react';
import { Project } from '@/data/index.ts';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Monitor, UserIcon, ListFilterIcon } from 'lucide-react';

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
                                      onProjectSelect,
                                      className
                                  }: ProjectNavigationProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

    // Check for mobile on initial render
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setIsCollapsed(true);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll event listener to update active section and project
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projectFilter', ...projects.map(project => `project-${project.id}`)];
            const scrollPosition = window.scrollY + 100; // Adjust for header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        if (section.startsWith('project-')) {
                            setActiveProjectId(section.replace('project-', ''));
                            setActiveSection(null);
                        } else {
                            setActiveSection(section);
                            setActiveProjectId(null);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [projects]);

    const scrollToProject = (projectId: string) => {
        onProjectSelect(projectId);
        setActiveProjectId(projectId);
        setActiveSection(null);

        // Allow time for state to update and render
        setTimeout(() => {
            const element = document.getElementById(`project-${projectId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        }, 100);
    };

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setActiveProjectId(null);

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    return (
        <div className={cn(
            "bg-sidebar fixed top-56 left-0 transition-all duration-300 z-50 h-full", // Removed fixed height
            isCollapsed ? "w-12" : "w-56",
            className
        )}>
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="flex items-center justify-between p-3 border-b border-sidebar-border">
                    <h3 className={cn(
                        "font-bold transition-opacity duration-300",
                        isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                    )}>
                        Navigation
                    </h3>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 rounded hover:bg-sidebar-accent transition-colors"
                        aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
                    >
                        {isCollapsed ? <ChevronRight className="text-sidebar-foreground"/> :
                            <ChevronLeft className="text-sidebar-foreground"/>}
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                    <div className="border-border">
                        <button
                            key="About"
                            className={cn(
                                "nav-button w-full flex items-center my-1 py-2 rounded-md hover:bg-sidebar-accent transition-colors project-card backdrop-blur-md bg-background/60 border border-border/55 shadow-lg overflow-hidden",
                                isCollapsed ? "justify-center px-2" : "pl-3 pr-2 justify-start",
                                activeSection === 'about' ? "bg-primary/20 text-primary" : ""
                            )}
                            onClick={() => scrollToSection('about')}
                        >
                            <UserIcon size={isCollapsed ? 20 : 16} />
                            <span className={cn(
                                "ml-2 truncate text-left transition-opacity duration-300 text-sidebar-foreground",
                                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                            )}>
                                {"About"}
                            </span>
                            {activeSection === 'about' && !isCollapsed && (
                                <ChevronRight className="ml-auto text-sidebar-foreground" size={16} />
                            )}
                        </button>
                    </div>
                    <button
                        key="Projects"
                        className={cn(
                            "nav-button w-full flex items-center my-1 py-2 rounded-md hover:bg-sidebar-accent transition-colors project-card backdrop-blur-md bg-background/60 border border-border/55 shadow-lg overflow-hidden",
                            isCollapsed ? "justify-center px-2" : "pl-3 pr-2 justify-start",
                            activeSection === 'projectFilter' ? "bg-primary/20 text-primary" : ""
                        )}
                        onClick={() => scrollToSection('projects')}
                    >
                        <ListFilterIcon size={isCollapsed ? 20 : 16} />
                        <span className={cn(
                            "ml-2 truncate text-left transition-opacity duration-300 text-sidebar-foreground",
                            isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                        )}>
                            {"Projects"}
                        </span>
                        {activeSection === 'projectFilter' && !isCollapsed && (
                            <ChevronRight className="ml-auto text-sidebar-foreground" size={16} />
                        )}
                    </button>
                    <div className={"border-b border-b-game-accent"}></div>
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            className={cn(
                                "nav-button w-full flex items-center my-1 py-2 rounded-md hover:bg-sidebar-accent transition-colors project-card backdrop-blur-md bg-background/60 border border-border/55 shadow-lg overflow-hidden",
                                isCollapsed ? "justify-center px-2" : "pl-3 pr-2 justify-start",
                                activeProjectId === project.id && expandedProjects.includes(project.id)
                                    ? "bg-primary/20 text-primary"
                                    : expandedProjects.includes(project.id)
                                        ? "bg-accent/5 text-accent"
                                        : "hover:bg-sidebar-accent",
                                
                            )}
                            onClick={() => scrollToProject(project.id)}
                            title={isCollapsed ? project.title : undefined}
                        >
                            <Monitor size={isCollapsed ? 20 : 16} className="flex-shrink-0 text-sidebar-foreground"/>
                            <span className={cn(
                                "ml-2 truncate text-left transition-opacity duration-300 text-sidebar-foreground",
                                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                            )}>
                                {project.title}
                            </span>
                            {activeProjectId === project.id && expandedProjects.includes(project.id) && !isCollapsed && (
                                <ChevronRight className="ml-auto text-sidebar-foreground" size={16} />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}