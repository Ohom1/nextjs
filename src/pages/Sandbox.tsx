import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Code, Key, TestTube, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testScenarios = [
  {
    scenario: "Successful Payment",
    vpa: "success@quickpay",
    icon: CheckCircle,
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  },
  {
    scenario: "Failed Payment (Insufficient Funds)",
    vpa: "failure.if@quickpay",
    icon: XCircle,
    color: "text-red-400",
    bgColor: "bg-red-500/20"
  },
  {
    scenario: "Failed Payment (User Canceled)",
    vpa: "failure.uc@quickpay",
    icon: XCircle,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  }
];

const steps = [
  {
    icon: Key,
    title: "Get Your Keys",
    description: "Log in to your QuickPay dashboard and toggle to 'Test Mode' to generate your unique sandbox API keys."
  },
  {
    icon: TestTube,
    title: "Use Test Data",
    description: "Use our provided test UPI VPAs and payment amounts to simulate various scenarios."
  },
  {
    icon: Zap,
    title: "Go Live",
    description: "Once testing is complete, switch the API keys in your code to your live keys, and you're ready to accept real payments."
  }
];

export default function Sandbox() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Build, Test, and <span className="text-gold-gradient">Perfect</span> Your Integration.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Our fully-featured sandbox is a complete replica of our production environment. It allows you to simulate every type of transaction and API call without touching real money, ensuring a flawless launch.
            </p>
          </div>
        </div>
      </section>

      {/* What is Sandbox */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-premium text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">What is the Sandbox?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The QuickPay Sandbox is a secure testing environment that allows you to simulate payments, refunds, and error scenarios. All data is completely isolated from the live environment, giving you the freedom to test thoroughly without any risk to real transactions or customer data.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Getting Started in <span className="text-gold-gradient">3 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="card-premium text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-gold-gradient mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Test Scenarios */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Test Scenarios
          </h2>
          <div className="space-y-4">
            {testScenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <div key={index} className="card-premium">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${scenario.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className={`h-6 w-6 ${scenario.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {scenario.scenario}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Test VPA: <code className="bg-muted px-2 py-1 rounded">{scenario.vpa}</code>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 card-premium bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              💡 Pro Tip
            </h3>
            <p className="text-muted-foreground">
              Use different test amounts to simulate various scenarios. For example, ₹1 will always succeed, ₹2 will simulate insufficient funds, and ₹3 will simulate user cancellation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Start Testing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access your sandbox environment and start building your integration today. Our comprehensive testing tools will help you launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Access Sandbox
            </Button>
            <Button size="lg" variant="outline">
              View API Docs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}