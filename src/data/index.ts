export interface Project {
        id: string;
        title: string;
        technologies: string[];
        shortDescription: string;
        role: {
            title: string;
            points: string[];
        };
        fullDescription: string;
        images: {
            main: string;
            gallery: string[];
        };
        videoUrl?: string;
        platform: string;
        duration:string;
        teamSize: string;
        codeSnippets: { title: string; code: string; language: string }[];
        additionalText?: string;
        githubUrl?: string;
        playUrl?: string;
}