import { Car, Settings, ListChecks, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VehicleRecommendation = ({ project }) => {
  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Multi-Type Vehicle Recommendations",
      description: "Recommends cars or bikes based on user input like budget, usage, brand preference, and must-have features."
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Few-Shot Prompt Tuning",
      description: "Used Gemini’s LLM with carefully crafted few-shot prompts to steer model behavior and simulate structured reasoning."
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: "Regex-Based Structured Parsing",
      description: "Manually parsed raw LLM output with regex to create structured JSON-like outputs before Gemini’s native support existed."
    }
  ];

  const techStack = [
    {
      name: "LLM",
      techs: ["Gemini Pro", "Prompt Engineering", "Few-Shot Prompting"]
    },
    {
      name: "Logic Layer",
      techs: ["Regex Parsing", "Heuristic Output Structuring"]
    },
    {
      name: "Deployment",
      techs: ["React", "Vite", "Tailwind", "Netlify"]
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🚗</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Vehicle Recommendation System</h1>
          <p className="text-xl text-slate-300">LLM Wrapper for Budget-Based Suggestions</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full font-medium border border-indigo-500/30">
              LLM Application
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full font-medium border border-yellow-500/30">
              Gemini Wrapper
            </span>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <p className="text-slate-300 leading-relaxed mb-4">
            This project serves as an intelligent Gemini-based recommendation tool that suggests the most suitable vehicles 
            (cars or bikes) based on user-defined inputs like budget, vehicle type, and desired features. It was developed 
            before Gemini supported structured outputs, which required creative handling of the raw LLM output.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Using few-shot prompting and prompt tuning, the system maintained a consistent structure. Outputs were parsed 
            using regex and converted into structured response objects for frontend display and reasoning.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-indigo-400/50 transition-colors">
              <div className="text-indigo-400 mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((category, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-md text-sm border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex gap-4">
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
          onClick={() => window.open(project.github, "_blank")}
        >
          <Settings className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
        {project.demo && (
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open(project.demo, "_blank")}
          >
            <Car className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default VehicleRecommendation;
