// import React, { useState, useEffect } from "react";
// import ProjectFilter from "./ProjectFilter";
import {Project} from "@/data/index.ts";
import { Button } from "@/components/ui/button";


// Mock project data
export const projects: Project[] = [
    {
        id: "1",
        title: "Way Of Hoof",
        technologies: ["Unity", "C#"],

        shortDescription: "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer, ",
        role:
            {
                title: "Role",
                points: ["Scrum Master", "Gameplay programmer"]
            },
        fullDescription:
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer, " +
            "I coordinated the development of the vertical slice, working closely with artists, designers, and management to ensure the " +
            "vision was realized.Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer," +
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer,",
        images: {
            main: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
            gallery: [
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        platform: "string",
        duration:"string",
        teamSize: "string",

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
        // additionalText: "This project was developed over a period of 8 months with a team of 3 developers. It won the Best VR Experience award at the Indie Game Festival 2023. The game features over 20 unique planets and celestial bodies, each with its own physics properties and environmental effects.\n\nOne of the biggest challenges was optimizing the performance for VR, which required custom shader development and efficient use of the Unity physics system. We also implemented a custom interaction system to make the experience more intuitive for players.",
        // githubUrl: "https://github.com",
        // playUrl: "https://play.example.com/space-explorer"
    }
];

// const Projects = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projectsData);
//   const [selectedTechs, setActiveTechs] = useState<string[]>([]);
//  
//   // Extract all unique technologies from projects
//   const allTechnologies = Array.from(
//     new Set(
//       projectsData.flatMap((project) => project.technologies)
//     )
//   );

// Toggle technology filter
//   const toggleTech = (tech: string) => {
//     if (selectedTechs.includes(tech)) {
//       setActiveTechs(selectedTechs.filter((t) => t !== tech));
//     } else {
//       setActiveTechs([...selectedTechs, tech]);
//     }
//   };
//
//   // Filter projects based on selected technologies
//   useEffect(() => {
//     if (selectedTechs.length === 0) {
//       setFilteredProjects(projectsData);
//     } else {
//       const filtered = projectsData.filter((project) =>
//         selectedTechs.some((tech) => project.technologies.includes(tech))
//       );
//       setFilteredProjects(filtered);
//     }
//   }, [selectedTechs]);
//
//   return (
//     <section id="projects" className="py-20 container mx-auto px-6">
//       <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
//      
//       <ProjectFilter 
//         technologies={allTechnologies}
//        selectedTechs={} 
//         toggleTech={toggleTech}
//       />
//      
//       {filteredProjects.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredProjects.map((project) => (
//             <ProjectCard key={project.id} project={project}  isExpanded onToggleExpand={}/>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-10">
//           <p className="text-muted-foreground">No projects match the selected filters.</p>
//           <Button 
//             variant="outline" 
//             className="mt-4"
//             onClick={() => setActiveTechs([])}
//           >
//             Clear Filters
//           </Button>
//         </div>
//       )}
//     </section>
//   );
// };

