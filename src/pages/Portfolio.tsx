import StructuredData from "@/components/StructuredData";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      {/* SEO Structured Data */}
      <StructuredData />
      
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Particles Background */}
        <Particles />
        
        {/* Navigation */}
        <Navbar language={language} onLanguageChange={handleLanguageChange} />
        
        {/* Main Content */}
        <main>
          <Hero language={language} />
          <Skills language={language} />
          <Projects language={language} />
          <About language={language} />
          <Contact language={language} />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;