
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Datasets = () => {
  const { ref, isVisible } = useScrollAnimation();

  const datasets = [
    {
      title: "E-commerce Men's Fashion Images",
      description: "Comprehensive dataset of men's fashion items with detailed annotations for training fashion models",
      size: "5K+ images",
      categories: ["Shirts", "Pants", "Shoes", "Accessories"],
      icon: "👔",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Social Media Data",
      description: "Curated dataset from Instagram and TikTok for influencer analysis and social media intelligence",
      size: "1M+ posts",
      categories: ["Influencer Profiles", "Engagement Metrics", "Content Analysis"],
      icon: "📱",
      color: "bg-pink-500/20 text-pink-400"
    },
    {
      title: "Fashion Compatibility Dataset",
      description: "Custom dataset for training outfit compatibility models with positive and negative fashion pairs",
      size: "2K+ combinations",
      categories: ["Outfit Pairs", "Style Compatibility", "Fashion Trends"],
      icon: "👗",
      color: "bg-purple-500/20 text-purple-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Custom <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Datasets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated and processed datasets for training specialized machine learning models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasets.map((dataset, index) => (
            <Card 
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 modern-glow scale-in stagger-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-4 rounded-lg ${dataset.color.replace('text-', 'text-').replace('/20', '/10').replace('bg-', 'bg-')} border border-current/20`}>
                    <span className="text-3xl">{dataset.icon}</span>
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{dataset.title}</CardTitle>
                    <p className="text-primary font-semibold">{dataset.size}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {dataset.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="text-accent font-semibold mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {dataset.categories.map((category, categoryIndex) => (
                      <span 
                        key={categoryIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs border border-border"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Datasets;
