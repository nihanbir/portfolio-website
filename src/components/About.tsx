
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/media/about/me.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>
      
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                <img 
                  src={profileImage}
                  alt="Nihan Bir" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Game Programmer & Developer</h3>
              <p className="text-muted-foreground mb-4">
                Hi there! I'm a social and organized game programming graduate with a year of 
                hands-on experience in C++ and Unreal Engine 5, as well as a Certified Scrum Master.
              </p>
              <p className="text-muted-foreground mb-4">
                Coming from a background in aviation, I'm exploring my life long dream of working
                on developing video games. I thrive on problem-solving and working in a team.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="tech-tag bg-muted text-muted-foreground">Unity</span>
                <span className="tech-tag bg-muted text-muted-foreground">Unreal Engine</span>
                <span className="tech-tag bg-muted text-muted-foreground">Blueprints</span>
                <span className="tech-tag bg-muted text-muted-foreground">C#</span>
                <span className="tech-tag bg-muted text-muted-foreground">C++</span>
                <span className="tech-tag bg-muted text-muted-foreground">SDL</span>
                <span className="tech-tag bg-muted text-muted-foreground">Trello</span>
                <span className="tech-tag bg-muted text-muted-foreground">Jira</span>
                <span className="tech-tag bg-muted text-muted-foreground">Confluence</span>
                <span className="tech-tag bg-muted text-muted-foreground">Github</span>

              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
