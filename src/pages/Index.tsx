
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Models from '@/components/Models';
import Datasets from '@/components/Datasets';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <TechStack />
      </section>
      
      <Projects />
      
      <section id="models">
        <Models />
      </section>
      
      <section id="datasets">
        <Datasets />
      </section>
      <Timeline />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Vishwajeet patil. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
