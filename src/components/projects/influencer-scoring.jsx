import { Users2, BarChart, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfluencerScoring = ({ project }) => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">📊</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Influencer Scoring Engine</h1>
          <p className="text-xl text-slate-300">Bio, Caption, and Tag Matching</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30 font-medium">
              Data Science
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30 font-medium">
              Active
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <p className="text-slate-300 text-lg">
          A soft-matching engine for influencer campaigns that scores creators based on semantic bio & caption matching, key benefits, and tagged engagement. Handles nested data structures and automates scoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-lg">
          <h3 className="text-indigo-400 font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
            <li>Soft match scoring with NLP logic</li>
            <li>Handles nested JSON to CSV</li>
            <li>Campaign matching by benefit overlap</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-lg">
          <h3 className="text-indigo-400 font-semibold mb-2">Stack</h3>
          <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
            <li>Python, Pandas</li>
            <li>Custom Scoring Functions</li>
            <li>NLP & Word Frequency</li>
          </ul>
        </div>
      </div>

      <div className="pt-4 flex gap-4">
        <Button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
          onClick={() => window.open(project.github, '_blank')}
        >
          <BarChart className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
        {project.demo && (
          <Button 
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <FileText className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfluencerScoring;
