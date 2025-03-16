import React, {useState} from "react";
import {CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Github, Play, Code} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    technologies: string[];
    role: {
      title: string;
      points: string[];
    };
    description: {
      title: string;
      content: string;
    };
    images: { url: string; caption: string }[];
    videoUrl?: string;
    codeSnippets: { title: string; code: string; language: string }[];
    additionalText?: string;
    githubUrl?: string;
    playUrl?: string;
  },
  key?: string
}

const ProjectCard = ({project, key}: ProjectCardProps) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [showCodeSnippets, setShowCodeSnippets] = useState(false);
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  return (
      <div
          className={`w-full max-w-3xl rounded-lg border border-border bg-card shadow-sm transition-all`}>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag bg-muted text-muted-foreground">
                              {tech}
                            </span>
            ))}
          </div>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-b border-border">
              {/* First column */}
              <div className="animate-fade-in">
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">Gallery</h4>
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
                      <CarouselPrevious className="left-2"/>
                      <CarouselNext className="right-2"/>
                    </Carousel>
                )}
              </div>

              {/* Second column */}
              <div className="animate-fade-in">
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">Video Demo</h4>
                {project.videoUrl && (
                    <div className="w-full max-w-4xl mx-auto aspect-video">
                      <iframe
                          src={project.videoUrl}
                          className="w-full h-full rounded-lg"
                          title={`${project.title} video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                      ></iframe>
                    </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-6 p-6 border-b border-border">
              {/* Role section */}
              <div>
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">{project.role.title}</h4>
                <ul className="list-disc pl-5 space-y-1 text-card-foreground/80">
                  {project.role.points.map((point, index) => (
                      <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Description section */}
              <div>
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">{project.description.title}</h4>
                <p className="text-card-foreground/80">
                  {isExpanded
                      ? project.description.content
                      : project.description.content.length > 150
                          ? `${project.description.content.substring(0, 150)}...`
                          : project.description.content}
                </p>
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
          </CardContent>
        </div>
      </div>
  )
};

export default ProjectCard;
