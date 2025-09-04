import { ShoppingCart, Gamepad2, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: ShoppingCart,
    title: "For E-commerce",
    description: "Improve your cash flow and manage inventory better with instant access to your sales revenue. Offer a seamless one-click UPI checkout experience to your customers and reduce cart abandonment.",
    features: ["Instant revenue access", "One-click UPI checkout", "Inventory management support", "Cart abandonment reduction"]
  },
  {
    icon: Gamepad2,
    title: "For Gaming",
    description: "Build trust and loyalty with your gaming community. Provide instant payouts for tournament winnings and rewards. Enable frictionless in-app purchases for virtual goods and season passes.",
    features: ["Instant tournament payouts", "Frictionless in-app purchases", "Community trust building", "Virtual goods monetization"]
  },
  {
    icon: Code,
    title: "For SaaS & Subscriptions",
    description: "Automate your revenue stream. Easily integrate QuickPay to handle recurring UPI payments for your subscription plans. Our APIs make it simple to manage plans, upgrades, and downgrades.",
    features: ["Recurring payment automation", "Subscription management", "Easy plan upgrades", "Revenue stream optimization"]
  }
];

export const Solutions = () => {
  const handleContactSales = () => {
    // Placeholder for contact sales functionality
    console.log('Contact Sales clicked');
  };

  return (
    <section id="solutions" className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The Perfect Payment Solution for 
            <span className="text-gold-gradient"> Every Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions that understand your business needs and accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="card-premium group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
                    onClick={handleContactSales}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="card-premium text-center bg-gradient-to-r from-card to-muted/20 border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Enterprise Solutions
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Processing over ₹50 Lakhs a month? Get in touch for custom volume-based pricing, dedicated account management, and white-label solutions.
          </p>
          <Button 
            className="btn-primary"
            onClick={handleContactSales}
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};