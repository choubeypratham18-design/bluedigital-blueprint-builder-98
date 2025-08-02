import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aditya Kapoor",
      role: "Director",
      company: "Tech Solutions Inc.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      testimonial: "The marketing service exceeded our expectations! Their strategies boosted our online visibility and brought in quality leads. Professional, creative, and results-driven — highly recommended!"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Head",
      company: "Digital Ventures",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      testimonial: "Blue Digital transformed our brand identity completely. Their design team understood our vision perfectly and delivered beyond what we imagined. The results speak for themselves!"
    },
    {
      name: "Rahul Mehta",
      role: "CEO",
      company: "Innovation Labs",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      testimonial: "Working with Blue Digital was a game-changer for our business. Their technical expertise and creative approach helped us launch our product successfully in the market."
    },
    {
      name: "Sarah Johnson",
      role: "Founder",
      company: "StartUp Hub",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      testimonial: "The team at Blue Digital is incredibly talented and professional. They delivered our project on time and exceeded all our expectations. Highly recommend their services!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-light/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="mb-8 bg-gradient-to-br from-card to-blue-light/5 border-0 shadow-elegant">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonials[currentTestimonial].avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  index === currentTestimonial 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'hover:shadow-md opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <CardContent className="p-4 text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-3">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="font-semibold text-sm mb-1">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;