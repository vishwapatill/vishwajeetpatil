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
      description: 'Completed secondary education with focus on science',
      icon: '🎓'
    },
    {
      year: '2020',
      type: 'education',
      title: 'Pre-University',
      description: 'Completed PU with specialization in computer science',
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
      year: '2022',
      type: 'learning',
      title: 'MERN Stack',
      description: 'Full-stack web development with MongoDB, Express, React, Node.js',
      icon: '🚀'
    },
    {
      year: '2022',
      type: 'education',
      title: 'Engineering',
      description: 'Pursued Computer Science Engineering',
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
      year: '2024',
      type: 'experience',
      title: 'Internship',
      description: 'Gained industry experience in ML and full-stack development',
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
      {/* Modern Background Elements */}
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
          {/* Curved Timeline Path */}
          <svg className="absolute left-8 top-0 bottom-0 w-0.5" viewBox="0 0 2 1000" preserveAspectRatio="none">
            <path d="M 1 0 C 1 250, 1 500, 1 750 C 1 850, 1 950, 1 1000" stroke="currentColor" fill="none" className="text-border"></path>
          </svg>

          {timelineData.map((item, index) => (
            <div key={index} className={`relative mb-12 fade-in-up stagger-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`} style={{ marginLeft: `${index % 2 === 0 ? '2rem' : '8rem'}` }}>
              {/* Timeline dot */}
              <div className={`absolute left-0 w-4 h-4 rounded-full ${getTypeColor(item.type).split(' ')[0].replace('bg-', 'bg-').replace('/20', '')} border-4 border-background`} style={{ left: `${index % 2 === 0 ? '-0.5rem' : '6.5rem'}` }}></div>

              {/* Content */}
              <div className="ml-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
// import { useState } from 'react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// const Timeline = () => {
//   const { ref, isVisible } = useScrollAnimation();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const timelineData = [
//     {
//       year: '2014',
//       type: 'learning',
//       title: 'First .bat Quiz Game',
//       description: 'Started programming journey by creating my first batch file quiz game',
//       icon: '🎮'
//     },
//     {
//       year: '2015',
//       type: 'learning',
//       title: 'Python Automation - "Insta Jarvis"',
//       description: 'Built my first Python Instagram automation tool',
//       icon: '🤖'
//     },
//     {
//       year: '2016',
//       type: 'learning',
//       title: 'Web Development',
//       description: 'Learned HTML & CSS fundamentals',
//       icon: '🌐'
//     },
//     {
//       year: '2018',
//       type: 'education',
//       title: 'High School',
//       description: 'Completed secondary education with focus on science',
//       icon: '🎓'
//     },
//     {
//       year: '2020',
//       type: 'education',
//       title: 'Pre-University',
//       description: 'Completed PU with specialization in computer science',
//       icon: '📚'
//     },
//     {
//       year: '2021',
//       type: 'learning',
//       title: 'C & C++',
//       description: 'Mastered system programming languages',
//       icon: '⚙️'
//     },
//     {
//       year: '2022',
//       type: 'learning',
//       title: 'MERN Stack',
//       description: 'Full-stack web development with MongoDB, Express, React, Node.js',
//       icon: '🚀'
//     },
//     {
//       year: '2022',
//       type: 'education',
//       title: 'Engineering',
//       description: 'Pursued Computer Science Engineering',
//       icon: '🏛️'
//     },
//     {
//       year: '2023',
//       type: 'learning',
//       title: 'Data Science',
//       description: 'Dove deep into data analysis, visualization, and statistical modeling',
//       icon: '📊'
//     },
//     {
//       year: '2023',
//       type: 'experience',
//       title: 'Freelancing',
//       description: 'Started freelance web development and automation projects',
//       icon: '💼'
//     },
//     {
//       year: '2024',
//       type: 'learning',
//       title: 'Machine Learning',
//       description: 'Advanced ML techniques, neural networks, and deep learning',
//       icon: '🧠'
//     },
//     {
//       year: '2024',
//       type: 'experience',
//       title: 'Internship',
//       description: 'Gained industry experience in ML and full-stack development',
//       icon: '🏢'
//     }
//   ];

//   const getTypeColor = (type) => {
//     switch (type) {
//       case 'learning': return 'bg-blue-500';
//       case 'education': return 'bg-green-500';
//       case 'experience': return 'bg-purple-500';
//       default: return 'bg-blue-500';
//     }
//   };

//   return (
//     <section className="py-20 px-4 relative">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
//         <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full"></div>
//       </div>

//       <div ref={ref} className="max-w-4xl mx-auto relative z-10">
//         <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             My <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Journey</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             A timeline of my learning experiences and professional growth
//           </p>
//         </div>

//         <div className="relative">
//           <svg className="absolute left-8 top-0 bottom-0 w-0.5" viewBox="0 0 2 1000" preserveAspectRatio="none">
//             <path d="M 1 0 C 1 250, 1 500, 1 750 C 1 850, 1 950, 1 1000" stroke="currentColor" fill="none" className="text-border"></path>
//           </svg>

//           {timelineData.map((item, index) => (
//             <div
//               key={index}
//               className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="flex items-center">
//                 <div className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} border-4 border-background z-10`}></div>
//                 <div className="ml-4 text-white font-bold">{item.year} - {item.title}</div>
//               </div>

//               {hoveredIndex === index && (
//                 <div className={`absolute ${index % 2 === 0 ? 'left-24' : 'right-24'} bg-card border rounded-lg p-6 shadow-lg z-20 w-64`}>
//                   <div className="flex items-center gap-4 mb-3">
//                     <span className="text-2xl">{item.icon}</span>
//                     <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//                   </div>
//                   <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;
