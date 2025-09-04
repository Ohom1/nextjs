import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { RotateCcw, Clock, CreditCard, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const refundSteps = [
  {
    step: "1",
    title: "Initiate Refund",
    description: "Log into your QuickPay Dashboard and navigate to the transaction you want to refund.",
    icon: CreditCard
  },
  {
    step: "2", 
    title: "Select Amount",
    description: "Choose between full or partial refund and confirm the refund amount.",
    icon: RotateCcw
  },
  {
    step: "3",
    title: "Processing",
    description: "QuickPay processes the refund instantly and sends funds back to the customer's account.",
    icon: Clock
  },
  {
    step: "4",
    title: "Confirmation",
    description: "Both you and your customer receive confirmation of the successful refund.",
    icon: CheckCircle
  }
];

const faqs = [
  {
    question: "How long does it take for refunds to reflect in the customer's account?",
    answer: "While QuickPay processes refunds instantly, the time for funds to appear in the customer's account depends on their bank's processing times, typically 2-5 business days."
  },
  {
    question: "Are there any fees for processing refunds?",
    answer: "QuickPay does not charge additional fees for processing refunds. However, the original transaction processing fee is not returned when a transaction is refunded."
  },
  {
    question: "Can I process partial refunds?",
    answer: "Yes, you can process both full and partial refunds through your QuickPay Dashboard or via our Refunds API."
  },
  {
    question: "Is there a time limit for processing refunds?",
    answer: "You can process refunds for any successful transaction. However, we recommend processing refunds within 180 days of the original transaction for best customer experience."
  }
];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <RotateCcw className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Merchant <span className="text-gold-gradient">Refund Policy</span>
            </h1>
            <div className="bg-muted/50 rounded-xl p-4 inline-block mb-8">
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> September 1, 2025
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding how refunds work with QuickPay's instant settlement system.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-premium">
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QuickPay provides merchants with the functionality to process refunds to their customers for transactions processed through our gateway. The decision to grant a refund remains solely with the merchant, and we facilitate the technical process of returning funds to customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our refund system is designed to be as seamless as our payment processing, ensuring that your customers receive their refunds promptly while maintaining full transparency throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* How to Process Refunds */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How to Process <span className="text-gold-gradient">Refunds</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to initiate refunds for your customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {refundSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="card-premium text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gold-gradient mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Refund Processing Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Refund Processing <span className="text-gold-gradient">Details</span>
          </h2>
          
          <div className="space-y-8">
            <div className="card-premium">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Instant Processing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once a refund is initiated by the merchant, QuickPay processes it instantly. The funds are sent back to the customer's original source bank account immediately through our real-time processing system.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-premium">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Bank Processing Times
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The time it takes for the refund to reflect in the customer's account is subject to their bank's processing times, typically within 2-5 business days. This is beyond QuickPay's control and varies by banking institution.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-premium">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Fee Policy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The original transaction processing fee is not returned when a transaction is refunded. QuickPay does not charge any additional fees to process a refund, keeping the process simple and transparent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-premium bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Automated Refund Processing
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Integrate refund functionality directly into your application using our Refunds API. Automate the refund process for better customer experience and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                View Refunds API
              </Button>
              <Button size="lg" variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}