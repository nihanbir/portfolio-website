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
            gallery: [            ],
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
            main: 'https://private-user-images.githubusercontent.com/112477158/423986600-882a25e5-b771-4dce-a9e0-24784df37a7c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI4NjcsIm5iZiI6MTc0MjMwMjU2NywicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTg2NjAwLTg4MmEyNWU1LWI3NzEtNGRjZS1hOWUwLTI0Nzg0ZGYzN2E3Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjU2MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMzExODhlOTZiZjc5MzM1YzFiYjQwYjgwZWRlNTM3OWYwMWY3ZGE5Yzg1YzUwMjM1ZGQ0NmU1M2Q2NGVhMzJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Pj4vpGIYIgrrERMXDikmSBzB-oKzIWI5OU0gbX-5O18',
            gallery: [
                'https://private-user-images.githubusercontent.com/112477158/423986601-b2b5f396-9221-4bcb-b8b2-aedf9d9fbc80.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI4NjcsIm5iZiI6MTc0MjMwMjU2NywicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTg2NjAxLWIyYjVmMzk2LTkyMjEtNGJjYi1iOGIyLWFlZGY5ZDlmYmM4MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjU2MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZDJlN2Y4MjM3ZDUzZTA4YjljZWEzMjA3MDg4ZjlmNjEyNWUxYTkxMjM2ZDllNDBlY2JhMTllZDQ4YmQyNzU2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.PQMAGTzKAbpzZ_V7irwnoV2ZTcyb9vP5yxc9iCkVadc',
                'https://private-user-images.githubusercontent.com/112477158/423986597-39674068-a8c8-487a-b6b0-ac5742c0cba5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI4NjcsIm5iZiI6MTc0MjMwMjU2NywicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTg2NTk3LTM5Njc0MDY4LWE4YzgtNDg3YS1iNmIwLWFjNTc0MmMwY2JhNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjU2MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMWU3NTg4NTdmOTViMTk0YjhjZjcwYmRiODZlYjBlYjgyNDE0NWRhZGZiZWQzYjdiNjllMjRiYzYzZTU4ODFjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mBTuVilkrV_yK9cTCf_Cf4Pl3TORerbnZg8FIMQ9W-U',
                'https://private-user-images.githubusercontent.com/112477158/423986415-86995bb3-fdd1-4354-9335-15cc4ccdbe95.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI4NjcsIm5iZiI6MTc0MjMwMjU2NywicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTg2NDE1LTg2OTk1YmIzLWZkZDEtNDM1NC05MzM1LTE1Y2M0Y2NkYmU5NS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjU2MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YzVmMDZhMWUyMWUzZTRjNGM1YjM1YzI3NzkyMDA2NjE4MzA4MGE4YjZmNDE2OGE0YzA5MGNhMGMzMjg2NDMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3-8uWZzR0KOyBU1pB5tuAmWcCXzoFZMzXm4sp_xV9Rw',
                'https://private-user-images.githubusercontent.com/112477158/423986380-d8064e33-a185-42af-b324-39f0ad39deca.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDI4NjcsIm5iZiI6MTc0MjMwMjU2NywicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTg2MzgwLWQ4MDY0ZTMzLWExODUtNDJhZi1iMzI0LTM5ZjBhZDM5ZGVjYS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMjU2MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYjQ5ZGIwYzI5ZWZlY2I4ZWQ5MTZmZDJjNTdjOTcyYzcxNDFhN2M2MGM0YTZhMTdkNGNkOGI4YTBjNjk0ZTg1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KDf2TAmnnUKQK5smUZqpgYi0xnooc9-LNsyAuRaOs9o',
            ],
        },
        codeSnippets: [
            {
                title: "Pathfinding, Path.cs",
                language: "csharp",
                code: `using System.Collections.Generic;

public struct Path
{
    public State[] States;
    public readonly HashSet<State> VisitedStates;
    public int TotalCost;

    public Path(State[] states, HashSet<State> visitedStates, int totalCost)
    {
        States = states;
        VisitedStates = visitedStates;
        TotalCost = totalCost;
    }
}`
            },
            {
                title: "Pathfinding, Pathfinder.cs",
                language: "csharp",
                code: `using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Utils;

public static class Pathfinder
{
    public static IEnumerable<State> BreadthFirstModified(State start, State end)
    {
        
        // make a queue of paths
        Queue<Path> todoPaths = new();
        
        // make a dictionary for paths, using the TotalCost for that path as a key
        Dictionary<int, Path> finalizedPaths = new();
        
        // start off by making a new path out of the start state, where it considers itself visited
        var startPath = new Path(new[] { start }, new HashSet<State> { start }, Game.CurrentCost);
        
        todoPaths.Enqueue(startPath);
        
        while (todoPaths.Count > 0)
        {
            Path currentPath = todoPaths.Dequeue();
            State currNode = currentPath.States[^1];
            
            // loop over all adjacent states
            foreach (var neighbor in currNode.GetSuccessors())
            {
                // neighbor already visited in this path, continue
                if (currentPath.VisitedStates.Contains(neighbor) || neighbor.Grid.GetCell(neighbor.playerPosition).visited) continue;
                
                // found end, append the neighbor and return path

                if (neighbor.Equals(end))
                {
                    return currentPath.States.Skip(1).Concat(new[] { neighbor }).ToArray();
                }

                // get the cost of the neighbor cell
                var cellCost = neighbor.Grid.GetCell(neighbor.playerPosition).cost;
                
                // create a clone clone the path as a new path
                Path newPath = new Path(currentPath.States, new HashSet<State>(currentPath.VisitedStates), currentPath.TotalCost);
                
                // append the neighbor state to the end of the new path
                newPath.States = newPath.States.Concat(new[] { neighbor }).ToArray();

                newPath.VisitedStates.Add(neighbor);
                
                // add neighbour cell's cost to path's total cost
                newPath.TotalCost += cellCost;
                
                // go to next iteration
                if (newPath.TotalCost > Game.Threshold) finalizedPaths.TryAdd(newPath.TotalCost, newPath);
                else todoPaths.Enqueue(newPath);
            }
        }
        // no paths left to dequeue, and we didnt find the goal.
        // loop over the finalizedPaths list, and return the path with the highest cost
        
        int maxCost = 0;
        foreach (var keyValuePair in finalizedPaths) maxCost = Math.Max(keyValuePair.Key, maxCost);
        return finalizedPaths[maxCost].States.Skip(1).ToArray();
    }
}`
            },
        ],
        
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
            main: 'https://user-images.githubusercontent.com/112477158/232321356-97aa747b-8f79-432d-9434-2f6d56157326.gif',
            gallery: [            ],
        },
        githubUrl: "https://github.com/nihanbir/cpp-game-nihanbir",
        
        codeSnippets: [ 
            {
            title: "ClosedDoorState.cpp",
            language: "c++",
            code: `#include "Door.h"
#include "ClosedDoorState.h"
#include "OpenDoorState.h"

ClosedDoorState::ClosedDoorState(Door& door) {
\timage = make_unique<Image>(door.images[1]);
}

unique_ptr<DoorState> ClosedDoorState::update(const SDL_Event& e, Door& door, Window& window) {
\tif (e.type != SDL_MOUSEBUTTONDOWN) return nullptr;
\tif (!door.isHovered()) return nullptr;
\t// show image
\twindow.render(image.get(), &door.rect);
\treturn make_unique<OpenDoorState>(door);
}`
        },
            {
                title: "Door.cpp",
                language: "c++",
                code: `#include "Door.h"
#include "ClosedDoorState.h"

bool gameOver = false;

using namespace std;

Door::Door(SDL_Rect doorRect, const char* closedDoorImg, const char* openDoorImg) 
{
\trect = doorRect;
\timages[0] = closedDoorImg;
\timages[1] = openDoorImg;
\tstate = make_unique<ClosedDoorState>(*this);
\t
}

void Door::handleInput(const SDL_Event& e, Door& door, Window& window) {
\tunique_ptr<DoorState> newState = state->update(e, door, window);
\tif (newState != nullptr) state = move(newState);
}

bool Door::isHovered()
{
\t//Get mouse position
\tint x, y;
\tSDL_GetMouseState(&x, &y);
\t//Mouse is left of the button
\tif (x < rect.x) return false;
\t//Mouse is right of the button
\telse if (x > rect.x + rect.w) return false;
\t//Mouse above the button
\telse if (y < rect.y) return false;
\t//Mouse below the button
\telse if (y > rect.y + rect.h) return false;
\treturn true;
}`
            },
            {
                title: "Klicker.cpp",
                language: "c++",
                code: `#include "Window.h"
#include "Image.h"
#include "Door.h"
#include <vector>

//Screen dimension constants
const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 419;

SDL_Rect leftDoorRect{14,84,88,335};
SDL_Rect rightDoorRect{240,177,24,92};

vector<unique_ptr<Door>> doors{};

int main(int argc, char* args[])
{
\tWindow window{ SCREEN_WIDTH, SCREEN_HEIGHT };
\t//Start up SDL and create window
\tif (!window.wasSuccesful())
\t{
\t\tprintf("Failed to initialize!\\n");
\t\treturn -1;
\t}

\tdoors.push_back(make_unique<Door>(leftDoorRect, "img/DoorL_Closed.bmp", "img/DoorL_Open.bmp"));
\tdoors.push_back(make_unique<Door>(rightDoorRect, "img/DoorR_Closed.bmp", "img/DoorR_Open.bmp"));

\t//Load media
\tauto image = make_unique<Image>("img/main.bmp");
\t
\twindow.render(image.get(),nullptr);

\t//Hack to get window to stay up
\tSDL_Event e;
\twhile (!gameOver) {
\t\twhile (SDL_PollEvent(&e)) {
\t\t\tif (e.type == SDL_QUIT) return 0;
\t\t\tfor (auto& door : doors)
\t\t\t{
\t\t\t\tdoor->handleInput(e, *door, window);
\t\t\t}
\t\t}
\t}
\treturn 0;
}`
            },
        
        ]
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
            main: 'https://user-images.githubusercontent.com/112477158/212632090-9adf0583-a11c-4198-88a6-4189920c985c.png',
            gallery: [
                'https://user-images.githubusercontent.com/112477158/212632269-e50b693f-d1a6-42f1-b699-1dc163485bc4.png',
                'https://user-images.githubusercontent.com/112477158/212632343-92c39cc8-7e57-48a7-9467-bb6fbf1ebd47.png',
                'https://user-images.githubusercontent.com/112477158/212632367-3788053c-b001-483c-9b20-081faedac5ea.png',
                'https://user-images.githubusercontent.com/112477158/212632395-d1e8bdee-cb99-42ab-8c47-ce81fc761476.png',
                'https://user-images.githubusercontent.com/112477158/212632505-3e6ac2f0-99ae-40c0-af3a-9be5f57fdd09.png',
                'https://user-images.githubusercontent.com/112477158/212632415-c08fbf0d-1703-4a8a-9a05-36b72161cb50.png',
                'https://user-images.githubusercontent.com/112477158/212632567-b7131667-6648-4659-857e-980947e35621.png',
                'https://user-images.githubusercontent.com/112477158/212632536-c452fc4d-6c99-463c-a1c0-d93e6cfa9c1d.png',
                'https://user-images.githubusercontent.com/112477158/212632434-69f39a58-b7b2-4e22-9188-741bf215c008.png'
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
            main: 'https://private-user-images.githubusercontent.com/112477158/423991291-e600fbb4-5502-4f30-950f-6791b9a48d7d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDM1OTksIm5iZiI6MTc0MjMwMzI5OSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTkxMjkxLWU2MDBmYmI0LTU1MDItNGYzMC05NTBmLTY3OTFiOWE0OGQ3ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMzA4MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOTViNTBhMDM4NmMyZDczZmI5NjFmNDk4NjIwZjAyOTljYWI2YTk3YmU5OGE5NmY2ZTI1ZmMxZTczOTRiMDVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.C_LT49GnlUQk-Flp_Dr8wY3U52FHeaQvslUgN0hpqOI',
            gallery: [
                'https://private-user-images.githubusercontent.com/112477158/423991306-4b0c6971-e86f-4984-a065-d7927120aac6.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDM1OTksIm5iZiI6MTc0MjMwMzI5OSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTkxMzA2LTRiMGM2OTcxLWU4NmYtNDk4NC1hMDY1LWQ3OTI3MTIwYWFjNi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMzA4MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iOWQyNjU0MDczNWM0NGYxY2I2NDY1OGU0YzYwMmRkY2ZhYjQ1MWY3OGVhYTdjODU4N2IwMTg4YmMzNTlkMDdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hQaPUZ94tcrGkGbahleoigzoFJhf3VfllJ1NMl80_Fo',
                'https://private-user-images.githubusercontent.com/112477158/423991303-de878f8a-9cbd-4094-8d20-97d0507318ff.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIzMDM1OTksIm5iZiI6MTc0MjMwMzI5OSwicGF0aCI6Ii8xMTI0NzcxNTgvNDIzOTkxMzAzLWRlODc4ZjhhLTljYmQtNDA5NC04ZDIwLTk3ZDA1MDczMThmZi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOFQxMzA4MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMWVkYTkwZGNhYmYzOGYxZTkxNGM4OGM2ODYxY2QwZTk5ZjI0YTYxZmI5YmJjODFlMGEyMmYzZmUyYjM4MmFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.PRfr13J1RH8IS_FqlE2xClOHMpUSvOtNNKtaPdKef5M',
            ],
        },
        githubUrl: "https://github.com/nihanbir/Mirror-sk8escape",
        codeSnippets:[
            {
                title: "LoadManager.cs",
                language: "csharp",
                code: `using System;
using System.Collections;
using System.IO;
using Firebase.Auth;
using Firebase.Database;
using TMPro;
using UnityEngine;

namespace Backend.Scripts
{
    public class LoadManager : MonoBehaviour
    {
        private long onlineTimeStamp;
        private long localTimeStamp;
        private GameData onlineData;
        private SaveManager _saveManager;

        public GameObject startButton;
        public GameObject loadingText;
        public TextMeshProUGUI signinFailed;
        
        private bool OnlineDataMissing => onlineTimeStamp == 0;
        private bool LocalDataMissing => localTimeStamp == 0;
        private void Awake()
        {
            EnablePressToPlay(false);
            Invoke("HandleFailedSignin", 5);
            FirebaseDatabase.DefaultInstance.SetPersistenceEnabled(false);
            if (Application.internetReachability != NetworkReachability.NotReachable)
            {
                StartCoroutine(GetStats());
            }
            else
            {
                CancelInvoke("HandleFailedSignin");
                HandleFailedSignin();
            }
        }

        private void LoadData()
        {
            var path = Application.persistentDataPath + "/stats.save.json";
            GameData localData = null;
        
            if (File.Exists(path))
            {
                string json = File.ReadAllText(path);
                localData = JsonUtility.FromJson<GameData>(json);
                localTimeStamp = localData.timeStamp;
            }

            if (LocalDataMissing && OnlineDataMissing)
            {
                EnablePressToPlay(true);
                return;
            }
            //get the most up to date data stats
            SetData(localTimeStamp > onlineTimeStamp ? localData : onlineData);
        }

        private void SetData(GameData data)
        {
            SaveManager.SaveTotalScore = data.totalScore;
            SaveManager.SaveTotalGems = data.totalGems;
            SaveManager.SaveTotalCoins = data.totalCoins;
            SaveManager.SaveHighScore = data.playerHighScore;
            EnablePressToPlay(true);
        }

        //upon finish loading
        private void EnablePressToPlay(bool b)
        {
            loadingText.SetActive(!b);
            startButton.SetActive(b);
        }

        //get online stats
        public IEnumerator GetStats()
        {
            //give time to fetch
            yield return new WaitForSeconds(1);
            string username = String.Empty;
#if UNITY_ANDROID
            username = GooglePlayGames.PlayGamesPlatform.Instance.localUser.userName;
#endif
            if(username == String.Empty) username = FirebaseAuth.DefaultInstance.CurrentUser.UserId;
            var userData = FirebaseDatabase.DefaultInstance.RootReference.Child("users").Child(username).GetValueAsync();
            
            yield return new WaitUntil(predicate: () => userData.IsCompleted);

            DataSnapshot snapshot = userData.Result;
            //if online data exists
            if (snapshot != null && snapshot.Exists)
            {
                onlineData = JsonUtility.FromJson<GameData>(snapshot.GetRawJsonValue());
                onlineTimeStamp = onlineData.timeStamp;
            }
            CancelInvoke("HandleFailedSignin");
            LoadData();
        }

        void HandleFailedSignin()
        {
            signinFailed.text += "Failed to fetch online data.";
            LoadData();
            EnablePressToPlay(true);
        }
    }
}`
            },
            {
                title: "LoginPlaystore.cs",
                language: "csharp",
                code: `using System;
using System.Threading.Tasks;
using Firebase.Auth;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine;

namespace Backend.Scripts
{
    public class LoginPlayStore : MonoBehaviour
    {
        void Start()
        {
#if UNITY_ANDROID
            
            PlayGamesPlatform.DebugLogEnabled = true;
            PlayGamesPlatform.Activate();
            PlayGamesPlatform.Instance.Authenticate(ProcessAutomaticAuth);
            if (!PlayGamesPlatform.Instance.IsAuthenticated() 
                && FirebaseAuth.DefaultInstance.CurrentUser.UserId == String.Empty)
            {
                FirebaseAuth.DefaultInstance
                    .SignInAnonymouslyAsync()
                    .ContinueWith(ContinueWithLogin);
            }
#else
                
if (FirebaseAuth.DefaultInstance.CurrentUser.UserId == String.Empty){
FirebaseAuth auth = FirebaseAuth.DefaultInstance;
auth.SignInAnonymouslyAsync().ContinueWith(ContinueWithLogin);} 
            
#endif
        }
#if UNITY_ANDROID

        private static void ProcessAutomaticAuth(SignInStatus status)
        {
            if (status != SignInStatus.Success)
            {
                PlayGamesPlatform.Instance.ManuallyAuthenticate(ProcessManualAuth);
            }
            else
            {
                ProcessManualAuth(status);
            }
        }

        private static void ProcessManualAuth(SignInStatus status)
        {
            if (status != SignInStatus.Success) return;

            PlayGamesPlatform.Instance.RequestServerSideAccess(true, code =>
            {
                FirebaseAuth auth = FirebaseAuth.DefaultInstance;
                Credential credential = PlayGamesAuthProvider.GetCredential(code);
                auth.SignInWithCredentialAsync(credential).ContinueWith(ContinueWithLogin);
            });
        }
#endif
        private static void ContinueWithLogin(Task<FirebaseUser> task)
        {
                if (task.IsCanceled) Debug.Log("cancelled");
                else if (task.IsFaulted)
                {
                    Debug.Log("error" + task.Exception);
                }
                else
                {
                    FirebaseUser newUser = task.Result;
                } 
        }
        
    }
}`
            },
            
        ]
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