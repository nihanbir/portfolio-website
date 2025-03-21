import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { ProjectFilter } from '@/components/ProjectFilter';
import { projects, getAllTechnologies } from '@/data/projects';
import { Project } from '@/data';
import Footer from '@/components/Footer';
import About from "@/components/About.tsx";

const Index = () => {
    const [expandedProjects, setExpandedProjects] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem('expandedProjects');
                return saved ? JSON.parse(saved) : [];
            } catch (e) {
                return [];
            }
        }
        return [];
    });

    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    // Get all unique technologies
    const allTechnologies = getAllTechnologies();

    useEffect(() => {
        if (selectedTechs.length === 0) {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => {
                // Check if project has at least one of the selected technologies
                return project.technologies.some((tech) => selectedTechs.includes(tech));
            });
            setFilteredProjects(filtered);

            // If the currently expanded project is no longer in the filtered list, collapse it
            setExpandedProjects(prev => prev.filter(id => filtered.some(p => p.id === id)));
        }
    }, [selectedTechs]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('expandedProjects', JSON.stringify(expandedProjects));
        }
    }, [expandedProjects]);

    const handleToggleExpand = (projectId: string) => {
        setExpandedProjects(prev => {
            if (prev.includes(projectId)) {
                return prev.filter(id => id !== projectId);
            } else {
                return [...prev, projectId];
            }
        });
    };

    const handleProjectSelect = (projectId: string) => {
        setActiveProject(projectId);

        // If the project isn't expanded yet, expand it
        if (!expandedProjects.includes(projectId)) {
            handleToggleExpand(projectId);
        }
    };

    const handleFilterChange = (selected: string[]) => {
        setSelectedTechs(selected);
    };

    return (
        <div className="min-h-screen bg-background items-center">
            <div className={"sticky top-0 z-[100]"}>
                <Header/>
            </div>

            <main className="container mx-auto pb-20 pr-0">
                <section id="about">
                    <About/>
                </section>
                {/* Project Navigation (Sidebar) */}
                <ProjectNavigation
                    projects={filteredProjects}
                    expandedProjects={expandedProjects}
                    activeProject={activeProject}
                    onProjectSelect={handleProjectSelect}
                />
                <div className="flex flex-col md:flex-row">
                    {/* Main Content */}
                    <section id="projects" className="py-12">
                        <div className="flex-1 px-4 md:px-8">
                            <div className="mb-8">
                                <section id="projectFilter" className="py-12">
                                
                                    <ProjectFilter
                                        technologies={allTechnologies}
                                        selectedTechs={selectedTechs}
                                        onFilterChange={handleFilterChange}
                                    />
                                </section>
                            </div>

                            <div className="space-y-8">
                            {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            isExpanded={expandedProjects.includes(project.id)}
                                            onToggleExpand={() => handleToggleExpand(project.id)}
                                        />
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-lg text-muted-foreground">
                                            No projects match the selected filters.
                                        </p>
                                        <button
                                            onClick={() => setSelectedTechs([])}
                                            className="mt-4 text-primary hover:underline"
                                        >
                                            Clear filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Index;