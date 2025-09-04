import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Code, Smartphone, ShoppingBag, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const integrationGuides = [
  {
    icon: ShoppingBag,
    title: "Integrate with Shopify",
    description: "Add QuickPay's instant UPI payment option to your Shopify store's checkout process with our official plugin. No coding required.",
    difficulty: "Beginner",
    time: "5 minutes",
    badge: "Most Popular"
  },
  {
    icon: ShoppingBag,
    title: "Integrate with WooCommerce",
    description: "Follow our detailed guide to install and configure the QuickPay WordPress plugin for your WooCommerce-powered e-commerce site.",
    difficulty: "Beginner",
    time: "10 minutes"
  },
  {
    icon: Code,
    title: "Custom REST API Integration",
    description: "A complete walkthrough for developers on integrating our powerful REST API into any custom-built website, backend, or application.",
    difficulty: "Advanced",
    time: "30 minutes"
  },
  {
    icon: Smartphone,
    title: "Mobile SDK Integration",
    description: "Use our native Android and iOS SDKs to embed a seamless and secure UPI payment experience directly into your mobile application.",
    difficulty: "Intermediate",
    time: "45 minutes"
  }
];

export default function IntegrationGuides() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Go Live in <span className="text-gold-gradient">Minutes</span>, Not Weeks.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Our clear and comprehensive integration guides provide step-by-step instructions for the most popular platforms and frameworks. Get your business ready to accept instant payments with QuickPay quickly and easily.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Guides Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {integrationGuides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="card-premium group relative">
                  {/* Badge */}
                  {guide.badge && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      {guide.badge}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {guide.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm text-muted-foreground">
                        <Zap className="inline h-4 w-4 mr-1" />
                        {guide.time}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {guide.description}
                  </p>
                  
                  <Button className="w-full group/btn">
                    Start Integration
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Need Help Getting Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate QuickPay seamlessly. Get personalized assistance and accelerate your go-to-market timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Contact Developer Support
              </Button>
              <Button size="lg" variant="outline">
                View API Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}