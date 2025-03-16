import { useState, useEffect } from 'react';
import Header from '@/components/Header.tsx';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { ProjectFilter } from '@/components/ProjectFilter.tsx';
import { projects } from '@/data/projects';
import { Project } from '@/data/index.ts';
import { ChevronRight, ChevronLeft, Download, Mail, Linkedin } from 'lucide-react';

const Index = () => {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    useEffect(() => {
        if (selectedTechs.length === 0) {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => {
                // Check if project has at least one of the selected technologies
                return project.technologies.some((tech) => selectedTechs.includes(tech.id));
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
            <Header />

            <main className="container mx-auto pb-20">
                <section id="about" className="py-16 md:py-24">
                    <div className="max-w-3xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Game Programmer <span className="text-primary">Portfolio</span>
                        </h1>
                        <p className="text-xl mb-8 text-foreground/80">
                            I'm a passionate game programmer with experience in Unity, Unreal Engine,
                            and web-based game technologies. I specialize in creating engaging gameplay
                            mechanics, optimizing performance, and implementing complex systems.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                                View Projects
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="/resume.pdf"
                                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                            >
                                Resume
                                <Download className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-12">
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="md:hidden mb-6 px-4">
                            <TechFilter
                                technologies={technologies}
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
                                <TechFilter
                                    technologies={technologies}
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

                <section id="contact" className="py-16 md:py-24">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
                        <p className="text-lg mb-8 text-foreground/80">
                            I'm currently available for freelance projects, full-time positions,
                            or collaborations on interesting game development projects.
                        </p>
                        <div className="inline-flex items-center justify-center space-x-4">
                            <a
                                href="mailto:contact@example.com"
                                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                Email Me
                            </a>
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                            >
                                <Linkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Index;