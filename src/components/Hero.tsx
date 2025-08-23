import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import gojoProfile from "@/assets/gojo-profile.jpg";

interface HeroProps {
  language: 'pt' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = {
    pt: [
      "Web Developer",
      "Desenvolvedor Fullstack", 
      "Designer UI/UX"
    ],
    en: [
      "Web Developer",
      "Fullstack Developer",
      "UI/UX Designer"
    ]
  };

  const content = {
    pt: {
      greeting: "Olá, eu sou",
      name: "Samuel Bratho",
      subtitle: "Criando experiências digitais incríveis",
      cta: "Ver Projetos"
    },
    en: {
      greeting: "Hello, I am",
      name: "Samuel Bratho", 
      subtitle: "Creating incredible digital experiences",
      cta: "View Projects"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles[language].length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [language]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <p className="text-lg text-muted-foreground mb-2">
              {content[language].greeting}
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              {content[language].name}
            </h1>
            
            <div className="h-16 mb-6">
              <h2 className="text-2xl lg:text-4xl font-semibold text-gradient animate-typing">
                {roles[language][currentRole]}
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              {content[language].subtitle}
            </p>
            
            <Button 
              onClick={scrollToProjects}
              variant="hero"
              className="group"
            >
              {content[language].cta}
              <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glow-red-strong animate-float">
                <img
                  src={gojoProfile}
                  alt="Samuel Bratho Profile"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/70 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/50 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;