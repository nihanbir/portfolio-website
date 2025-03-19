import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          className={`sticky transition-all duration-300 p-4 
      ${isScrolled
              ? "bg-background/95 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-4 text-primary">Nihan Bir</h1>
            <span className="hidden md:inline-block text-muted-foreground">Game Programmer</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a href="mailto:nihan.bir@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>nihan.bir@gmail.com</span>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/nihanbir" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nihanbir/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            <Button
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/80"
                onClick={() => window.open("https://drive.google.com/file/d/1A6_HwBJxGN1WgQ2RpU-nieYb4UAETG_P/view?usp=sharing",
                    "_blank",
                    "noopener,noreferrer")}
            >
              <span>View CV</span>
            </Button>
          </div>
        </div>
      </header>
  );
};

export default Header;