import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { ProjectFilter } from '@/components/ProjectFilter';
import { projects, getAllTechnologies } from '@/data/projects';
import { Project } from '@/data';
import { ChevronRight, ChevronLeft, Download, Mail, Linkedin } from 'lucide-react';
import Footer from '@/components/Footer';
import About from "@/components/About.tsx";

const Index = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
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
            if (expandedProject && !filtered.some(p => p.id === expandedProject)) {
                setExpandedProject(null);
            }
        }
    }, [selectedTechs, expandedProject]);

    const handleToggleExpand = (projectId: string) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    const handleFilterChange = (selected: string[]) => {
        setSelectedTechs(selected);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <main className="pt-24">
                <About/>
                <section id="projects" className="py-12">
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="md:hidden mb-6 px-4">
                            <ProjectFilter
                                technologies={allTechnologies}
                                selectedTechs={selectedTechs}
                                onFilterChange={handleFilterChange}
                            />
                        </div>

                        <ProjectNavigation
                            projects={filteredProjects}
                            expandedProject={expandedProject}
                            onProjectSelect={(projectId) => setExpandedProject(projectId)}
                            className="hidden md:block"
                        />

                        <div className="flex-1 px-4 md:px-8">
                            <div className="mb-8 hidden md:block">
                                <ProjectFilter
                                    technologies={allTechnologies}
                                    selectedTechs={selectedTechs}
                                    onFilterChange={handleFilterChange}
                                />
                            </div>

                            <div className="space-y-8">
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            isExpanded={expandedProject === project.id}
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
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Index;