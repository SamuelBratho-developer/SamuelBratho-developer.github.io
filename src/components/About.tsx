import { Code, Lightbulb, Rocket, Heart } from "lucide-react";

interface AboutProps {
  language: 'pt' | 'en';
}

const About = ({ language }: AboutProps) => {
  const content = {
    pt: {
      title: "Conheça um pouco da minha jornada",
      description: "Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. Com mais de 3 anos de experiência, tenho trabalhado em projetos que vão desde aplicações web complexas até designs de interface moderna. Minha missão é transformar ideias em experiências digitais extraordinárias.",
      highlights: [
        {
          icon: Heart,
          title: "Paixão por Código",
          description: "Cada linha de código é escrita com dedicação e amor pelo que faço."
        },
        {
          icon: Lightbulb,
          title: "Criatividade",
          description: "Busco sempre soluções criativas e inovadoras para cada desafio."
        },
        {
          icon: Rocket,
          title: "Inovação", 
          description: "Sempre atualizado com as últimas tecnologias e tendências do mercado."
        },
        {
          icon: Code,
          title: "Dedicação",
          description: "Comprometido em entregar sempre a melhor qualidade em cada projeto."
        }
      ]
    },
    en: {
      title: "Get to know a little about my journey",
      description: "I am a developer passionate about creating innovative digital solutions. With more than 3 years of experience, I have worked on projects ranging from complex web applications to modern interface designs. My mission is to transform ideas into extraordinary digital experiences.",
      highlights: [
        {
          icon: Heart,
          title: "Passion for Code",
          description: "Every line of code is written with dedication and love for what I do."
        },
        {
          icon: Lightbulb, 
          title: "Creativity",
          description: "I always seek creative and innovative solutions for each challenge."
        },
        {
          icon: Rocket,
          title: "Innovation",
          description: "Always updated with the latest technologies and market trends."
        },
        {
          icon: Code,
          title: "Dedication", 
          description: "Committed to always delivering the best quality in each project."
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {content[language].description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              
              return (
                <div
                  key={highlight.title}
                  className="text-center group animate-scale-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-red group-hover:glow-red-strong transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;