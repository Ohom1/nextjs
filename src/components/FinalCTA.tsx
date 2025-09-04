import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  const handleGetStarted = () => {
    // Sign up functionality
    console.log('Final CTA Get Started clicked');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary-foreground rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-primary-foreground rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Unlock 
            <span className="block">Instant Cash Flow?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses that have stopped waiting and started growing. 
            Create your QuickPay account in minutes and experience the future of payments today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-12 py-4 font-semibold group shadow-2xl"
              onClick={handleGetStarted}
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-primary-foreground/80">
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              <span className="text-sm">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};