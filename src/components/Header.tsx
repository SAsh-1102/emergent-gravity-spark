import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              EMERGING SOFTWARE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Contact
            </button>
            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin')}
              >
                <User className="w-4 h-4 mr-2" />
                Admin
              </Button>
            )}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border/50">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Contact
            </button>
            {isAdmin && (
              <div className="px-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate('/admin');
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  <User className="w-4 h-4 mr-2" />
                  Admin Dashboard
                </Button>
              </div>
            )}
            <div className="px-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;