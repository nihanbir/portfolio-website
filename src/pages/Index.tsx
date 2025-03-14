
import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
