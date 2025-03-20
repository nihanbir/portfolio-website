import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Section {
    title: string;
    content: string;
}

interface FullDescriptionProps {
    introText: string;
    sections: Section[];
    projectId: string;
    isExpanded: boolean;
    onHeightChange: (height: number) => void; // Callback to notify parent of height changes
}

export function FullDescription({ introText, sections, projectId, isExpanded, onHeightChange }: FullDescriptionProps) {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
        sections.reduce((acc, _, index) => {
            const sectionId = `section-${projectId}-${index}`;
            acc[sectionId] = false;
            return acc;
        }, {} as Record<string, boolean>)
    );

    const contentRef = useRef<HTMLDivElement>(null);

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    // Notify parent of height changes when sections are expanded/collapsed
    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            onHeightChange(height);
        }
    }, [expandedSections, onHeightChange]);

    return (
        <div className="space-y-4 mt-6" ref={contentRef}>
            <h3 className="text-lg sm:text-xl font-semibold">About the Project</h3>

            {introText && (
                <div className="mb-4">
                    <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">{introText}</p>
                </div>
            )}

            {sections.length > 0 ? (
                <div className="space-y-4">
                    {sections.map((section, index) => {
                        const sectionId = `section-${projectId}-${index}`;
                        const isSectionExpanded = isExpanded && expandedSections[sectionId] !== false;

                        return (
                            <div key={sectionId} className="border border-muted rounded-md">
                                <button
                                    onClick={() => toggleSection(sectionId)}
                                    className="flex justify-between items-center w-full p-3 text-left bg-muted/50 hover:bg-muted transition-colors rounded-t-md"
                                >
                                    <span className="font-medium text-sm sm:text-base">{section.title}</span>
                                    {isSectionExpanded ?
                                        <ChevronUp className="h-4 w-4 text-primary" /> :
                                        <ChevronDown className="h-4 w-4 text-primary" />
                                    }
                                </button>
                                <div
                                    className={cn(
                                        "p-3 transition-all duration-300",
                                        !isSectionExpanded && "hidden"
                                    )}
                                >
                                    <div
                                        className="text-foreground/90 leading-relaxed whitespace-pre-line text-sm sm:text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: section.content
                                                .replace(/\n {2}- /g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;• ')
                                                .replace(/\n {4}- /g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• ')
                                                .replace(/\n- /g, '<br>• ')
                                                .replace(/^\s*- /gm, '• ')
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">{introText}</p>
            )}
        </div>
    );
}