import React from 'react';
import { Check } from 'lucide-react';
import { Project } from '@/data';

interface ProjectContentProps {
    project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
    const overview = project.overview ?? project.fullDescription;

    return (
        <div className="mt-6 space-y-8">
            {overview && (
                <section aria-labelledby={`overview-${project.id}`}>
                    <h3 id={`overview-${project.id}`} className="text-lg sm:text-xl font-semibold mb-3">
                        Overview
                    </h3>
                    <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                        {overview}
                    </p>
                </section>
            )}

            {project.keyTakeaways && project.keyTakeaways.length > 0 && (
                <section aria-labelledby={`takeaways-${project.id}`}>
                    <h3 id={`takeaways-${project.id}`} className="sr-only">
                        Key Takeaways
                    </h3>
                    <ul className="flex flex-wrap gap-2" aria-label="Key takeaways">
                        {project.keyTakeaways.map((takeaway) => (
                            <li
                                key={takeaway}
                                className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground sm:text-sm"
                            >
                                {takeaway}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {project.systemsImplemented && project.systemsImplemented.length > 0 && (
                <section aria-labelledby={`systems-${project.id}`}>
                    <h3 id={`systems-${project.id}`} className="text-lg sm:text-xl font-semibold mb-3">
                        Systems Implemented
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                        {project.systemsImplemented.map((system) => (
                            <li key={system} className="flex items-start gap-2 text-sm sm:text-base text-foreground/90">
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                                <span>{system}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                <section aria-labelledby={`highlights-${project.id}`}>
                    <h3 id={`highlights-${project.id}`} className="text-lg sm:text-xl font-semibold mb-3">
                        Technical Highlights
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                        {project.technicalHighlights.map((highlight) => (
                            <article key={highlight.title} className="rounded-lg border border-border bg-muted/20 p-4">
                                <h4 className="font-semibold text-primary mb-2">{highlight.title}</h4>
                                <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                                    {highlight.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {project.technicalChallenges && project.technicalChallenges.length > 0 && (
                <section aria-labelledby={`challenges-${project.id}`}>
                    <h3 id={`challenges-${project.id}`} className="text-lg sm:text-xl font-semibold mb-3">
                        Technical Challenges
                    </h3>
                    <div className="space-y-3">
                        {project.technicalChallenges.map((item) => (
                            <article key={item.challenge} className="rounded-lg border border-border p-4">
                                <h4 className="font-semibold mb-2">{item.challenge}</h4>
                                <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                                    <span className="font-medium text-foreground">Solution: </span>{item.solution}
                                </p>
                                {item.result && (
                                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/80">
                                        <span className="font-medium text-foreground">Result: </span>{item.result}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {project.additionalResponsibilities && project.additionalResponsibilities.length > 0 && (
                <section aria-labelledby={`responsibilities-${project.id}`}>
                    <h3 id={`responsibilities-${project.id}`} className="text-lg sm:text-xl font-semibold mb-3">
                        Additional Responsibilities
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base text-foreground/80">
                        {project.additionalResponsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                        ))}
                    </ul>
                </section>
            )}

            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                <section aria-labelledby={`lessons-${project.id}`}>
                    <h3 id={`lessons-${project.id}`} className="text-lg sm:text-xl font-semibold mb-3">
                        Lessons Learned
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base text-foreground/80">
                        {project.lessonsLearned.map((lesson) => <li key={lesson}>{lesson}</li>)}
                    </ul>
                </section>
            )}
        </div>
    );
}
