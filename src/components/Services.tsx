import { Code, Megaphone, Smartphone, TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive SEO, social media marketing, and digital advertising tailored for the Middle East market.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
  },
  {
    icon: TrendingUp,
    title: 'PPC Management',
    description: 'Expert pay-per-click campaign management to maximize ROI and drive targeted conversions.',
  },
  {
    icon: Users,
    title: 'Brand Strategy',
    description: 'Build a powerful brand identity that resonates with your target audience and stands out.',
  },
  {
    icon: Zap,
    title: 'Technology Consulting',
    description: 'Strategic guidance to leverage the latest technologies and digital transformation.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;