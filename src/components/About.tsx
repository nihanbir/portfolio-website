import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from "@/media/about/me.jpg";
import { projects, getAllTechnologies } from '@/data/projects';

const allTechnologies = getAllTechnologies();
const About = () => {
  return (
    <section id="about" className="pt-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="bg-card/50 backdrop-blur-sm md:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl">Nihan Flärd</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg mb-4">
              <img
                  src={profileImage}
                  alt="Nihan Flärd"
                  className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Game Programmer & Developer</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">Certified Scrum Master</p>
          </CardContent>
        </Card>

        {/* About Card */}
        <Card className="bg-card/50 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle>My Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Hi there! I'm a social and organized game programming graduate with a year of
              hands-on experience in C++ and Unreal Engine 5, as well as a Certified Scrum Master.
            </p>
            <p className="text-muted-foreground mb-4">
              Coming from a background in aviation, I'm exploring my life long dream of working
              on developing video games. I thrive on problem-solving and working in a team.
            </p>

            <h4 className="font-medium mb-3 mt-6">Skills & Technologies</h4>
              <div className="flex flex-wrap">
                {allTechnologies.map((tech) => (
                  <span key={tech} className="tech-tag text-xs sm:text-sm border border-accent/50">
                      {tech}
                  </span>
                ))}
              </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;