
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer |Data Scientist| ML Enthusiast ";
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-primary/25 to-transparent rounded-full"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className={`lg:col-span-1 flex justify-center scale-in ${isVisible ? 'visible' : ''}`}>
          <div className="relative">
            <div className="w-80 bg-gradient-to-br from-primary/10 to-card rounded-2xl overflow-hidden shadow-2xl modern-glow border border-border">
              <img 
                src="./me2.png"
                alt="Vishwajeet Patil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-64 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center modern-pulse shadow-lg">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className={`space-y-4 fade-in-right ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hello, I'm
              <span className="text-primary block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Vishwajeet Patil</span>
            </h1>
            <div className="h-16">
              <p className="text-xl lg:text-2xl text-accent font-medium typing-animation">
                {typedText}
              </p>
            </div>
          </div>

          <p className={`text-lg text-muted-foreground leading-relaxed max-w-2xl fade-in-up stagger-2 ${isVisible ? 'visible' : ''}`}>
            Passionate about creating intelligent solutions through code. I build full-stack applications 
            and develop machine learning models that solve real-world problems. From web development to 
            deep learning, I love turning ideas into reality with clean, modern design.
          </p>

          <div className={`flex flex-wrap gap-4 fade-in-up stagger-3 ${isVisible ? 'visible' : ''}`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg modern-glow transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <a
  href="https://drive.google.com/file/d/1El7w4Zj3qPiOpFlQpyZP1vzqsYPirUFE/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
              <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-muted px-8 py-3 text-lg modern-glow transition-all duration-300"
            >
              Download Resume
            </Button>
            </a>
            
          </div>

          <div className={`pt-8 fade-in-up stagger-4 ${isVisible ? 'visible' : ''}`}>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-lg">Learn More About Me</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
