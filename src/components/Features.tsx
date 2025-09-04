import { Zap, Wand2, Code, Shield, Tag, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Remittance",
    description: "Go from T+2 to T+0. Our powerful infrastructure ensures every successful UPI transaction is settled to your bank account instantly, 24/7, including weekends and bank holidays."
  },
  {
    icon: Wand2,
    title: "Seamless Onboarding",
    description: "Forget cumbersome paperwork. Onboard digitally in under 5 minutes with our fully automated KYC process. Sign up, link your bank account, and you're ready to accept payments."
  },
  {
    icon: Code,
    title: "Developer-First APIs",
    description: "Integrate with ease using our clean, well-documented REST APIs. We provide robust SDKs for all major platforms, detailed guides, and a sandbox environment for stress-free testing."
  },
  {
    icon: Shield,
    title: "Unbreachable Security",
    description: "Your security is our priority. We are PCI-DSS compliant and use tokenization and end-to-end encryption to ensure every transaction is secure. Our AI-powered fraud detection system works 24/7."
  },
  {
    icon: Tag,
    title: "Transparent & Simple Pricing",
    description: "No surprises, ever. We offer a simple, pay-as-you-go pricing model with no setup fees, no annual maintenance charges, and no hidden costs. We only make money when you do."
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Get help whenever you need it. Our dedicated support team is available around the clock via email, chat, and phone to help you with any technical or operational queries."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="text-gold-gradient">QuickPay</span> is a Game-Changer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for modern businesses that refuse to wait. Experience the difference of instant settlements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-premium group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};