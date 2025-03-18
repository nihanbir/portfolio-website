import { Project } from "@/data/index.ts";

// Project data
export const projects: Project[] = [
    {
        id: "1",
        title: "Cloven Blade",
        technologies: ["Unreal Engine 5", "C++", "GAS", "Jira", "Confluence", "Github", "Perforce"],
        shortDescription: "Side scrolling beat 'em up game Vertical Slice Development at Ballistic Pork, As the scrum master and primary programmer.",
        role: ["Scrum Master " ,
            "Primary Gameplay Programmer"],
        teamSize: "most of the time 6 people",
        fullDescription:
            "As the scrum master and primary programmer, I coordinated the development of the vertical slice, working closely with artists, designers, and management to ensure the vision was realized.\n" +
            "Programming (C++ / UE5.4):\n" +
            "• Developed core gameplay mechanics using C++ in Unreal Engine 5.\n" +
            "• Implemented key features like [combat system, player movement, AI, environment interactions, etc.]\n" +
            "• Integrated animations, physics, and UI elements with the game loop.\n" +
            "• Debugged and optimized the code for performance, ensuring smooth gameplay within the vertical slice.\n" +
            "Team Leadership and Management:\n" +
            "• Acted as the primary point of communication between the development team and management.\n" +
            "• Organized daily standups, managed tasks in Jira, and ensured milestones were met.\n" +
            "• Collaborated with external consultants to integrate third-party systems and tools.\n" +
            "• Handled interpersonal conflicts between team members, maintaining team cohesion and focus on the project’s goals.\n" +
            "Collaboration with Art & Design:\n" +
            "• Worked closely with artists to integrate assets into the game, ensuring consistency with the game’s theme and mechanics.\n" +
            "• Collaborated on animation systems, particle effects, and environmental design.\n" +
            "• Ensured that all gameplay mechanics were cohesive with the game’s artistic direction and design vision.\n" +
            "Problem-Solving & Conflict Resolution:\n" +
            "• Navigated conflicts within the team, particularly with team members lacking motivation, and found solutions that kept the project on track.\n" +
            "• Addressed technical challenges, such as the team not being able to fully utilize the Lyra Sample Project, and implemented effective solutions to work around these limitations.\n" +
            "Utilizing design patterns, where it's applicable:\n" +
            " \n" +
            "• The observer pattern in multi-use components to enhance communication and adaptability, allowing for versatile functionality in different game scenarios.\n" +
            " \n" +
            "• The template method pattern in the player class to define a structure for character behavior, allowing for customization of specific actions within subclasses for a flexible and extensible player system.\n" +
            " \n" +
            "• The object pool pattern for the inventory system, optimizing resource management by reusing and recycling inventory items.",
        images: {
            main: 'https://impro.usercontent.one/appid/oneComWsb/domain/ballisticpork.se/media/ballisticpork.se/onewebmedia/banner_clovenblade_hamlet_01.png?etag=W%2F%22745ba-678b87d4%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1178%2B578',
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
            "the game play in the future.\n"+
            
            "My work: \n"+
           
            "- Cat AI in general but also these highlights;\n"+
            "  - The cat can open the doors;\n" +
            "    - if it's investigating the player's whereabouts or \n" +
            "    - if it has seen the player walk in to that room.\n" +
            "  - The cat can hear the step sounds if the door is left open.\n" +
            "  - It hears heavy breathing if it's close enough but not through walls.\n"+
            
            "- Environment;\n"+
            "  - Building the level;\n"+
            "  - Contributed to dynamic hiding Places;\n"+
            
            "- The player sneak mechanics;\n" +
            "  - Hold breath,\n" +
            "  - Crouch,\n" +
            "  - Equippable items,\n" +
            "  - Lures\n"+
            "    - For example;\n"+
            "    - Higher sneak level and wearing shoes will lower the player's step sounds.\n" +
            "    - The cat prioritizes the catnip over the player if it encounters it\n",
        
        images: {
            main: 'https://private-user-images.githubusercontent.com/112477158/269764803-6a06219a-fe3e-4eac-9b3a-b704e669e11a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDExMjIsIm5iZiI6MTc0MjMwMDgyMiwicGF0aCI6Ii8xMTI0NzcxNTgvMjY5NzY0ODAzLTZhMDYyMTlhLWZlM2UtNGVhYy05YjNhLWI3MDRlNjY5ZTExYS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjI3MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZjIwYmM4Y2JmMzU1ZWFkMjM4M2ZkMWVkODA2YmY2M2VmNzhmMDkxNjk0MjJlMWQ0NmY4MTYzMWNlYzI5YmQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.K9ej-TzdZ5onWvtM7LtwYXe198CyuelY-4WdxTBZX8g',
            gallery: [
                'https://private-user-images.githubusercontent.com/112477158/423983854-10a6b2cf-e09c-4953-956a-969230a8a3ce.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI0NzEsIm5iZiI6MTc0MjMwMjE3MSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTgzODU0LTEwYTZiMmNmLWUwOWMtNDk1My05NTZhLTk2OTIzMGE4YTNjZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjQ5MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZTY2ZjBjYmZjOTY0YTE3N2MyN2ZhNDNiODUzNzhkNjExNDEzYzI1NzlhZTBjNTljZTlkZTg3MDhhMjU2NDI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OVybU4Dh_OSXQQ_fbH9KdmXkcNeutuxwmfCdDKpFgpc',
                'https://private-user-images.githubusercontent.com/112477158/269764706-15a2a6a8-116f-4e69-9d43-e4a2be8ede73.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDE2MDEsIm5iZiI6MTc0MjMwMTMwMSwicGF0aCI6Ii8xMTI0NzcxNTgvMjY5NzY0NzA2LTE1YTJhNmE4LTExNmYtNGU2OS05ZDQzLWU0YTJiZThlZGU3My5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjM1MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yODZjNTgzYjA5N2U2MGU3Nzc0NmM3MjI5MTAxYTM5MmNkODcyZmI0NDk2MTk3MTNmYWE1OGMzZmQxODFkZjJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iO1oYUcfL-fiCTGAJwyAbOwnSP7eziCpddfw2wD8Gc0',
                'https://private-user-images.githubusercontent.com/112477158/269764730-61bf28e7-d336-4ebf-a7b8-25ba8d6203b9.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDIwODQsIm5iZiI6MTc0MjMwMTc4NCwicGF0aCI6Ii8xMTI0NzcxNTgvMjY5NzY0NzMwLTYxYmYyOGU3LWQzMzYtNGViZi1hN2I4LTI1YmE4ZDYyMDNiOS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjQzMDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYTY3ODIyYTMxOGRmYWY4MTczM2NmODc1MDgyOGRhMzA2MGI3MTE1OGI2NTM5OGFiMWVkYjM4Nzk5M2M1OTkyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RDiZXUOIFe-hVUAeHIWy9jnAFJ3B2Td9AHjHf2x1PT8',
                'https://private-user-images.githubusercontent.com/112477158/423983664-5f4609ef-b2c9-4eaa-8dda-e17962c559f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI0NzEsIm5iZiI6MTc0MjMwMjE3MSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTgzNjY0LTVmNDYwOWVmLWIyYzktNGVhYS04ZGRhLWUxNzk2MmM1NTlmOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjQ5MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZjkyODdjZWU3NjllNjk0OWVkMmNmYWNkNWE0YmZmZDA3MjYzMGY2ZTQzNjdhMjE3MThiYzUwYjUzMTAyNWZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Y4uXQU46dMhjyCz62RxFPP4D3tLuA6olzEA1huPed9w',
                'https://private-user-images.githubusercontent.com/112477158/423983703-3a76e40f-2ef9-417a-9615-0f84b92fe46e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI0NzEsIm5iZiI6MTc0MjMwMjE3MSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTgzNzAzLTNhNzZlNDBmLTJlZjktNDE3YS05NjE1LTBmODRiOTJmZTQ2ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjQ5MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NzVjY2E1NDhjYjBjM2MwZGIxZmM5YzZmMmFjZTg1ZjQ5Yzk4M2U5MGI4OGEzYzM2YzQzYjIzYjI0NWZjNTZhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rvavnI0RMzv-M7dWK_Zcieo6RgIdKlhgHhTJp-lX9Gs',
                'https://private-user-images.githubusercontent.com/112477158/423983766-fce2da5b-d8b3-4872-9630-468380ca418a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI0NzEsIm5iZiI6MTc0MjMwMjE3MSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTgzNzY2LWZjZTJkYTViLWQ4YjMtNDg3Mi05NjMwLTQ2ODM4MGNhNDE4YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjQ5MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNTY3NWQ0YjVmMDE0ZjQ4Y2VjNzBjOTk2Zjk1ZjYzZjRkMjVmZGFjNTAxNGQyMzVlN2FmMTJlYjJiZDVjNjRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6BGKwb6j93LOG9_CeVg7hpBa6xU9sb4W_eCjIYPJVuQ'
            ],
        },
        duration: "4 weeks",
        teamSize: "4 people",
        playUrl: "https://nihanbir.itch.io/horpus",
        githubUrl: "https://github.com/nihanbir/horpus"
    },
    {
        id: "3",
        title: "Algorithms & Data Structures",
        technologies: ["Unity", "C#", "C++", "Github"],
        shortDescription: "The key feature of this project is the implementation of a modified BFS algorithm. But you can see my code in all subjects in the snippets",
        role: ["Gameplay Programmer"],
        fullDescription:
        
            "In addition to the pathfinding game, this repository features;\n" +
            "• My first experience with C++ 😊\n" +
            "• A TicTacToe game developed in C++\n" +
            "• Exercises and my learning journey in Algorithms & Data Structures\n" +
            "✨ The key feature of this project is the implementation of a modified BFS algorithm. " +
            "You can find details on the problem it addresses and its solution below. ✨\n" +
            
            "Problem: \n"+
            "In a grid of size NxM, there are K obstacles placed randomly. Each obstacle has a weight associated with it, " +
            "which is a positive integer. The task is to find the path from the bottom-right corner to top-left corner that passes " +
            "through the obstacles with the minimum total weight.\n" +
            "However, there is a catch - when the player pass through an obstacle, its weight is added to a running sum. If the running " +
            "sum becomes greater than a threshold value T, the player is teleported back to the bottom-right corner, and must start over.\n" +
            "To make the problem more interesting, the teleportation threshold T is not constant - it changes every time you get teleported. " +
            "Specifically, after being teleported, the new threshold value is set to be the sum of the weights of the obstacles the player passed " +
            "through on their previous attempt, multiplied by a constant C. At the start, T is always smaller than the sum of weights of the smallest " +
            "weight path to enforce at least one teleportation.\n" +
            
            "The goal: \n"+
            "The goal is to find the path that minimizes the sum of the weights of the obstacles the player passes through, while taking into " +
            "account the random placement of the obstacles and the changing teleportation threshold. When the goal can't be reached with the " +
            "smallest weight path, the optimal thing for the player to do, would be to expand T maximally by taking the biggest weight path. " +
            "To solve the problem of finding the biggest weight path, a case which swaps the objective of the algorithm can be added.\n"+
            
            "How did I solve it:\n"+
            "Initially thought algorithm was Dijkstra however it didn't solve the problem of collecting the heighest " +
            "weight when there was no path to the goal.\n" +
            "A modified version of BFS algorithm was used to solve this problem. " +
            "BFS stores copies of all paths (when predecessor method isn't used), " +
            "therefore this seemed like the best option because all paths needed to be compared " +
            "to each other to know which one reached the highest weight when the goal wasn't reachable.\n" +
            "Modified BFS was made to take weight into account and to look at all ways to get to any given tile, not just the fastest.",

        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        githubUrl: "https://github.com/nihanbir/algorithms-and-datastructures-nihanbir"
    },
    {
        id: "4",
        title: "Klicker",
        technologies: ["SDL", "C++"],
        shortDescription: "Simple clicker game made to learn and utilize design patterns and advanced C++ features.",
        role: ["Gameplay Programmer"],
        fullDescription:

            "The game is made with SDL using;\n" +
            "• Design Patterns:\n" +
            "  • State design pattern \n" +
            "Each door is independent of each other and has 2 states, open and closed. " +
            "This pattern helps make the game scalable if you want to increase the complexity. (eg. LockedDoorState)\n" +
            "  • Update design pattern\n" +
            "Since every door is independent of each other, it makes sense for each door " +
            "to update their own state instead of listing all the updates in the main loop. This pattern also helps making the game scalable.\n" +
            "• Advanced C++ Features:\n" +
            "  • Vectors\n" +
            "For scalable collection of the doors.\n" +
            "It solves the problem of making it easier to scale the amount of functional doors in the future.\n" +
            "  • Runtime polymorphism\n" +
            "To change the state of the doors.\n" +
            "Required by the state design pattern.\n",
            

        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        githubUrl: "https://github.com/nihanbir/cpp-game-nihanbir"
    },
    {
        id: "5",
        title: "Slappy Knut",
        technologies: ["Unity", "C#", "Trello", "Github"],
        shortDescription: "My first unity project with a team",
        role: ["Product Owner", "Gameplay Programmer"],
        teamSize: "6 people",
        duration: "6 weeks",
        
        fullDescription:

            "Responsibilities:\n" +
            "• Structuring the project by creating, enforcing and updating UML and TDD\n" +
            "• Managing trello\n" +
            "• Implementing interfaces\n" +
            "• Merging into main branch and solving merge issues\n" +
            "• Reviewing code\n" +
            "• Bug fixing\n" +
            "• Character control\n" +
            "• Melee attack system\n" +
            "• Spells and spell casting\n" +
            "• Equippable and consumable items\n",

        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        githubUrl: "https://github.com/nihanbir/slappy-knut"
    },
    {
        id: "6",
        title: "sk8escape",
        technologies: ["Unity", "C#", "Jira", "Github", "Firebase", "Google Play Console"],
        shortDescription: "This is a mobile game for Android, unfortunately it's not available to download anymore",
        role: ["Backend"],
        teamSize: "17 people",
        duration: "4 weeks",
        fullDescription:
            "This was my only backend experience—I single-handedly implemented the entire backend, and it was challenging yet quite fun. " +
            "I was also all over the project to fix bugs and review code.\n"+
            "Responsibilities:\n" +
            "• Implementation of the backend using Firebase, including analytics, online data storage, and authentication via Google Play Games.\n" +
            "• Structuring the project by creating UML and TDD.\n" +
            "• Working on solving issues from different departments.\n" +
            "• Bug fixing for various departments.\n" +
            "• Reviewing code.\n" +
            "• Assistance with publishing the game using Google Play Console.\n" +
            "• UI regarding backend.\n",

        images: {
            main: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0',
            gallery: [
                'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
                'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
                'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
            ],
        },
        githubUrl: "https://github.com/nihanbir/slappy-knut"
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