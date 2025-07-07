
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Models = () => {
  const { ref, isVisible } = useScrollAnimation();

  const models = [
    {
      title: "Fashion YOLO",
      description: "Fine-tuned YOLO model for fashion object detection",
      architecture: "YOLOv8",
      performance: "mAP: 0.87",
      icon: "👁️",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      title: "Fashion ResNet",
      description: "ResNet-50 fine-tuned for fashion classification and compatibility",
      architecture: "ResNet-50",
      performance: "Accuracy: 94.2%",
      icon: "🔍",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      title: "Fashion Scoring MLP",
      description: "Multi-layer perceptron trained from scratch for fashion scoring",
      architecture: "Custom MLP",
      performance: "F1-Score: 0.91",
      icon: "🧠",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      title: "House Prediction Model",
      description: "California housing price prediction using ensemble methods",
      architecture: "Random Forest",
      performance: "R²: 0.88",
      icon: "🏠",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
    },
    {
      title: "Background Removal",
      description: "CLIP-based model for intelligent background removal",
      architecture: "CLIP + U-Net",
      performance: "IoU: 0.92",
      icon: "✂️",
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30"
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
            Fine-tuned <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom machine learning models developed for specific use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <Card 
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 modern-glow scale-in stagger-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg border ${model.color.replace('border-', 'border-').replace('/30', '/50')}`}>
                    <span className="text-2xl">{model.icon}</span>
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{model.title}</CardTitle>
                    <p className="text-accent text-sm">{model.architecture}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {model.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Performance</span>
                  <span className="text-primary font-semibold text-sm">{model.performance}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
