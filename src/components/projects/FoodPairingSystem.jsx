import { Soup, Network, Replace, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FoodPairingSystem = ({ project }) => {
  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Graph-Based Modeling",
      description:
        "Built a heterogeneous graph connecting ingredients via shared flavor compounds and recipe co-occurrence."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Metapath2Vec Embeddings",
      description:
        "Generated high-quality embeddings using metapath2vec and skip-gram for better semantic relationships."
    },
    {
      icon: <Replace className="w-6 h-6" />,
      title: "Smart Substitutions & Pairings",
      description:
        "Recommends culturally accurate substitutes and complementary dishes based on graph proximity."
    }
  ];

  const techStack = [
    {
      name: "Graph Learning",
      techs: ["NetworkX", "metapath2vec", "Skip-gram", "Node2Vec"]
    },
    {
      name: "Languages & Tools",
      techs: ["Python", "Pandas", "Matplotlib", "Jupyter"]
    },
    {
      name: "Data",
      techs: ["6,000 Indian Recipes", "Flavor Compound Dataset"]
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🍛</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Food Pairing System</h1>
          <p className="text-xl text-slate-300">Graph-Based Ingredient Compatibility</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full font-medium border border-yellow-500/30">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium border border-green-500/30">
              Completed
            </span>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <p className="text-slate-300 leading-relaxed mb-4">
            This system models ingredient compatibility using a heterogeneous graph structure 
            where nodes represent ingredients and edges are based on shared flavor compounds and 
            recipe co-occurrence. By leveraging metapath2vec and skip-gram embedding models, it 
            generates meaningful vector representations for each ingredient.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Trained on 6,000 Indian recipes, the system delivers accurate suggestions for 
            ingredient substitution and complementary dish recommendations grounded in cultural 
            context and taste profiles.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-yellow-400/50 transition-colors">
              <div className="text-yellow-400 mb-3">{feature.icon}</div>
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
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">{category.name}</h3>
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
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-yellow-500/20 transition-all duration-200"
          onClick={() => window.open(project.github, "_blank")}
        >
          <Soup className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
        {project.demo && (
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open(project.demo, "_blank")}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default FoodPairingSystem;
