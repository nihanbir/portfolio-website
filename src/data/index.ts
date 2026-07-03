export interface Project {
        id: string;
        title: string;
        technologies: string[];
        shortDescription: string;
        overview?: string;
        keyTakeaways?: string[];
        systemsImplemented?: string[];
        technicalHighlights?: {
                title: string;
                description: string;
        }[];
        architectureFlow?: string[];
        technicalChallenges?: {
                challenge: string;
                solution: string;
                result?: string;
        }[];
        additionalResponsibilities?: string[];
        lessonsLearned?: string[];
        role: string[];
        featured?: boolean;
        category?: "engineering" | "gameplay";
        featuredLabel?: string;
        projectType?: string;
        status?: string;
        releasePlan?: string;
        images?: {
                main: string;
                gallery: string[];
        };
        videoUrl?: string;
        platform?: string;
        duration?: string;
        teamSize?: string;
        codeSnippets?: {
                title: string;
                language: string;
                code: string;
        }[];
        additionalText?: string;
        githubUrl?: string;
        playUrl?: string;
}
