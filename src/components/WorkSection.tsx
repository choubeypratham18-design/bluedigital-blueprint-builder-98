import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      title: "Where Creativity Converts",
      subtitle: "High Commission of Canada",
      category: "Education",
      image: "🎓",
      link: "#"
    },
    {
      title: "Bright Ideas. Clean Energy.",
      subtitle: "Arka Energy AB, Sweden",
      category: "Energy",
      image: "⚡",
      link: "#"
    },
    {
      title: "Purely Natural",
      subtitle: "Vedic Cosmeceuticals",
      category: "Beauty",
      image: "🌿",
      link: "#"
    },
    {
      title: "Where Comfort Meets Creativity.",
      subtitle: "Ventura International",
      category: "Furniture",
      image: "🛋️",
      link: "#"
    },
    {
      title: "Accounts. Advice. Advancement.",
      subtitle: "Labhyansh Services Private Limited",
      category: "Finance",
      image: "📊",
      link: "#"
    },
    {
      title: "Always Fast. Always On.",
      subtitle: "ANONET Communications Pvt. Ltd.",
      category: "Technology",
      image: "🌐",
      link: "#"
    },
    {
      title: "Crafting Beauty. Creating Artists.",
      subtitle: "Shweta Gaur – Makeup Artist & Academy",
      category: "Beauty",
      image: "💄",
      link: "#"
    },
    {
      title: "Real Estate, Real Results.",
      subtitle: "World Residency",
      category: "Real Estate",
      image: "🏠",
      link: "#"
    },
    {
      title: "Smart Investments. Solid Returns.",
      subtitle: "NX One",
      category: "Investment",
      image: "💰",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-background to-blue-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our creative journey—crafted designs, impactful visuals, and tailored solutions that bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card to-blue-light/5 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-semibold text-muted-foreground">
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group-hover:text-primary transition-colors p-0 h-auto font-semibold"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;