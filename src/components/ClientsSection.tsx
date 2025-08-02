import { Card, CardContent } from '@/components/ui/card';

const ClientsSection = () => {
  const clients = [
    { name: "Air India", logo: "✈️" },
    { name: "Alda", logo: "🍳" },
    { name: "Philips", logo: "💡" },
    { name: "Bank of Baroda", logo: "🏦" },
    { name: "AnalytIQ", logo: "📊" },
    { name: "ANONET", logo: "🌐" },
    { name: "AerGlo", logo: "💡" },
    { name: "EduCanada", logo: "🎓" },
    { name: "DocOnline", logo: "🏥" },
    { name: "Crown Rice", logo: "🌾" },
    { name: "Click2Confirm", logo: "✅" },
    { name: "Glen", logo: "🏠" },
    { name: "Go Clubbing", logo: "🎉" },
    { name: "Samriddhi IIM", logo: "🎓" },
    { name: "IID Delhi", logo: "🎨" },
    { name: "IMT", logo: "🎓" },
    { name: "ISB", logo: "🎓" },
    { name: "Labhyansh", logo: "💼" },
    { name: "Levesque", logo: "👗" },
    { name: "Max Skill First", logo: "🚀" },
    { name: "NX One", logo: "💰" },
    { name: "Probus", logo: "🛡️" },
    { name: "SGT University", logo: "🎓" },
    { name: "Sky-Hi Global", logo: "✈️" },
    { name: "Solang Valley Resort", logo: "🏔️" },
    { name: "Surkh", logo: "🎨" },
    { name: "Shweta Gaur", logo: "💄" },
    { name: "T3 Rolls Momos", logo: "🥟" },
    { name: "The Golden Estate", logo: "🏠" },
    { name: "Ventura", logo: "🛋️" },
    { name: "Western University", logo: "🎓" },
    { name: "World Residency", logo: "🏠" },
    { name: "Neva", logo: "💍" },
    { name: "HYNA Decor", logo: "🏠" },
    { name: "Tista Bene", logo: "💄" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-light/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've helped businesses across industries achieve their digital goals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Count */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-primary">35+</span>
            <span className="text-muted-foreground">Satisfied Clients Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;