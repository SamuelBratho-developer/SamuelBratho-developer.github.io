import { useEffect, useState } from "react";
import { Code2, Database, Palette } from "lucide-react";

interface SkillsProps {
  language: 'pt' | 'en';
}

const Skills = ({ language }: SkillsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const content = {
    pt: {
      title: "Tecnologias que domino",
      categories: {
        frontend: "Frontend",
        backend: "Backend", 
        design: "Design"
      }
    },
    en: {
      title: "Technologies I master",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        design: "Design"
      }
    }
  };

  const skills = [
    {
      category: "frontend",
      icon: Code2,
      items: [
        { name: "React", level: 60 },
        { name: "Javascript", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      category: "backend", 
      icon: Database,
      items: [
        { name: "Python", level: 90 },
        { name: "Node.js", level: 69 },
        { name: "PHP", level: 75 },
      ]
    },
    {
      category: "design",
      icon: Palette,
      items: [
        { name: "UI/UX", level: 80 },
        { name: "Figma", level: 45 },
        { name: "Motion", level: 65 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => {
            const Icon = skillCategory.icon;
            
            return (
              <div 
                key={skillCategory.category}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-red">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {content[language].categories[skillCategory.category as keyof typeof content.pt.categories]}
                  </h3>
                </div>

                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${isVisible ? 'animate-pulse' : ''}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 3 + skillIndex) * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;