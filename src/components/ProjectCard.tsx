import React, { useState, useRef, useEffect } from 'react';
import {ChevronDown, ChevronUp, Link, Github, Calendar, Users, Monitor, Code, Play} from 'lucide-react';
import { cn } from '@/lib/utils';
import {Button} from "@/components/ui/button.tsx";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@/components/ui/tabs";
import {ImageGallery} from "@/components/ImageGallery.tsx";
import { Project } from '@/data';

export interface ProjectCardProps {
    project: Project;
    key?: string;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

export function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
    const [height, setHeight] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [showCodeSnippets, setShowCodeSnippets] = useState(false);
    const [showAdditionalText, setShowAdditionalText] = useState(false);


    const handleToggle = () => {
        onToggleExpand();
    };

    const [activeTab, setActiveTab] = useState(
        project.codeSnippets && project.codeSnippets.length > 0
            ? project.codeSnippets[0].title.replace(/\s+/g, '-').toLowerCase()
            : ""
    );

    useEffect(() => {
        if (contentRef.current && isExpanded) {
            // Use setTimeout to allow the DOM to update first
            const timer = setTimeout(() => {
                setHeight(contentRef.current.scrollHeight);
            }, 0);
            return () => clearTimeout(timer);
        } else {
            setHeight(null);
        }
    }, [isExpanded, project, showCodeSnippets, showAdditionalText, activeTab]);

    // Function to handle image errors
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = '/api/placeholder/400/300';
    };

    return (
        <div
            id={`project-${project.id}`}
            className={cn(
                "project-card backdrop-blur-md bg-background/60 border border-primary/70 shadow-lg rounded-xl overflow-hidden mb-6 transition-all duration-300",
                isExpanded && "expanded"
            )}
        >
            <div className="p-4 sm:p-6">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                        <div className="flex flex-col space-y-2 flex-grow">
                            <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Mini Gallery for collapsed state */}
                        {!isExpanded && (
                            <div className="flex-shrink-0 flex items-center gap-2">
                                <div className="h-14 w-14 rounded-md overflow-hidden shadow-sm">
                                    <img
                                        src={project.images.main}
                                        alt={`${project.title} main image`}
                                        className="h-full w-full object-cover"
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {project.images.gallery.slice(0, 2).map((image, index) => (
                                        <div key={index} className="h-14 w-14 rounded-md overflow-hidden shadow-sm">
                                            <img
                                                src={image}
                                                alt={`${project.title} preview ${index + 1}`}
                                                className="h-full w-full object-cover"
                                                onError={handleImageError}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={handleToggle}
                                    className="p-2 rounded-full hover:bg-muted transition-colors flex-shrink-0"
                                    aria-label={isExpanded ? "Collapse project" : "Expand project"}
                                >
                                    <ChevronDown className="text-primary" />
                                </button>
                            </div>
                        )}

                        {/* Just the toggle button for expanded state */}
                        {isExpanded && (
                            <button
                                onClick={handleToggle}
                                className="p-2 rounded-full hover:bg-muted transition-colors"
                                aria-label="Collapse project"
                            >
                                <ChevronUp className="text-primary" />
                            </button>
                        )}
                    </div>

                    <p className="mb-4 text-muted-foreground">{project.shortDescription}</p>

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
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">About the Project</h3>
                            <p className="text-foreground/90 leading-relaxed">{project.fullDescription}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Project Details</h3>
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
                                            <Monitor size={16} className="mr-2 text-primary"/>
                                            <span className="font-medium mr-2">Platform:</span>
                                            <span>{project.platform}</span>
                                        </div>
                                    )}

                                    {project.duration && (
                                        <div className="flex items-center text-sm">
                                            <Calendar size={16} className="mr-2 text-primary"/>
                                            <span className="font-medium mr-2">Duration:</span>
                                            <span>{project.duration}</span>
                                        </div>
                                    )}

                                    {project.teamSize && (
                                        <div className="flex items-center text-sm">
                                            <Users size={16} className="mr-2 text-primary"/>
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
                                <div className="border-b border-border pb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-xl font-semibold">Code Snippets</h4>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setShowCodeSnippets(!showCodeSnippets)}
                                            className="flex items-center"
                                        >
                                            <Code className="w-4 h-4 mr-2"/>
                                            {showCodeSnippets ? "Hide Code" : "Show Code"}
                                        </Button>
                                    </div>

                                    {showCodeSnippets && project.codeSnippets && project.codeSnippets.length > 0 && (
                                        <div className="mt-4 animate-fade-in">
                                            <Tabs defaultValue={project.codeSnippets[0].title.replace(/\s+/g, '-').toLowerCase()}
                                                  onValueChange={setActiveTab}
                                            >
                                                <TabsList className="mb-2">
                                                    {project.codeSnippets.map((snippet) => (
                                                        <TabsTrigger
                                                            key={snippet.title}
                                                            value={snippet.title.replace(/\s+/g, '-').toLowerCase()}
                                                        >
                                                            {snippet.title}
                                                        </TabsTrigger>
                                                    ))}
                                                </TabsList>

                                                {project.codeSnippets.map((snippet) => (
                                                    <TabsContent
                                                        key={snippet.title}
                                                        value={snippet.title.replace(/\s+/g, '-').toLowerCase()}
                                                    >
                                                        <div className="relative">
                                                            <pre className="max-h-96 overflow-y-auto p-4 text-sm bg-muted rounded-md">
                                                                <code className="font-mono whitespace-pre">{snippet.code}</code>
                                                            </pre>
                                                        </div>
                                                    </TabsContent>
                                                ))}
                                            </Tabs>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {project.additionalText && (
                            <div className="p-6 border-b border-border overflow-y-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-xl font-semibold">Additional Information</h4>
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
                                        <Github className="w-4 h-4 mr-2"/>
                                        GitHub Repository
                                    </a>
                                </Button>
                            )}

                            {project.playUrl && (
                                <Button asChild>
                                    <a href={project.playUrl} target="_blank" rel="noopener noreferrer">
                                        <Play className="w-4 h-4 mr-2"/>
                                        Play Game
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}