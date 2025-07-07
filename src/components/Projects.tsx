import { useState, lazy, Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowUp, X, ExternalLink, Loader2 } from 'lucide-react';

// Lazy load project components
const NimmaManne = lazy(() => import('./projects/nimma-manne.jsx'));
const FashionRecommendation = lazy(() => import('./projects/fashion-recommendation.jsx'));
const ContentPipeline = lazy(() => import('./projects/content-processing.jsx'));
const InfluencerScoring = lazy(() => import('./projects/influencer-scoring.jsx'));
const VishalElectronics = lazy(() => import('./projects/vishal-electric.jsx'));
const FoodPairingSystem=lazy(() => import('./projects/FoodPairingSystem.jsx'));
const HousePriceRegression=lazy(()=>import('./projects/Houseprice.jsx'));
const VehicleRecommendation=lazy(()=>import('./projects/VehicleRecommendation.jsx'));
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [overlayProject, setOverlayProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const projects = [
    {
      id: 'nimma-manne',
      title: "Nimma Manne — House Rental Application",
      emoji: "🏠",
      description: "A full-stack MERN app solving the chaos of Bangalore's rental market. Simplifies finding genuine properties with features like property listings, visit scheduling, wishlists, and secure authentication.",
      stack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT Auth", "EmailJS"],
      highlights: ["Custom DB & system flow design", "Visit scheduling logic", "Spam-preventing enquiry cooldown"],
      status: "Deployment-ready",
      category: "Full Stack",
      component: NimmaManne,
      github: "https://github.com/yourusername/nimma-manne",
      demo: "https://nimma-manne.vercel.app"
    },
    {
      id: 'fashion-recommendation',
      title: "Fashion Outfit Compatibility & Recommendation System",
      emoji: "🧥",
      description: "A deep learning project that recommends compatible outfits using embeddings from a fine-tuned ResNet-50 model. Includes virtual try-on modules and triplet loss for learning compatibility.",
      stack: ["PyTorch", "ResNet-50", "YOLOv8", "PIL", "Triplet Loss", "Fashion Dataset"],
      highlights: ["Trained compatibility model with triplet loss", "Generated positive/negative samples", "Fashion matching algorithms"],
      status: "Completed",
      category: "Machine Learning",
      component: FashionRecommendation,
      github: "https://github.com/yourusername/fashion-ai",
      demo: null
    },
    {
  id: 'food-pairing',
  title: "Graph-Based Food Pairing & Ingredient Recommendation System",
  emoji: "🍛",
  description: "A graph-based system that recommends complementary dishes and ingredient substitutions using shared flavor compounds and recipe co-occurrence. Built using graph embeddings and trained on Indian cuisine data.",
  stack: ["Python", "NetworkX", "metapath2vec", "Skip-gram", "Graph Embeddings"],
  highlights: [
    "Developed a heterogeneous ingredient graph using flavor compounds and co-occurrence",
    "Generated embeddings with metapath2vec for semantic similarity",
    "Trained on 6,000 Indian recipes for culturally relevant pairing and substitutions"
  ],
  status: "Completed",
  category: "Machine Learning",
  component: FoodPairingSystem,
  github: "https://github.com/yourusername/food-pairing-graph",
  demo: null
,},
    {
  id: 'house-price-regression',
  title: "House Price Prediction & Custom Regression Engine",
  emoji: "🏡",
  description: "A regression learning project built from scratch using a custom Micrograd engine. Supports multiple regression models and includes PyTorch benchmarks for GPU acceleration.",
  stack: ["Python", "Micrograd", "PyTorch", "MLP", "Regression", "Matplotlib"],
  highlights: [
    "Manual implementation of autograd and loss functions",
    "Regression model comparison: linear to MLP",
    "Optional PyTorch integration for speed-up"
  ],
  status: "Educational",
  category: "Machine Learning",
  component: HousePriceRegression,
  github: "https://github.com/yourusername/house-price-micrograd",
  demo: null
},
    {
      id: 'vishal-electronics',
      title: "Vishal Electronics — Product Enquiry Website",
      emoji: "📟",
      description: "A static website for an electronics wholesaler to showcase products and handle enquiry submissions via email. Built for minimal hosting cost and maintenance using HTML, Tailwind CSS, and JavaScript.",
      stack: ["HTML", "Tailwind CSS", "JavaScript", "EmailJS", "JSON (simulated DB)"],
      highlights: [
        "Static site with product filtering & enquiry cart",
        "Mail-based enquiry flow with EmailJS",
        "Cost-efficient deployment via Netlify"
      ],
      status: "Live",
      category: "Freelance Project",
      component: VishalElectronics,
      github: "https://github.com/yourusername/vishal-electronics",
      demo: "https://vishal-electronics.netlify.app"
    },
    {
      id: 'influencer-scoring',
      title: "Influencer Scoring & Soft Matching Engine",
      emoji: "📊",
      description: "A system to score influencers based on bio, captions, tags, and key benefits. Handles nested Instagram-like data and performs soft semantic scoring.",
      stack: ["Pandas", "Python", "Custom scoring logic", "NLP matching"],
      highlights: ["Word frequency analysis", "Nested JSON to CSV parsing", "Soft matching for brand campaigns"],
      status: "Active",
      category: "Data Science",
      component: InfluencerScoring,
      github: "https://github.com/yourusername/influencer-engine",
      demo: "https://influencer-engine.vercel.app"
    },
    {
  id: 'vehicle-recommendation',
  title: "Gemini-Based Vehicle Recommendation System",
  emoji: "🚗",
  description: "A prompt-engineered wrapper over Gemini that recommends vehicles based on budget, type, and feature preferences. Built before structured output was available using regex-based parsing and few-shot learning.",
  stack: ["Gemini LLM", "Prompt Engineering", "Regex", "React", "Tailwind CSS"],
  highlights: [
    "Built before Gemini supported structured output",
    "Regex postprocessing to simulate JSON results",
    "Few-shot tuned prompts for consistent recommendations"
  ],
  status: "Completed",
  category: "LLM Integration",
  component: VehicleRecommendation,
  github: "https://github.com/yourusername/vehicle-recommendation-gemini",
  demo: "https://vehicle-recommendation.vercel.app"
}
,

    {
      id: 'content-pipeline',
      title: "E2E Content Processing Pipeline",
      emoji: "🤖",
      description: "A modular system for scraping, downloading, transcribing, and analyzing content. Includes scrapers, Azure Blob Storage integration, and automated video-to-text processing.",
      stack: ["Python", "Selenium", "Azure Blob", "JSON Parsers", "FFmpeg", "Transcriber"],
      highlights: ["Multi-stage pipeline design", "Modular structure for flexible data extraction", "Automated content processing"],
      status: "Production",
      category: "Data Engineering",
      component: ContentPipeline,
      github: "https://github.com/yourusername/content-pipeline",
      demo: null
    }
    
  ];

  const openOverlay = (index: number) => {
    setOverlayProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setOverlayProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleViewAllProjects = () => {
    setShowAllProjects(true);
  };

  const handleGithubClick = (e: React.MouseEvent, githubUrl: string) => {
    e.stopPropagation();
    window.open(githubUrl, '_blank');
  };

  const handleDemoClick = (e: React.MouseEvent, demoUrl: string) => {
    e.stopPropagation();
    window.open(demoUrl, '_blank');
  };

  const projectsToShow = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-transparent rounded-lg"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-500/40 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing some of my best work in web development, machine learning, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsToShow.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm ${!showAllProjects && index === 0 ? 'opacity-100 translate-y-0' :
                  showAllProjects && index > 0 ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-100 translate-y-0'
                }`}
              onClick={() => openOverlay(index)}
              style={{
                animationDelay: showAllProjects && index > 0 ? `${(index - 1) * 200}ms` : '0ms'
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{project.emoji}</span>
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-md text-xs border border-slate-600 hover:border-blue-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject === index && (
                    <div className="space-y-4 animate-slideDown">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Highlights</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
                          onClick={(e) => handleGithubClick(e, project.github)}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                            onClick={(e) => handleDemoClick(e, project.demo)}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        {!showAllProjects && (
          <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button
              onClick={handleViewAllProjects}
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg animate-pulse"></div>
            </Button>
          </div>
        )}
      </div>

      {/* Project Overlay */}
      {overlayProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={closeOverlay}
          />

          <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm -z-10"></div>

            <button
              onClick={closeOverlay}
              className="absolute top-4 right-4 z-20 p-2 bg-slate-800/80 hover:bg-slate-700/80 rounded-full border border-blue-500/30 text-white transition-all duration-200 hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-full overflow-y-auto" style={{ maxHeight: 'calc(90vh - 0px)' }}>
              <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span className="text-lg">Loading project details...</span>
                  </div>
                </div>
              }>
                {/* Dynamically render the project component */}
                {(() => {
                  const ProjectComponent = projects[overlayProject].component;
                  return <ProjectComponent project={projects[overlayProject]} onClose={closeOverlay} />;
                })()}
              </Suspense>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;