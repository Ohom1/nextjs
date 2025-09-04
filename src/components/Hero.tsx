import { ArrowRight, Zap, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const handleGetStarted = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Stop Waiting for</span>
            <span className="block text-gradient">Your Money.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-muted-foreground">
            <span className="text-gold-gradient">Instant</span> UPI Settlements, 
            <span className="text-gold-gradient"> Real-Time</span> Growth.
          </h2>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            QuickPay ends the T+2 settlement nightmare. Accept UPI payments from any app and get your funds settled directly in your bank account in milliseconds, not days. Boost your cash flow, simplify your operations, and focus on what matters most: growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4 group"
              onClick={handleGetStarted}
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground mb-16">
            <span className="inline-flex items-center space-x-4">
              <span>✓ No setup fees</span>
              <span>✓ No hidden charges</span>
              <span>✓ No credit card required</span>
            </span>
          </div>

          {/* Visual Element - Payment Flow Animation */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 p-8">
              {/* UPI Icon */}
              <div className="flex flex-col items-center animate-float">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-gold transition-all duration-300">
                  <Banknote className="h-12 w-12 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground mt-2">UPI Payment</span>
              </div>

              {/* Arrow */}
              <div className="flex-1 relative">
                <div className="h-0.5 bg-gradient-to-r from-primary to-secondary animate-glow"></div>
                <Zap className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 text-primary animate-bounce" />
              </div>

              {/* Bank Icon */}
              <div className="flex flex-col items-center animate-float" style={{animationDelay: '1s'}}>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-gold transition-all duration-300">
                  <svg className="h-12 w-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7h20L12 2zM4 9v10h16V9H4zm2 8V11h12v6H6z"/>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground mt-2">Your Bank Account</span>
              </div>
            </div>

            {/* Instant Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-gold">
                T+0 Settlement • Milliseconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};