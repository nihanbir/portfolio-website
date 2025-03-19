import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { Button } from "@/components/ui/button.tsx";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

interface CodeSnippet {
    title: string;
    code: string;
}

interface CodeSnippetsProps {
    codeSnippets: CodeSnippet[];
    onExpandChange?: (expanded: boolean) => void;
}

export function CodeSnippets({ codeSnippets, onExpandChange }: CodeSnippetsProps) {
    const [showCodeSnippets, setShowCodeSnippets] = useState(false);
    const [activeTab, setActiveTab] = useState(codeSnippets[0].title.replace(/\s+/g, '-').toLowerCase());

    const handleToggle = () => {
        setShowCodeSnippets(!showCodeSnippets);
        if (onExpandChange) {
            onExpandChange(!showCodeSnippets);
        }
    };

    return (
        <div className="border-b border-border pb-6">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg sm:text-xl font-semibold">Code Snippets</h4>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleToggle}
                    className="flex items-center"
                >
                    <Code className="w-4 h-4 mr-2" />
                    {showCodeSnippets ? "Hide Code" : "Show Code"}
                </Button>
            </div>

            {showCodeSnippets && codeSnippets.length > 0 && (
                <div className="mt-4 animate-fade-in">
                    <Tabs
                        defaultValue={activeTab}
                        onValueChange={setActiveTab}
                    >
                        <TabsList className="mb-2">
                            {codeSnippets.map((snippet) => (
                                <TabsTrigger
                                    key={snippet.title}
                                    value={snippet.title.replace(/\s+/g, '-').toLowerCase()}
                                    className="text-xs sm:text-sm"
                                >
                                    {snippet.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {codeSnippets.map((snippet) => (
                            <TabsContent
                                key={snippet.title}
                                value={snippet.title.replace(/\s+/g, '-').toLowerCase()}
                            >
                                <div className="relative">
                                    <pre className="max-h-96 overflow-y-auto p-4 text-sm bg-muted rounded-md">
                                        <code className="font-mono whitespace-pre">{snippet.code}</code>
                                    </pre>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            )}
        </div>
    );
}