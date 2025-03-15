import React, { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

// Mock project data
const projectsData = [
  {
    id: "1",
    title: "Way Of Hoof",
    technologies: ["Unity", "C#"],    
    role: 
        {
          title: "Role",
          points: ["Scrum Master", "Gameplay programmer"]
        },
    description: 
      {
        title: "Description",
        content:
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer, " +
            "I coordinated the development of the vertical slice, working closely with artists, designers, and management to ensure the " +
            "vision was realized.Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer,"
      },
    images: [
      { 
        url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", 
        caption: "Main gameplay screen showing the solar system" 
      },
      { 
        url: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", 
        caption: "Player exploring Mars surface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
        caption: "Special effects for asteroid field navigation" 
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    codeSnippets: [
      {
        title: "Planet Rotation",
        language: "csharp",
        code: `using UnityEngine;

public class PlanetRotation : MonoBehaviour
{
    public float rotationSpeed = 10f;
    
    void Update()
    {
        transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);
    }
}`
      },
      {
        title: "Gravity System",
        language: "csharp",
        code: `using UnityEngine;

public class GravityAttractor : MonoBehaviour
{
    public float gravity = -10f;
    
    public void Attract(Transform body)
    {
        Vector3 gravityUp = (body.position - transform.position).normalized;
        Vector3 bodyUp = body.up;
        
        body.GetComponent<Rigidbody>().AddForce(gravityUp * gravity);
        
        Quaternion targetRotation = Quaternion.FromToRotation(bodyUp, gravityUp) * body.rotation;
        body.rotation = Quaternion.Slerp(body.rotation, targetRotation, 50f * Time.deltaTime);
    }
}`
      }
    ],
    additionalText: "This project was developed over a period of 8 months with a team of 3 developers. It won the Best VR Experience award at the Indie Game Festival 2023. The game features over 20 unique planets and celestial bodies, each with its own physics properties and environmental effects.\n\nOne of the biggest challenges was optimizing the performance for VR, which required custom shader development and efficient use of the Unity physics system. We also implemented a custom interaction system to make the experience more intuitive for players.",
    githubUrl: "https://github.com",
    playUrl: "https://play.example.com/space-explorer"
  },
  {
    id: "2",
    title: "Way Of Hoof",
    technologies: ["Unreal Engine 5", "C++"],
    role:
        {
          title: "Role",
          points: ["Scrum Master", "Gameplay programmer"]
        },
    description:
        {
          title: "Description",
          content:
              "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer, " +
              "I coordinated the development of the vertical slice, working closely with artists, designers, and management to ensure the " +
              "vision was realized."
        },
    images: [
      {
        url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        caption: "Main gameplay screen showing the solar system"
      },
      {
        url: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        caption: "Player exploring Mars surface"
      },
      {
        url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
        caption: "Special effects for asteroid field navigation"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    codeSnippets: [
      {
        title: "Planet Rotation",
        language: "csharp",
        code: `using UnityEngine;

public class PlanetRotation : MonoBehaviour
{
    public float rotationSpeed = 10f;
    
    void Update()
    {
        transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);
    }
}`
      },
      {
        title: "Gravity System",
        language: "csharp",
        code: `using UnityEngine;

public class GravityAttractor : MonoBehaviour
{
    public float gravity = -10f;
    
    public void Attract(Transform body)
    {
        Vector3 gravityUp = (body.position - transform.position).normalized;
        Vector3 bodyUp = body.up;
        
        body.GetComponent<Rigidbody>().AddForce(gravityUp * gravity);
        
        Quaternion targetRotation = Quaternion.FromToRotation(bodyUp, gravityUp) * body.rotation;
        body.rotation = Quaternion.Slerp(body.rotation, targetRotation, 50f * Time.deltaTime);
    }
}`
      }
    ],
    additionalText: "This project was developed over a period of 8 months with a team of 3 developers. It won the Best VR Experience award at the Indie Game Festival 2023. The game features over 20 unique planets and celestial bodies, each with its own physics properties and environmental effects.\n\nOne of the biggest challenges was optimizing the performance for VR, which required custom shader development and efficient use of the Unity physics system. We also implemented a custom interaction system to make the experience more intuitive for players.",
    githubUrl: "https://github.com",
    playUrl: "https://play.example.com/space-explorer"
  }
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeTechs, setActiveTechs] = useState<string[]>([]);
  
  // Extract all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(
      projectsData.flatMap((project) => project.technologies)
    )
  );

  // Toggle technology filter
  const toggleTech = (tech: string) => {
    if (activeTechs.includes(tech)) {
      setActiveTechs(activeTechs.filter((t) => t !== tech));
    } else {
      setActiveTechs([...activeTechs, tech]);
    }
  };

  // Filter projects based on selected technologies
  useEffect(() => {
    if (activeTechs.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        activeTechs.some((tech) => project.technologies.includes(tech))
      );
      setFilteredProjects(filtered);
    }
  }, [activeTechs]);

  return (
    <section id="projects" className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
      
      <ProjectFilter 
        technologies={allTechnologies}
        activeTechs={activeTechs}
        toggleTech={toggleTech}
      />
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No projects match the selected filters.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setActiveTechs([])}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;
