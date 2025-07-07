import { Github, ExternalLink, Calendar, Users, Database, Shield, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NimmaManne = ({ project, onClose }) => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Smart Property Listings",
      description: "Advanced filtering system with location-based search, price range filters, and property type categorization."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Visit Scheduling System",
      description: "Intelligent scheduling that prevents conflicts and manages availability windows for property visits."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Wishlist Management",
      description: "Save favorite properties with real-time updates and price change notifications."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Authentication",
      description: "JWT-based authentication with role-based access control for tenants and landlords."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Notifications",
      description: "Automated email system for property updates, visit confirmations, and enquiry responses."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Management",
      description: "Separate dashboards for tenants and landlords with personalized experiences."
    }
  ];

  const techStack = [
    { name: "Frontend", techs: ["React", "Tailwind CSS", "React Router", "Context API"] },
    { name: "Backend", techs: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt"] },
    { name: "Database", techs: ["MongoDB", "Mongoose ODM", "Aggregation Pipeline"] },
    { name: "Services", techs: ["EmailJS", "Cloudinary", "Google Maps API"] }
  ];

  const metrics = [
    { value: "60%", label: "Reduction in search time" },
    { value: "500+", label: "Properties listed" },
    { value: "95%", label: "User satisfaction rate" },
    { value: "2.3s", label: "Average page load time" }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">🏠</span>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Nimma Manne</h1>
          <p className="text-xl text-slate-300">House Rental Application</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full font-medium border border-blue-500/30">
              Full Stack
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium border border-green-500/30">
              Deployment Ready
            </span>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Nimma Manne addresses the chaotic rental market in Bangalore by providing a streamlined, 
            user-friendly platform that connects genuine property seekers with verified landlords. 
            The application eliminates the common pain points of property hunting through intelligent 
            features and a robust backend system.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Built with the MERN stack, the application features a sophisticated scheduling system, 
            spam prevention mechanisms, and a responsive design that works seamlessly across all devices.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="text-blue-400 mb-3">{feature.icon}</div>
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
          {techStack.map((category, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
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

      {/* Performance Metrics */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</div>
              <div className="text-slate-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Challenges */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Technical Challenges & Solutions</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-orange-400 mb-2">Challenge: Visit Scheduling Conflicts</h3>
            <p className="text-slate-300 mb-3">
              Managing multiple visit requests for the same property at overlapping times while ensuring optimal scheduling.
            </p>
            <p className="text-green-400">
              <strong>Solution:</strong> Implemented an intelligent scheduling algorithm that checks availability windows, 
              prevents double bookings, and suggests alternative time slots automatically.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-orange-400 mb-2">Challenge: Spam Prevention</h3>
            <p className="text-slate-300 mb-3">
              Preventing spam enquiries and maintaining data quality while keeping the platform accessible.
            </p>
            <p className="text-green-400">
              <strong>Solution:</strong> Developed a cooldown mechanism with rate limiting and implemented user verification 
              through email confirmation and phone number validation.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
          onClick={() => window.open(project.github, '_blank')}
        >
          <Github className="w-5 h-5 mr-2" />
          View Source Code
        </Button>
        {project.demo && (
          <Button 
            variant="outline" 
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default NimmaManne;