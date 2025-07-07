import { LineChart, Cpu, Settings2, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HousePriceRegression = ({ project }) => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Micrograd From Scratch",
      description: "Implemented a custom auto-differentiation engine to train models without external ML libraries."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Multiple Regression Models",
      description: "Built and compared Linear, Multivariate Linear, Polynomial Regression, and MLP using the Micrograd engine."
    },
    {
      icon: <Settings2 className="w-6 h-6" />,
      title: "PyTorch Comparison",
      description: "Introduced equivalent PyTorch implementations at select stages for performance and GPU acceleration."
    }
  ];

  const techStack = [
    {
      name: "Core Logic",
      techs: ["Python", "Custom Micrograd", "Autograd Engine"]
    },
    {
      name: "Models Implemented",
      techs: ["Linear Regression", "Multivariate", "Polynomial", "MLP"]
    },
    {
      name: "Optional Modules",
      techs: ["PyTorch", "Matplotlib", "Numpy"]
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🏡</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">House Price Regression</h1>
          <p className="text-xl text-slate-300">Custom Regression Engine + Model Comparison</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full font-medium border border-purple-500/30">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium border border-green-500/30">
              Educational
            </span>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <p className="text-slate-300 leading-relaxed mb-4">
            This project was designed as a learning-first regression framework where all core ML logic was implemented manually using a custom-built <strong>Micrograd</strong> engine. 
            It allowed for deep introspection of gradients, loss curves, and training logic without relying on external libraries.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The system supports various regression models—Linear, Multivariate, Polynomial, and Multi-Layer Perceptron—trained and evaluated on a house price dataset.
            At key bottlenecks, equivalent <strong>PyTorch versions</strong> were included for performance benchmarking and GPU leverage.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-colors">
              <div className="text-purple-400 mb-3">{feature.icon}</div>
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
              <h3 className="text-lg font-semibold text-purple-400 mb-3">{category.name}</h3>
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
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
          onClick={() => window.open(project.github, "_blank")}
        >
          <Scale className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
        {project.demo && (
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open(project.demo, "_blank")}
          >
            <LineChart className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default HousePriceRegression;
