import { FileSearch, Cloud, Layers, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContentPipeline = ({ project }) => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🤖</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Content Pipeline</h1>
          <p className="text-xl text-slate-300">End-to-End Content Processing System</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full font-medium border border-teal-500/30">
              Data Engineering
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium border border-green-500/30">
              Production
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <p className="text-slate-300 text-lg">
          A full modular system to scrape, download, transcribe and process videos for insights.
          Includes Selenium scrapers, JSON parsers, FFmpeg video processors, and integration with Azure Blob Storage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-lg">
          <h3 className="text-teal-400 font-semibold mb-2">Key Modules</h3>
          <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
            <li>Scraper (Selenium-based)</li>
            <li>Downloader & Video Manager</li>
            <li>Transcriber with Whisper</li>
            <li>Azure Blob Pusher</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 p-6 border border-slate-700 rounded-lg">
          <h3 className="text-teal-400 font-semibold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
            <li>Python, FFmpeg, JSON</li>
            <li>Azure SDK, Whisper</li>
            <li>Selenium, Regex Parsers</li>
          </ul>
        </div>
      </div>

      <div className="pt-4">
        <Button 
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium"
          onClick={() => window.open(project.github, '_blank')}
        >
          <Layers className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
      </div>
    </div>
  );
};

export default ContentPipeline;
