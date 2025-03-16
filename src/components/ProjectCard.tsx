import React, { useState, useRef, useEffect } from 'react';
import {ChevronDown, ChevronUp, Link, Github, Calendar, Users, Monitor, Code, Play} from 'lucide-react';
import { cn } from '@/lib/utils';
import {Button} from "@/components/ui/button.tsx";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@radix-ui/react-tabs";
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

    const handleToggle = () => {
        onToggleExpand();
    };

    useEffect(() => {
        if (contentRef.current && isExpanded) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(null);
        }
    }, [isExpanded, project]);

    return (
        <div
            id={`project-${project.id}`}
            className={cn(
                "project-card",
                isExpanded && "expanded"
            )}
            >
            <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                    <button
                        onClick={handleToggle}
                        className="p-1 rounded-full hover:bg-muted transition-colors"
                        aria-label={isExpanded ? "Collapse project" : "Expand project"}
                        >
                        {isExpanded ? (
                            <ChevronUp className="text-primary" />
                        ) : (
                            <ChevronDown className="text-primary" />
                        )}
                    </button>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="mb-4 text-muted-foreground">{project.shortDescription}</p>

                    <div
                        ref={contentRef}
                        style={{
                            maxHeight: isExpanded ? height ? `${height}px` : '2000px' : '0',
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Project Details</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <Monitor size={16} className="mr-2 text-primary" />
                                        <span className="font-medium mr-2">Platform:</span>
                                        <span>{project.platform || 'Not specified'}</span>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <Calendar size={16} className="mr-2 text-primary" />
                                        <span className="font-medium mr-2">Duration:</span>
                                        <span>{project.duration}</span>
                                    </div>

                                    {project.teamSize && (
                                        <div className="flex items-center text-sm">
                                            <Users size={16} className="mr-2 text-primary" />
                                            <span className="font-medium mr-2">Team Size:</span>
                                            <span>{project.teamSize}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center text-sm">
                                        <span className="font-medium mr-2">Role:</span>
                                        <span>{project.role}</span>
                                    </div>
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
                            
                            {project.codeSnippets.length > 0 && (
                                <div className="p-6 border-b border-border">
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
                            
                                    {showCodeSnippets && (
                                        <div className="mt-4 animate-fade-in">
                                            <Tabs
                                                defaultValue={project.codeSnippets[0].title.replace(/\s+/g, '-').toLowerCase()}>
                                                <TabsList className="mb-4">
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
                                                      <pre className="code-highlight">
                                                        <code>{snippet.code}</code>
                                                      </pre>
                                                    </TabsContent>
                                                ))}
                                            </Tabs>
                                        </div>
                                    )}
                                    
                                    <div className="p-6 flex justify-end space-x-4">
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
                            )}
                        </div>
                    </div>
            </div>
        </div>
    );
}