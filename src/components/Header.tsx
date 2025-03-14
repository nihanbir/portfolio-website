
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 
      ${isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-md" 
        : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4 text-primary">John Doe</h1>
          <span className="hidden md:inline-block text-muted-foreground">Game Programmer</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>john@example.com</span>
            </a>
            <div className="flex space-x-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/80">
            <Download className="w-4 h-4 mr-2" />
            <span>Download CV</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
