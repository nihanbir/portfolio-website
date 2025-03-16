import { Project } from "@/data/index.ts";

// Project data
export const projects: Project[] = [
    {
        id: "1",
        title: "Way Of Hoof",
        technologies: ["Unity", "C#"],
        shortDescription: "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer.",
        role: "Scrum Master & Gameplay Programmer",
        fullDescription:
            "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork. As the scrum master and primary programmer, " +
            "I coordinated the development of the vertical slice, working closely with artists, designers, and management to ensure the " +
            "vision was realized. I implemented core combat mechanics, character controllers, and enemy AI systems. " +
            "The project featured a unique animal-themed combat system with special abilities and combo mechanics. " +
            "I also established the Scrum workflow for the team, ran daily standups, and facilitated sprint planning and retrospectives " +
            "to keep development on track and address bottlenecks quickly.",
        images: {
            main: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
            gallery: [
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        platform: "PC & Console",
        duration: "6 months",
        teamSize: "5 people",
        additionalText: "blablabl",
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
        githubUrl: "https://github.com",
        playUrl: "https://play.example.com/way-of-hoof"
    },
    {
        id: "2",
        title: "Space Explorer VR",
        technologies: ["Unity", "C#", "VR"],
        shortDescription: "Virtual reality space exploration game with realistic physics and planetary environments.",
        role: "Lead Programmer",
        fullDescription:
            "Space Explorer VR is an immersive virtual reality experience that lets players explore a procedurally generated universe. " +
            "As the lead programmer, I developed the procedural planet generation system, implemented realistic space physics, " +
            "and created the VR interaction framework. The game features over 20 unique planets and celestial bodies, each with its own " +
            "physics properties and environmental effects. One of the biggest challenges was optimizing performance for VR, which required " +
            "custom shader development and efficient use of the Unity physics system.",
        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        platform: "Oculus, SteamVR",
        duration: "8 months",
        teamSize: "3 people",
        additionalText: "blablabl",
    }
];

// Extract all unique technologies from projects
export const getAllTechnologies = (): string[] => {
    return Array.from(
        new Set(
            projects.flatMap((project) => project.technologies)
        )
    );
};