import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const technologies = [
    { name: 'Python', icon: 'python_logo.png', category: 'Backend' },
    { name: 'JavaScript', icon: 'nodejs_logo.png', category: 'Frontend' },
    { name: 'React', icon: 'react_logo.png', category: 'Frontend' },
    { name: 'Node.js', icon: 'nodejs_logo.png', category: 'Backend' },
    { name: 'MongoDB', icon: 'mongo_logo.png', category: 'Database' },
    { name: 'MySQL', icon: 'sql_logo.png', category: 'Database' },
    { name: 'PyTorch', icon: 'PyTorch_logo.svg', category: 'ML' },
    { name: 'TensorFlow', icon: 'Tensorflow_logo.png', category: 'ML' },
    { name: 'C++', icon: 'cpp_logo.png', category: 'Systems' },
    { name: 'HTML/CSS', icon: 'html_logo.png', category: 'Frontend' },
    { name: 'Express.js', icon: 'express_logo.png', category: 'Backend' },
    { name: 'Pandas', icon: 'pandas_mark_logo.svg', category: 'Data Science' },
    { name: 'Selenium', icon: 'selenium_logo.png', category: 'Automation' },
    { name: 'Git', icon: 'git_logo.png', category: 'Tools' },
    { name: 'Tailwind', icon: 'tailwind_logo.png', category: 'Frontend' },
    { name: 'YOLOv8', icon: 'yolo_logo.png', category: 'ML' },
    { name: 'ResNet-50', icon: 'cv_logo.png', category: 'ML' },
    { name: 'Netlify', icon: 'netlify_logo.png', category: 'Deployment' },
  ];

  const categoryColors = {
    Backend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Frontend: "bg-green-500/20 text-green-400 border-green-500/30",
    Database: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    ML: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Systems: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "Data Science": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Automation: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    Tools: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    Deployment: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`bg-card border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 transform hover:scale-105 modern-glow ${categoryColors[tech.category]}`}>
                <div className="text-4xl mb-3"><img src={tech.icon}></img></div>
                <h4 className="text-sm font-medium text-white">{tech.name}</h4>
              </div>
              {hoveredTech === tech.name && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
