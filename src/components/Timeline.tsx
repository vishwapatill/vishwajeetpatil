import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Timeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  const timelineData = [
    {
      year: '2014',
      type: 'learning',
      title: 'First .bat Quiz Game',
      description: 'Started programming journey by creating my first batch file quiz game',
      icon: '🎮'
    },
    {
      year: '2015',
      type: 'learning',
      title: 'Python Automation - "Insta Jarvis"',
      description: 'Built my first Python Instagram automation tool',
      icon: '🤖'
    },
    {
      year: '2016',
      type: 'learning',
      title: 'Web Development',
      description: 'Learned HTML & CSS fundamentals',
      icon: '🌐'
    },
    {
      year: '2018',
      type: 'education',
      title: 'High School',
      description: 'Completed secondary education with focus on science with 92.3 %',
      icon: '🎓'
    },
    {
      year: '2020',
      type: 'education',
      title: 'Pre-University  ( sri Channabasaveshwara Gurukul )',
      description: 'Completed PU with specialization in computer science with 90.5%',
      icon: '📚'
    },
    {
      year: '2021',
      type: 'learning',
      title: 'C & C++',
      description: 'Mastered system programming languages',
      icon: '⚙️'
    },
    {
      year: '2021 dec',
      type: 'education',
      title: 'Engineering',
      description: 'PES UNIVERSITY',
      icon: '🏛️'
    },
    {
      year: '2023',
      type: 'learning',
      title: 'Data Science',
      description: 'Dove deep into data analysis, visualization, and statistical modeling',
      icon: '📊'
    },
    {
      year: '2023',
      type: 'experience',
      title: 'Freelancing',
      description: 'Started freelance web development and automation projects',
      icon: '💼'
    },
    {
      year: '2024',
      type: 'learning',
      title: 'Machine Learning',
      description: 'Advanced ML techniques, neural networks, and deep learning',
      icon: '🧠'
    },
    {
      year: '2025',
      type: 'experience',
      title: 'Internship',
      description: 'Gained industry experience in ML and full-stack development',
      icon: '🏢'
    },
    {
      year: '2025 -july',
      type: 'education',
      title: 'Engineering Completion',
      description: 'Completed B.tech computer science with 8.31 Cgpa',
      icon: '🏢'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'learning': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'education': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'experience': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'learning': return 'Learning';
      case 'education': return 'Education';
      case 'experience': return 'Experience';
      default: return 'Learning';
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full"></div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my learning experiences and professional growth
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

          {timelineData.map((item, index) => (
            <div key={index} className={`relative pl-12 mb-12 fade-in-up stagger-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`}>
              {/* Dot */}
              <div className={`absolute left-0 top-2 w-4 h-4 rounded-full ${getTypeColor(item.type).split(' ')[0].replace('bg-', 'bg-').replace('/20', '')} border-4 border-background`}></div>

              {/* Card */}
              <div className={`bg-card border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 modern-glow ${getTypeColor(item.type)}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
