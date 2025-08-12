import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
<button className="welcome-button">Welcome to Blue</button>

  const slides = [
  {
    id: 1,
    badge: "Welcome to Blue",
    title: "Strategic Brand Creation:",
    subtitle: "Thoughtful, Data-Driven, and Powerful",
    description: "",
    image: "/HomePage_banner.png"
  },
    {
    id: 2,
    badge: "Welcome to Blue",
    title: "Turning Ideas",
    subtitle: "into Intuitive Interfaces.",
    description: "We craft user-first digital experiences that drive engagement and deliver results.",
    image: "/HomePage_UI_UX.png"
  },
  {
    id: 3,
    badge: "Welcome to Blue",
    title: "Complex Ideas,",
    subtitle: "Simply Animated.",
    description: "High-impact motion graphics crafted for clarity and connection.",
    image: "/HomePage_banner1.png"
  },
  {
    id: 4,
    badge: "Welcome to Blue",
    title: "Boost Business.",
    subtitle: "Cut Effort. Think AI.",
    description: "Let AI handle the heavy lifting while you focus on scaling.",
    image: "/HomePage_banner2.png"
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-blue-light/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground border">
                {slides[currentSlide].badge}
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="gradient-text">{slides[currentSlide].title}</span>
                  <br />
                  <span className="text-foreground">{slides[currentSlide].subtitle}</span>
                </h1>
                
                {slides[currentSlide].description && (
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Hero Image/Animation */}
         <div className="relative">
            <div className="relative w-full h-96 md:h-[500px]">
              <Card className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border-0 shadow-elegant animate-float overflow-hidden">
                <div className="p-8 h-full flex items-center justify-center">
                  <img 
                    src={slides[currentSlide].image} 
                    alt={`${slides[currentSlide].title} illustration`}
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>


        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Partner Logos */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-lg font-semibold text-muted-foreground">ChatGPT</div>
            <div className="text-lg font-semibold text-muted-foreground">Copilot</div>
            <div className="text-lg font-semibold text-muted-foreground">Midjourney</div>
            <div className="text-lg font-semibold text-muted-foreground">Gemini</div>
            <div className="text-lg font-semibold text-muted-foreground">WhatsApp</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
