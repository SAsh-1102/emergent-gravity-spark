import CosmicBackground from '@/components/CosmicBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CosmicBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;