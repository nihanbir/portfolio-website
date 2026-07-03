import React, { useState, useEffect } from 'react';
import { Project } from '@/data/index.ts';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Monitor, UserIcon, ListFilterIcon, Cpu, Gamepad2 } from 'lucide-react';

const navigationSections = [
    { id: 'engineering', title: 'Software Engineering', icon: Cpu },
    { id: 'gameplay', title: 'Game Development', icon: Gamepad2 }
] as const;

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
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

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

    // Scroll event listener to update active section and project
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'about',
                'projectFilter',
                ...projects.map(project => `project-${project.id}`),
                ...navigationSections.map(section => `${section.id}-projects-section`)
            ];
            const scrollPosition = window.scrollY + 100; // Adjust for header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    const sectionBottom = offsetTop + offsetHeight;
                    const buffer = 100; // Adjust this value as needed

                    // Check if the scroll position is within the section bounds, including the buffer
                    if (scrollPosition >= offsetTop - buffer && scrollPosition < sectionBottom - buffer) {
                        if (section.startsWith('project-')) {
                            setActiveProjectId(section.replace('project-', ''));
                            setActiveSection(null);
                        } else {
                            setActiveSection(section.replace('-projects-section', ''));
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

        // Allow time for state to update and render
        setTimeout(() => {
            const element = document.getElementById(`project-${projectId}`);
            if (element) {
                const offset = 90
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
                            key="about"
                            className={cn(
                                "nav-button w-full flex items-center my-1 py-2 rounded-md hover:bg-sidebar-accent transition-colors project-card backdrop-blur-md bg-background/60 border border-border/55 shadow-lg overflow-hidden",
                                isCollapsed ? "justify-center px-2" : "pl-3 pr-2 justify-start",
                                activeSection === 'about' ? "bg-primary/20 text-primary border-primary" : ""
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
                        key="projects"
                        className={cn(
                            "nav-button w-full flex items-center my-1 py-2 rounded-md hover:bg-sidebar-accent transition-colors project-card backdrop-blur-md bg-background/60 border border-border/55 shadow-lg overflow-hidden",
                            isCollapsed ? "justify-center px-2" : "pl-3 pr-2 justify-start",
                            activeSection === 'projectFilter' ? "bg-primary/20 text-primary border-primary" : ""
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
                    
                    {navigationSections.map((section) => {
                        const sectionProjects = projects.filter(project => project.category === section.id);
                        if (sectionProjects.length === 0) return null;
                        const SectionIcon = section.icon;

                        return (
                            <div key={section.id} className="mt-2">
                                <button
                                    className={cn(
                                        "nav-button flex w-full items-center rounded-md py-2 transition-colors hover:bg-sidebar-accent",
                                        isCollapsed ? "justify-center px-2" : "px-3 justify-start",
                                        activeSection === section.id && "bg-primary/15 text-primary"
                                    )}
                                    onClick={() => scrollToSection(`${section.id}-projects-section`)}
                                    title={isCollapsed ? section.title : undefined}
                                >
                                    <SectionIcon size={isCollapsed ? 20 : 16} className={cn("flex-shrink-0", section.id === 'gameplay' ? "text-accent" : "text-primary")} />
                                    <span className={cn(
                                        "ml-2 truncate text-left text-xs font-semibold uppercase tracking-wide transition-opacity duration-300",
                                        isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                                    )}>
                                        {section.title}
                                    </span>
                                </button>

                                {sectionProjects.map((project) => (
                                    <button
                                        key={project.id}
                                        className={cn(
                                            "nav-button my-1 flex w-full items-center rounded-md border border-border/40 bg-background/40 py-2 transition-colors hover:bg-sidebar-accent",
                                            isCollapsed ? "justify-center px-2" : "pl-6 pr-2 justify-start",
                                            activeProjectId === project.id && expandedProjects.includes(project.id)
                                                ? "bg-primary/20 text-primary border-primary"
                                                : expandedProjects.includes(project.id)
                                                    ? "bg-accent/5 text-accent border-accent/20"
                                                    : "hover:bg-sidebar-accent"
                                        )}
                                        onClick={() => scrollToProject(project.id)}
                                        title={isCollapsed ? project.title : undefined}
                                    >
                                        <Monitor size={isCollapsed ? 18 : 14} className="flex-shrink-0 text-sidebar-foreground"/>
                                        <span className={cn(
                                            "ml-2 truncate text-left text-sm transition-opacity duration-300 text-sidebar-foreground",
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
