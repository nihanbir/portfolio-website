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
            main: 'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/PussInGardenGif.gif?raw=true',
            gallery: [
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/UnrealEditor_kY84PIrLWQ.png?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/UnrealEditor_9FzEsiKgtq.png?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/UnrealEditor_iVhLsz0muG.png?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/UnrealEditor_CF2vZTGajM.png?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/SofaHideGif.gif?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/horpus/TableHideGif.gif?raw=true',
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
        shortDescription: "The key feature of this project is the implementation of a modified BFS algorithm in Unity using C#.",
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
            
            "How I solved it:\n"+
            "Initially thought algorithm was Dijkstra however it didn't solve the problem of collecting the heighest " +
            "weight when there was no path to the goal.\n" +
            "A modified version of BFS algorithm was used to solve this problem. " +
            "BFS stores copies of all paths (when predecessor method isn't used), " +
            "therefore this seemed like the best option because all paths needed to be compared " +
            "to each other to know which one reached the highest weight when the goal wasn't reachable.\n" +
            "Modified BFS was made to take weight into account and to look at all ways to get to any given tile, not just the fastest.",

        images: {
            main:'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/algorithms/991542_265422.png?raw=true',
            gallery: [
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/algorithms/838013_524424.gif?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/algorithms/63067_769622.gif?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/algorithms/56604_920108.png?raw=true',
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
            main: 'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/sk8escape/229985_328099.png?raw=true',
            gallery: [
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/sk8escape/132728_76860.gif?raw=true',
                'https://github.com/nihanbir/portfolio-website/blob/main/src/media/projects/sk8escape/740937_527491.gif?raw=true',
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