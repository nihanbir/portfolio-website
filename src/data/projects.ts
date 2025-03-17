import { Project } from "@/data/index.ts";
import {Github} from "lucide-react";

// Project data
export const projects: Project[] = [
    {
        id: "1",
        title: "Way Of Hoof",
        technologies: ["Unreal Engine 5", "C++", "GAS", "Jira", "Confluence", "Github"],
        shortDescription: "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer.",
        role: ["Scrum Master " ,
            "Gameplay Programmer"],
        fullDescription:
            "As the scrum master and primary programmer, I coordinated the development of the vertical slice, working closely with artists, designers, and management to ensure the vision was realized.\n" +
            "\n" +
            "Programming (C++ / UE5.4):\n" +
            "Developed core gameplay mechanics using C++ in Unreal Engine 5.\n" +
            "Implemented key features like [combat system, player movement, AI, environment interactions, etc.]\n" +
            "Integrated animations, physics, and UI elements with the game loop.\n" +
            "Debugged and optimized the code for performance, ensuring smooth gameplay within the vertical slice.\n" +
            "Team Leadership and Management:\n" +
            "Acted as the primary point of communication between the development team and management.\n" +
            "Organized daily standups, managed tasks in Jira, and ensured milestones were met.\n" +
            "Collaborated with external consultants to integrate third-party systems and tools.\n" +
            "Handled interpersonal conflicts between team members, maintaining team cohesion and focus on the project’s goals.\n" +
            "Collaboration with Art & Design:\n" +
            "Worked closely with artists to integrate assets into the game, ensuring consistency with the game’s theme and mechanics.\n" +
            "Collaborated on animation systems, particle effects, and environmental design.\n" +
            "Ensured that all gameplay mechanics were cohesive with the game’s artistic direction and design vision.\n" +
            "Problem-Solving & Conflict Resolution:\n" +
            "Navigated conflicts within the team, particularly with team members lacking motivation, and found solutions that kept the project on track.\n" +
            "Addressed technical challenges, such as the team not being able to fully utilize the Lyra Sample Project, and implemented effective solutions to work around these limitations.\n" +
            "*Utilizing design patterns, where it's applicable. For example;\n" +
            " \n" +
            "The observer pattern in multi-use components to enhance communication and adaptability, allowing for versatile functionality in different game scenarios.\n" +
            " \n" +
            "The template method pattern in the player class to define a structure for character behavior, allowing for customization of specific actions within subclasses for a flexible and extensible player system.\n" +
            " \n" +
            "The object pool pattern for the inventory system, optimizing resource management by reusing and recycling inventory items.",
        images: {
            main: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
            gallery: [
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
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
    },
    {
        id: "2",
        title: "Horpus",
        technologies: ["Unreal Engine 5", "Blueprints", "Jira", "Github", "AI"],
        shortDescription: "This cute horror game is my first completed Unreal project. I worked on AI, environment and interactable items",
        role: ["Gameplay Programmer"],
        fullDescription:
        
            "The complete game is about a person being trapped on the top floor of their 5 story " +
            "apartment building with different monsters on each floor for them to dodge/escape from, by using traps, " +
            "lures, sneaking techniques and equipment. This prototype has a house with a long corridor and a not so " +
            "terrifying monster AI to show what the game could be like. The game was built with an expectation of expanding " +
            "the game play in the future."+
            "My work"+
            "The player sneak mechanics; hold breath, crouch, equippable items, lures"+
            "For example; "+
            "Higher sneak level and wearing shoes will lower the player's step sounds. " +
            "Cat AI in general but also these highlights;"+
            "The cat can hear the step sounds if the door is left open. " +
            "The cat can open the doors, if it's investigating the player's whereabouts or if it has seen the player walk in to that room." +
            "It hears heavy breathing if it's close enough but not through walls." +
            "The cat prioritizes the catnip over the player if it encounters it",
        
        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        duration: "4 weeks",
        teamSize: "3 people",
        additionalText: "The complete game is about a person being trapped on the top floor of their 5 story " +
            "apartment building with different monsters on each floor for them to dodge/escape from, by using traps, " +
            "lures, sneaking techniques and equipment. This prototype has a house with a long corridor and a not so " +
            "terrifying monster AI to show what the game could be like. The game was built with an expectation of expanding " +
            "the game play in the future.",
        playUrl: "https://nihanbir.itch.io/horpus",
        githubUrl: "https://github.com/nihanbir/horpus"
    },
    {
        id: "3",
        title: "Algorithms & Data Structures",
        technologies: ["Unity", "C#", "C++"],
        shortDescription: "The key feature of this project is the implementation of a modified BFS algorithm.",
        role: ["Gameplay Programmer"],
        fullDescription:

            "The complete game is about a person being trapped on the top floor of their 5 story " +
            "apartment building with different monsters on each floor for them to dodge/escape from, by using traps, " +
            "lures, sneaking techniques and equipment. This prototype has a house with a long corridor and a not so " +
            "terrifying monster AI to show what the game could be like. The game was built with an expectation of expanding " +
            "the game play in the future."+
            "My work"+
            "The player sneak mechanics; hold breath, crouch, equippable items, lures"+
            "For example; "+
            "Higher sneak level and wearing shoes will lower the player's step sounds. " +
            "Cat AI in general but also these highlights;"+
            "The cat can hear the step sounds if the door is left open. " +
            "The cat can open the doors, if it's investigating the player's whereabouts or if it has seen the player walk in to that room." +
            "It hears heavy breathing if it's close enough but not through walls." +
            "The cat prioritizes the catnip over the player if it encounters it",

        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        additionalText: "The complete game is about a person being trapped on the top floor of their 5 story " +
            "apartment building with different monsters on each floor for them to dodge/escape from, by using traps, " +
            "lures, sneaking techniques and equipment. This prototype has a house with a long corridor and a not so " +
            "terrifying monster AI to show what the game could be like. The game was built with an expectation of expanding " +
            "the game play in the future.",
        githubUrl: "https://github.com/nihanbir/algorithms-and-datastructures-nihanbir"
    },
];

// Extract all unique technologies from projects
export const getAllTechnologies = (): string[] => {
    return Array.from(
        new Set(
            projects.flatMap((project) => project.technologies)
        )
    );
};