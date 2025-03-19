import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Link, Calendar, Users, Monitor, Play } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button.tsx";
import { ImageGallery } from "@/components/ImageGallery.tsx";
import { MiniImageGallery } from "@/components/MiniImageGallery.tsx";
import { FullDescription } from "@/components/FullDescription.tsx";
import { CodeSnippets } from "@/components/CodeSnippets.tsx";
import { Project } from '@/data';

// ProjectCard Component
export interface ProjectCardProps {
    project: Project;
    key?: string;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

export function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
    const [height, setHeight] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [showAdditionalText, setShowAdditionalText] = useState(false);
    const [codeSnippetsExpanded, setCodeSnippetsExpanded] = useState(false);

    const handleToggle = () => {
        onToggleExpand();
    };

    useEffect(() => {
        if (contentRef.current && isExpanded) {
            const timer = setTimeout(() => {
                setHeight(contentRef.current.scrollHeight);
            }, 0);
            return () => clearTimeout(timer);
        } else {
            setHeight(null);
        }
    }, [isExpanded, project, showAdditionalText, codeSnippetsExpanded]);

    const { introText, sections } = parseDescriptionSections(project);

    return (
        <div
            id={`project-${project.id}`}
            className={cn(
                "project-card backdrop-blur-md bg-background/60 border border-primary/70 shadow-lg rounded-xl overflow-hidden mb-6 transition-all duration-300",
                isExpanded && "expanded"
            )}
        >
            <div className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex flex-col space-y-2 flex-grow">
                        <h2 className="text-xl sm:text-2xl font-bold text-primary">{project.title}</h2>
                        <div className="flex-wrap">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-tag text-xs sm:text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {!isExpanded && (
                        <MiniImageGallery
                            images={project.images.gallery}
                            mainImage={project.images.main}
                        />
                    )}

                    <button
                        onClick={handleToggle}
                        className="p-2 rounded-full hover:bg-muted transition-colors flex-shrink-0"
                        aria-label={isExpanded ? "Collapse project" : "Expand project"}
                    >
                        {isExpanded ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
                    </button>
                </div>

                <p className="mb-4 text-sm sm:text-base text-muted-foreground">{project.shortDescription}</p>

                <div
                    ref={contentRef}
                    style={{
                        maxHeight: isExpanded ? height ? `${height}px` : '5000px' : '0',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.5s ease, opacity 0.3s ease'
                    }}
                >
                    <div className="pt-4 space-y-6">
                        <ImageGallery
                            images={project.images.gallery}
                            mainImage={project.images.main}
                            projectTitle={project.title}
                        />
                    </div>

                    <FullDescription introText={introText} sections={sections} projectId={project.id} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                        <div className="space-y-4">
                            <h3 className="text-lg sm:text-xl font-semibold">Project Details</h3>
                            <div className="space-y-2">
                                {project.role && (
                                    <div className="flex items-center text-sm">
                                        <span className="font-medium mr-2">Role:</span>
                                        <ul className="list-disc pl-5 space-y-1 text-card-foreground/80">
                                            {project.role.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {project.platform && (
                                    <div className="flex items-center text-sm">
                                        <Monitor size={16} className="mr-2 text-primary" />
                                        <span className="font-medium mr-2">Platform:</span>
                                        <span>{project.platform}</span>
                                    </div>
                                )}

                                {project.duration && (
                                    <div className="flex items-center text-sm">
                                        <Calendar size={16} className="mr-2 text-primary" />
                                        <span className="font-medium mr-2">Duration:</span>
                                        <span>{project.duration}</span>
                                    </div>
                                )}

                                {project.teamSize && (
                                    <div className="flex items-center text-sm">
                                        <Users size={16} className="mr-2 text-primary" />
                                        <span className="font-medium mr-2">Team Size:</span>
                                        <span>{project.teamSize}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex space-x-3 pt-2">
                                {project.videoUrl && (
                                    <a
                                        href={project.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
                                    >
                                        <Link size={16} className="mr-1" />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {project.codeSnippets && project.codeSnippets.length > 0 && (
                            <CodeSnippets
                                codeSnippets={project.codeSnippets}
                                onExpandChange={(expanded) => setCodeSnippetsExpanded(expanded)}
                            />
                        )}
                    </div>

                    {project.additionalText && (
                        <div className="p-4 sm:p-6 border-b border-border overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg sm:text-xl font-semibold">Additional Information</h4>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowAdditionalText(!showAdditionalText)}
                                >
                                    {showAdditionalText ? "Show Less" : "Show More"}
                                </Button>
                            </div>

                            {showAdditionalText && (
                                <pre className="max-h-96 overflow-y-auto p-4 text-sm bg-muted rounded-md"
                                     rel="noopener noreferrer"
                                >
                                    {project.additionalText}
                                </pre>
                            )}
                        </div>
                    )}

                    <div className="mt-8 flex justify-end space-x-4">
                        {project.githubUrl && (
                            <Button variant="outline" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="w-4 h-4 mr-2" />
                                    GitHub Repository
                                </a>
                            </Button>
                        )}

                        {project.playUrl && (
                            <Button asChild>
                                <a href={project.playUrl} target="_blank" rel="noopener noreferrer">
                                    <Play className="w-4 h-4 mr-2" />
                                    Play Game
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper function to parse description sections
function parseDescriptionSections(project: Project) {
    if (!project.fullDescription) return { introText: '', sections: [] };

    const lines = project.fullDescription.split('\n');
    let introText = '';
    const sections: { title: string; content: string }[] = [];

    let currentTitle = '';
    let currentContent: string[] = [];
    let parsingIntro = true;

    lines.forEach(line => {
        const isTitleLine = line.trim().endsWith(':') ||
            (line.trim() === line.trim().toUpperCase() && line.trim().length > 3);

        if (isTitleLine) {
            parsingIntro = false;

            if (currentTitle && currentContent.length) {
                sections.push({
                    title: currentTitle,
                    content: currentContent.join('\n')
                });
                currentContent = [];
            }
            currentTitle = line.trim();
        } else if (line.trim() || (currentContent.length > 0 && line === '')) {
            if (parsingIntro && sections.length === 0 && !currentTitle) {
                introText += (introText ? '\n' : '') + line;
            } else {
                currentContent.push(line);
            }
        }
    });

    if (currentTitle && currentContent.length) {
        sections.push({
            title: currentTitle,
            content: currentContent.join('\n')
        });
    }

    if (sections.length === 0 && project.fullDescription.trim() && !introText) {
        return {
            introText: '',
            sections: [{
                title: 'Overview',
                content: project.fullDescription
            }]
        };
    }

    return { introText, sections };
}