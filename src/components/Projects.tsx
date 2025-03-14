import React, { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

// Mock project data
const projectsData = [
  {
    id: "1",
    title: "Space Explorer VR",
    description: "A virtual reality game that allows players to explore space and interact with celestial bodies. Features realistic physics and immersive environments.",
    technologies: ["Unity", "C#", "VR", "Shader Programming"],
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
    title: "Pixel Platformer",
    description: "A 2D platformer game with retro pixel art aesthetics. Features procedurally generated levels, collectibles, and challenging obstacles.",
    technologies: ["Unity", "C#", "2D Graphics", "Procedural Generation"],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1642352902570-9626d525442a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
        caption: "Main character navigating platforms" 
      },
      { 
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
        caption: "Collectibles and power-ups system" 
      }
    ],
    codeSnippets: [
      {
        title: "Player Controller",
        language: "csharp",
        code: `using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float moveSpeed = 5f;
    public float jumpForce = 10f;
    private Rigidbody2D rb;
    private bool isGrounded;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    
    void Update()
    {
        // Movement
        float horizontalInput = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(horizontalInput * moveSpeed, rb.velocity.y);
        
        // Jump
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.AddForce(new Vector2(0f, jumpForce), ForceMode2D.Impulse);
            isGrounded = false;
        }
    }
    
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isGrounded = true;
        }
    }
}`
      },
      {
        title: "Level Generator",
        language: "csharp",
        code: `using UnityEngine;
using System.Collections.Generic;

public class LevelGenerator : MonoBehaviour
{
    public GameObject platformPrefab;
    public int platformCount = 100;
    public float levelWidth = 3f;
    public float minY = 0.5f;
    public float maxY = 3f;
    
    void Start()
    {
        Vector3 spawnPosition = new Vector3();
        
        for (int i = 0; i < platformCount; i++)
        {
            spawnPosition.y += Random.Range(minY, maxY);
            spawnPosition.x = Random.Range(-levelWidth, levelWidth);
            
            Instantiate(platformPrefab, spawnPosition, Quaternion.identity);
        }
    }
}`
      }
    ],
    additionalText: "Pixel Platformer was created during a 48-hour game jam. Despite the time constraints, we managed to implement procedural level generation and a tight control system. The art style was inspired by classic 90s platformers, with a modern twist in the gameplay mechanics.",
    githubUrl: "https://github.com",
    playUrl: "https://play.example.com/pixel-platformer"
  },
  {
    id: "3",
    title: "Strategy Simulation",
    description: "A turn-based strategy game with resource management and city building mechanics. Players must build and expand their civilization while managing resources and defending against threats.",
    technologies: ["Unreal Engine", "C++", "Blueprint", "AI"],
    images: [
      { 
        url: "https://images.unsplash.com/photo-1594044138450-25e4c1496d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
        caption: "City building interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80", 
        caption: "Resource management system" 
      }
    ],
    codeSnippets: [
      {
        title: "Resource Manager",
        language: "cpp",
        code: `#include "ResourceManager.h"

void AResourceManager::InitializeResources()
{
    Resources.Add(EResourceType::Wood, 100);
    Resources.Add(EResourceType::Stone, 50);
    Resources.Add(EResourceType::Food, 200);
    Resources.Add(EResourceType::Gold, 25);
}

bool AResourceManager::HasEnoughResources(TMap<EResourceType, int32> Cost)
{
    for (const auto& Resource : Cost)
    {
        if (!Resources.Contains(Resource.Key) || Resources[Resource.Key] < Resource.Value)
        {
            return false;
        }
    }
    return true;
}

void AResourceManager::ConsumeResources(TMap<EResourceType, int32> Cost)
{
    if (HasEnoughResources(Cost))
    {
        for (const auto& Resource : Cost)
        {
            Resources[Resource.Key] -= Resource.Value;
        }
    }
}`
      },
      {
        title: "AI Controller",
        language: "cpp",
        code: `#include "AIController.h"

void AAIController::BeginPlay()
{
    Super::BeginPlay();
    
    // Initialize behavior tree
    if (BehaviorTree)
    {
        RunBehaviorTree(BehaviorTree);
    }
}

void AAIController::UpdateAILogic()
{
    // Assess current situation
    float ThreatLevel = CalculateThreatLevel();
    
    // Determine optimal action
    if (ThreatLevel > HighThreatThreshold)
    {
        FocusOnDefense();
    }
    else if (GetResources() > ExpansionResourceThreshold)
    {
        FocusOnExpansion();
    }
    else
    {
        FocusOnResourceGathering();
    }
}`
      }
    ],
    githubUrl: "https://github.com"
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
        activeTechs.every((tech) => project.technologies.includes(tech))
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
        <div className="space-y-6">
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
