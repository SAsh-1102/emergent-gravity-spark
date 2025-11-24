import { Award, Target, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We drive business success through innovative digital strategies',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technology to stay ahead',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Building long-term partnerships with exceptional service',
  },
  {
    icon: Award,
    title: 'Results-Oriented',
    description: 'Delivering measurable outcomes that matter',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                About Emerging Software
              </span>
            </h2>
            <p className="text-lg text-foreground/70">
              At Emerging Software, our mission is to drive business success through 
              innovative digital strategies and superior technology solutions. We are 
              committed to providing exceptional service, delivering measurable results, 
              and fostering long-term partnerships with our clients.
            </p>
            <p className="text-lg text-foreground/70">
              With expertise spanning digital marketing, web development, and technology 
              consulting, we help businesses across the Middle East transform their 
              digital presence and achieve their goals.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-foreground/60">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/60">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;