
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Github, Play, Code } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    images: { url: string; caption: string }[];
    videoUrl?: string;
    codeSnippets: { title: string; code: string; language: string }[];
    additionalText?: string;
    githubUrl?: string;
    playUrl?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCodeSnippets, setShowCodeSnippets] = useState(false);
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  return (
    <Card className={`mb-6 overflow-hidden transition-all duration-500 ${isExpanded ? "project-card-expanded" : "project-card-collapsed"}`}>
      <CardContent className="p-0">
        <div className="p-6 border-b border-border">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Collapse project" : "Expand project"}
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
          
          <div className="mt-3 flex flex-wrap">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag bg-muted text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="animate-fade-in">
            <div className="p-6 border-b border-border">
              <h4 className="text-xl font-semibold mb-4">Gallery</h4>
              {project.images.length > 0 && (
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src={image.url}
                              alt={`Project image ${index + 1}`}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                          <p className="text-center mt-2 text-muted-foreground">{image.caption}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              )}
            </div>

            {project.videoUrl && (
              <div className="p-6 border-b border-border">
                <h4 className="text-xl font-semibold mb-4">Video Demo</h4>
                <div className="w-full max-w-4xl mx-auto aspect-video">
                  <iframe
                    src={project.videoUrl}
                    className="w-full h-full rounded-lg"
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div className="p-6 border-b border-border">
              <h4 className="text-xl font-semibold mb-4">Description</h4>
              <p className="text-muted-foreground">{project.description}</p>
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
                    <Code className="w-4 h-4 mr-2" />
                    {showCodeSnippets ? "Hide Code" : "Show Code"}
                  </Button>
                </div>
                
                {showCodeSnippets && (
                  <div className="mt-4 animate-fade-in">
                    <Tabs defaultValue={project.codeSnippets[0].title.replace(/\s+/g, '-').toLowerCase()}>
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
              </div>
            )}

            {project.additionalText && (
              <div className="p-6 border-b border-border">
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
                  <div className="mt-4 text-muted-foreground animate-fade-in">
                    {project.additionalText}
                  </div>
                )}
              </div>
            )}

            <div className="p-6 flex justify-end space-x-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
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
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
