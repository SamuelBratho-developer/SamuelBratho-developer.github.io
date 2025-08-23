import { MessageCircle, Mail, Instagram, Github, MessageSquare, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  language: 'pt' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    pt: {
      title: "Vamos conversar sobre seu próximo projeto"
    },
    en: {
      title: "Let's talk about your next project"
    }
  };

  const contacts = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/5511999999999", // substituir pelo número real
      color: "hover:bg-green-500/10 hover:text-green-500 hover:border-green-500"
    },
    {
      name: "E-mail",
      icon: Mail,
      href: "mailto:devsamuelbratho@gmail.com",
      color: "hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/samuelbrathoo", // substituir pelo Instagram real
      color: "hover:bg-pink-500/10 hover:text-pink-500 hover:border-pink-500"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/SamuelBratho",
      color: "hover:bg-gray-500/10 hover:text-gray-400 hover:border-gray-500"
    },
    {
      name: "Discord",
      icon: MessageSquare,
      href: "https://discord.gg/samuel", // substituir pelo Discord real
      color: "hover:bg-indigo-500/10 hover:text-indigo-500 hover:border-indigo-500"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#", // link vazio conforme solicitado
      color: "hover:bg-sky-500/10 hover:text-sky-500 hover:border-sky-500"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              
              return (
                <Button
                  key={contact.name}
                  variant="outline"
                  size="lg"
                  asChild
                  className={`h-20 glass-card border-2 group transition-all duration-300 animate-scale-in ${contact.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{contact.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16 animate-fade-up">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                {language === 'pt' 
                  ? "Pronto para começar um projeto incrível?" 
                  : "Ready to start an amazing project?"
                }
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'pt'
                  ? "Entre em contato e vamos transformar sua ideia em realidade!"
                  : "Get in touch and let's turn your idea into reality!"
                }
              </p>
              <Button 
                variant="hero"
                asChild
              >
                <a href="mailto:devsamuelbratho@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  {language === 'pt' ? "Enviar E-mail" : "Send Email"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;