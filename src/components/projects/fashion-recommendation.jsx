import { BrainCircuit, Sparkles, Shuffle, Shirt, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FashionRecommendation = ({ project }) => {
  const features = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Outfit Compatibility",
      description: "Fine-tuned ResNet-50 model extracts embeddings to learn outfit compatibility using triplet loss."
    },
    {
      icon: <Shuffle className="w-6 h-6" />,
      title: "Sample Generation",
      description: "Automatically generates positive and negative outfit combinations to improve training robustness."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Fashion Matching Algorithm",
      description: "Suggests best matching outfits using embedding distance and style vectors."
    }
  ];

  const techStack = [
    { name: "Model & Framework", techs: ["PyTorch", "ResNet-50", "YOLOv8", "PIL"] },
    { name: "Techniques", techs: ["Triplet Loss", "Embedding Learning"] },
    { name: "Dataset", techs: ["Fashion Product Dataset", "Custom Compatibility Labels"] }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🧥</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Fashion Recommendation</h1>
          <p className="text-xl text-slate-300">Outfit Compatibility using Deep Learning</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 font-medium">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 font-medium">
              Completed
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <p className="text-slate-300 mb-4 leading-relaxed">
            A smart outfit recommendation system that learns visual compatibility between fashion items.
            It uses a deep ResNet-50 model for feature extraction, triplet loss for compatibility learning,
            and includes modules like virtual try-on and embedding comparison.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50">
              <div className="text-purple-400 mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((cat, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((t, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-md text-sm border border-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium"
          onClick={() => window.open(project.github, '_blank')}
        >
          <BrainCircuit className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
      </div>
    </div>
  );
};

export default FashionRecommendation;
