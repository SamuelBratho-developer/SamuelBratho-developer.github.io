import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  language: 'pt' | 'en';
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    pt: {
      title: "Alguns dos meus trabalhos recentes",
      viewCode: "Ver Código",
      inDevelopment: "Em desenvolvimento"
    },
    en: {
      title: "Some of my recent work",
      viewCode: "View Code", 
      inDevelopment: "In development"
    }
  };

  const projects = [
    {
      id: 1,
      title: "Tela de login",
      description: language === 'pt' 
        ? "Este projetoto é uma Tela de Login desenvolvida em Python utilizando a biblioteca CustomTkinter." 
        : "este projetoto é uma Tela de Login desenvolvida em Python utilizando a biblioteca CustomTkinter, que permite criar interfaces gráficas modernas e personalizadas.",
      tech: ["python"],
      github: "https://github.com/SamuelBratho-developer/Tela-de-login.py",
      image: "https://static.vecteezy.com/ti/vetor-gratis/t2/2027488-vector-illustration-of-sign-in-page-login-website-page-and-form-people-with-smartphone-screen-vetor.jpg"
    },
    {
      id: 2, 
      title: "Portifolio responsive",
      description: language === 'pt'
        ? "Um portfólio pessoal moderno e responsivo, inclui animações interativas, filtragem de projetos e design otimizado para desktop e dispositivos móveis."
        : "",
      tech: ["Html", "css", "javascript"],
      github: "https://github.com/SamuelBratho-developer/Portifolio-html-responsive",
      image: "https://thumbs.dreamstime.com/b/%C3%ADcone-de-ordem-produ%C3%A7%C3%A3o-retomada-portf%C3%B3lio-ilustra%C3%A7%C3%A3o-vetor-edit%C3%A1vel-simples-continua%C3%A7%C3%A3o-arquivo-eps-vetoriais-edit%C3%A1veis-249125669.jpg"
    },
    {
      id: 3,
      title: "Design System",
      description: language === 'pt'
        ? "Sistema de design completo com componentes reutilizáveis"
        : "Complete design system with reusable components",
      tech: ["React", "Storybook", "Tailwind"],
      github: "https://github.com/SamuelBratho/design-system",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Mobile App",
      description: language === 'pt'
        ? "Aplicativo mobile com React Native e backend em Python"
        : "Mobile app with React Native and Python backend",
      tech: ["React Native", "Python", "Firebase"],
      github: "https://github.com/SamuelBratho/mobile-app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card group hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 group-hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      {content[language].viewCode}
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-secondary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;