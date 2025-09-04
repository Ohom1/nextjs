import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Startup",
    price: "FREE",
    period: "",
    description: "Perfect for testing and small businesses",
    features: [
      "₹1,00,000 free monthly transactions",
      "0% transaction fee on free tier",
      "Basic dashboard & analytics",
      "Email support",
      "Standard API access",
      "Developer documentation"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Growth",
    price: "1%",
    period: "per transaction",
    description: "Scale your business without limits",
    features: [
      "Unlimited transactions",
      "1% flat transaction fee",
      "Advanced analytics & reporting",
      "Priority email & chat support",
      "Webhook notifications",
      "Custom payment flows",
      "Fraud protection",
      "Multi-bank settlement"
    ],
    cta: "Choose Growth",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large businesses",
    features: [
      "Volume-based pricing",
      "Dedicated account manager",
      "White-label solutions",
      "24/7 phone support",
      "Custom API endpoints",
      "Advanced security features",
      "SLA guarantees",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  const handlePlanSelect = (planName: string) => {
    if (planName === "Enterprise") {
      // Contact sales functionality
      console.log('Contact Sales clicked for Enterprise plan');
    } else {
      // Sign up functionality
      console.log(`Selected plan: ${planName}`);
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple & <span className="text-gold-gradient">Fair Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No setup costs. No surprises. Pay only for what you use.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-premium relative ${
                plan.popular 
                  ? 'border-primary shadow-gold scale-105 lg:scale-110' 
                  : 'hover:scale-105'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-gold-gradient">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular ? 'btn-primary' : 'btn-outline'
                }`}
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.cta}
                {plan.name === 'Growth' && <Zap className="ml-2 h-4 w-4" />}
                {plan.name === 'Enterprise' && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-muted/20 rounded-2xl">
          <p className="text-muted-foreground mb-2">
            <strong>All plans include:</strong> Industry-leading security, 99.9% uptime SLA, 
            instant settlements, and comprehensive API documentation.
          </p>
          <p className="text-sm text-muted-foreground">
            Need help choosing? <a href="#" className="text-primary hover:underline">Talk to our experts</a>
          </p>
        </div>
      </div>
    </section>
  );
};