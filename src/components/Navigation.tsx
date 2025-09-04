import { useState } from 'react';
import { Menu, X, Zap, Code, Shield, Users, CreditCard, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetStarted = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = () => {
    // Placeholder for login functionality
    console.log('Login clicked');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">
              <span className="text-gold-gradient">Quick</span>
              <span className="text-foreground">Pay</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                  Solutions
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#solutions" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50">
                      <CreditCard className="mr-3 h-4 w-4" />
                      E-commerce
                    </a>
                    <a href="#solutions" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50">
                      <Users className="mr-3 h-4 w-4" />
                      Gaming
                    </a>
                    <a href="#solutions" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50">
                      <Code className="mr-3 h-4 w-4" />
                      SaaS
                    </a>
                  </div>
                </div>
              </div>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                  Developers
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="/integration-guides" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50">
                      <Code className="mr-3 h-4 w-4" />
                      Integration Guides
                    </a>
                    <a href="/api-status" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50">
                      <Shield className="mr-3 h-4 w-4" />
                      API Status
                    </a>
                    <a href="/sandbox" className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50">
                      <FileText className="mr-3 h-4 w-4" />
                      Sandbox
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={handleLogin} className="text-muted-foreground hover:text-primary">
              Log In
            </Button>
            <Button 
              className="btn-primary" 
              onClick={handleGetStarted}
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-xl mt-2 mb-4">
              <a href="#solutions" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#developers" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                Developers
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" onClick={handleLogin} className="w-full text-muted-foreground hover:text-primary">
                  Log In
                </Button>
                <Button 
                  className="btn-primary w-full" 
                  onClick={handleGetStarted}
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};