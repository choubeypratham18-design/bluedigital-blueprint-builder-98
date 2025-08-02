import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Video, Users, Lightbulb, BarChart, Headphones, DollarSign, FileText, Target, Rocket, Palette, Smartphone, Globe, Settings, Megaphone, Search, TrendingUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'What We Do', href: '#services' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#work' },
    { name: 'Our Company', href: '#about' },
    { name: 'Case Studies', href: '#work' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">BLUE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">What We Do</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6 w-[700px]">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Design</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Palette className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">UI/UX Design</p>
                            <p className="text-sm text-muted-foreground">Website Design, Mobile App Design</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Target className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Branding & Identity</p>
                            <p className="text-sm text-muted-foreground">Logo, Brand Guideline, Brand Voice</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Video className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Graphic & Motion Design</p>
                            <p className="text-sm text-muted-foreground">Creatives, Ads, Videos</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Settings className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Digital Product Design</p>
                            <p className="text-sm text-muted-foreground">Saas Product, Software Workflows</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Technology</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Globe className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Website & E-commerce Development</p>
                            <p className="text-sm text-muted-foreground">Website, E-commerce, Mobile Responsive</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Smartphone className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Mobile & SaaS Development</p>
                            <p className="text-sm text-muted-foreground">Mobile Apps, Custom Software, CRM, ERP</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Code className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">AI Automation & Integration</p>
                            <p className="text-sm text-muted-foreground">AI Tools, Agents, Consulting</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Settings className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Automation & API Integration</p>
                            <p className="text-sm text-muted-foreground">Payment Gateway, Workflow, Automation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Marketing</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Target className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Brand Creation</p>
                            <p className="text-sm text-muted-foreground">End-to-end, Research, Strategy, Positioning</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Megaphone className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Social Media Marketing</p>
                            <p className="text-sm text-muted-foreground">Facebook, Instagram, LinkedIn, X, YouTube</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Search className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">SEO & Content Marketing</p>
                            <p className="text-sm text-muted-foreground">Keywords, Optimization, Blogs, Traffic</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Advertising & Lead Generation</p>
                            <p className="text-sm text-muted-foreground">Paid Marketing, Meta, Google Ads, Network</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-4 p-6 w-[800px]">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">AI</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Code className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">AI in IT</p>
                            <p className="text-sm text-muted-foreground">Automation - AI Chatbot, Product Development</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <BarChart className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">AI in Marketing</p>
                            <p className="text-sm text-muted-foreground">Automation - Blog, Social Media, Lead Conversion</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <DollarSign className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">AI in Sales</p>
                            <p className="text-sm text-muted-foreground">Automation - Sales Analytics, Qualifying Leads, Calling</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">AI in HR</p>
                            <p className="text-sm text-muted-foreground">Automation - Resume filtering, Interviews, Onboarding</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <FileText className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">AI in Admin & Accounts</p>
                            <p className="text-sm text-muted-foreground">Automation - Dashboard, Invoice Processing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Video</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Video className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Corporate & Social Media Videos</p>
                            <p className="text-sm text-muted-foreground">Corporate Shoot, Product Video</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Video className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Social Media Reels/Videos</p>
                            <p className="text-sm text-muted-foreground">Corporate Shoot, Product Video</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Video className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Motion Graphics & Animation</p>
                            <p className="text-sm text-muted-foreground">Introduction, Reels, Explainer Video</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Headphones className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Start Podcasting</p>
                            <p className="text-sm text-muted-foreground">Research, Script, Shoot, Reach</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Consulting</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Target className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Virtual CMO</p>
                            <p className="text-sm text-muted-foreground">Marketing, Advertising, Team Management</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Business Mentorship</p>
                            <p className="text-sm text-muted-foreground">Helping Founders, Key Challenges</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Idea to MVP</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <BarChart className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Market Research & Validation</p>
                            <p className="text-sm text-muted-foreground">User Research, Market Validation</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Code className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">MVP Development</p>
                            <p className="text-sm text-muted-foreground">UI/UX, Product Development</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Rocket className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">Go-To-Market Strategy</p>
                            <p className="text-sm text-muted-foreground">Pitch Deck, Digital Marketing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px]">
                    <h3 className="font-semibold text-lg mb-4">Zero to One</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Settings className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Solar CRM</p>
                          <p className="text-sm text-muted-foreground">B2B SaaS Solar CRM</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">SnapIT.ai</p>
                          <p className="text-sm text-muted-foreground">AI Document Mgt. Solution</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">Our Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px]">
                    <h3 className="font-semibold text-lg mb-4">Discover us</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">About Us</p>
                          <p className="text-sm text-muted-foreground">Since 2009, 450+ Brands</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Download Profile</p>
                          <p className="text-sm text-muted-foreground">Our Company Profile & Portfolio</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Careers</p>
                          <p className="text-sm text-muted-foreground">Openings - Marketing, Sales</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Blogs</p>
                          <p className="text-sm text-muted-foreground">Marketing, Design, Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary">Case Studies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[500px]">
                    <h3 className="font-semibold text-lg mb-4">Success Stories</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Education</p>
                          <p className="text-sm text-muted-foreground">Western University Canada, Extramarks</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <DollarSign className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Food & Beverages</p>
                          <p className="text-sm text-muted-foreground">Crown Rice, Big Mouth Cafe</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">E-commerce</p>
                          <p className="text-sm text-muted-foreground">Glen, Levesque, Aerglo Lighting</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Headphones className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">HealthCare</p>
                          <p className="text-sm text-muted-foreground">Phillips HealthCare, DocOnline</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <BarChart className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">BFSI</p>
                          <p className="text-sm text-muted-foreground">Probus Insurance, Barjeel, Bonanza</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Settings className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Hospitality & Real Estate</p>
                          <p className="text-sm text-muted-foreground">The Golden Estate, World Residency, NY One</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Lets Talk 💬
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Lets Talk 💬
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;