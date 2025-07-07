import { MonitorSmartphone, MailCheck, Cpu, DatabaseZap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VishalElectronics = ({ project }) => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">📟</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Vishal Electronics</h1>
          <p className="text-xl text-slate-300">Static Showcase + Enquiry App</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30 font-medium">
              Freelance Project
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 font-medium">
              Live
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <p className="text-slate-300 text-lg">
          A lightweight and static website developed for an electronics wholesaler. Features include a products showcase,
          enquiry cart, and mail integration. Built for low maintenance and cost using Tailwind CSS, vanilla JS, and EmailJS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-lg">
          <h3 className="text-pink-400 font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
            <li>HTML, Tailwind CSS</li>
            <li>JavaScript, EmailJS</li>
            <li>JSON-based product data (simulating DB)</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-lg">
          <h3 className="text-pink-400 font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
            <li>Product catalog with filters</li>
            <li>Enquiry cart and checkout</li>
            <li>Real-time email enquiry</li>
          </ul>
        </div>
      </div>

      <div className="pt-4 flex gap-4">
        <Button 
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium"
          onClick={() => window.open(project.github, '_blank')}
        >
          <MonitorSmartphone className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
        {project.demo && (
          <Button 
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <MailCheck className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default VishalElectronics;
