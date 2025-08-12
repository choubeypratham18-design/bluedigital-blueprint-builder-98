import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Code, TrendingUp, Zap, Users, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      subtitle: "That Speaks Business.",
      description: "Whether it's an app, website, or visual identity — we craft user-first designs that convert attention into action.",
      features: ["UI/UX Design", "Brand Identity", "Visual Design", "Prototyping"]
    },
    {
      icon: Code,
      title: "Technology",
      subtitle: "That Builds Business.",
      description: "Need on-demand developers, custom backend, or platform integrations? We've got you covered with expertise across PHP, Python, React, Node.js, Zoho, Odoo, & more",
      features: ["Web Development", "Mobile Apps", "Backend Systems", "Integration"]
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      subtitle: "Where Strategy Brings Business.",
      description: "With 360° digital marketing services — SEO, paid ads, social media, influencer marketing — we grow brands with precision.",
      features: ["Digital Marketing", "SEO", "Social Media", "Paid Advertising"]
    }
  ];

  const stats = [
    { number: "4+", label: "Business we helped to grow" },
    { number: "35+", label: "Brand Projects we executed" },
    { number: "15+", label: "Years of Experience" },
    { number: "25+", label: "Team Members" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-blue-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Growing your <span className="gradient-text">Revenue</span> using <br />
            Blue Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-card to-blue-light/5 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {service.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

{/* ===== New Video Section Added ===== */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-16">
          <video
            src="C:/Users/ADNJ/Desktop/digital/bluedigital-blueprint-builder-98/public/Blue-story-latest.mp4"
            poster="/images/Group-20.png"
            controls
            className="w-full h-auto object-cover"
          />
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Who we are?
            </h2>
            <h3 className="text-xl font-semibold text-primary">
              Design. Build. Market. Repeat.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a 15-year-old powerhouse delivering end-to-end solutions in Design, Marketing, and Technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From world-class UI/UX and brand storytelling to full-scale digital campaigns and custom tech development — we help businesses scale with speed and style.
            </p>
            <p className="text-xl font-semibold text-primary">
              Let's Build Something Great!
            </p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">PURPOSE</span> is to meet your <span className="gradient-text">PURPOSE</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We Solve. We Build. We Deliver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
