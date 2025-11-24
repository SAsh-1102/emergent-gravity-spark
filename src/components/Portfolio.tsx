import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern shopping experience with seamless checkout',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    description: '300% increase in organic traffic',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and intuitive financial management',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Enterprise-level digital presence',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Social Media Strategy',
    category: 'Digital Marketing',
    description: '50K+ engaged followers in 6 months',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'SaaS Platform',
    category: 'Technology Consulting',
    description: 'Cloud-based solution for enterprise clients',
    gradient: 'from-indigo-500 to-blue-600',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcasing successful projects that drive results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;