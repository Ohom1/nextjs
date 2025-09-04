import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const sections = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    content: "By creating a QuickPay account or using our services, you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, you may not use our services. These Terms constitute a legally binding agreement between you and QuickPay Technologies Pvt. Ltd."
  },
  {
    id: "service-description", 
    title: "2. Description of Service",
    content: "QuickPay provides payment processing services that enable merchants to accept UPI payments with instant settlement capabilities. Our services include payment gateway integration, real-time transaction processing, instant fund settlement, merchant dashboard, and API access for developers."
  },
  {
    id: "account-requirements",
    title: "3. Your QuickPay Account", 
    content: "You must be at least 18 years old and legally capable of entering into contracts. You must provide accurate, complete, and current information during registration and maintain the accuracy of your account information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
  },
  {
    id: "prohibited-activities",
    title: "4. Prohibited Businesses and Activities",
    content: "You agree not to use our services for any illegal activities or businesses listed on our Restricted Businesses list, including but not limited to: gambling or gaming (except licensed operators), adult content, illegal substances, money laundering, fraudulent activities, or any business that violates applicable laws or regulations."
  },
  {
    id: "fees-payments",
    title: "5. Fees and Payments",
    content: "You agree to pay the fees for services as described on our Pricing page. Fees may include transaction fees, processing fees, and any applicable taxes. We reserve the right to change our fee structure with 30 days' notice. All fees are non-refundable unless otherwise specified in our Refund Policy."
  },
  {
    id: "compliance",
    title: "6. Compliance and KYC",
    content: "You must comply with all applicable laws and regulations, including but not limited to anti-money laundering (AML) and know your customer (KYC) requirements. You agree to provide any documentation or information we may reasonably request for compliance purposes."
  },
  {
    id: "termination",
    title: "7. Termination",
    content: "We may suspend or terminate your account immediately if you violate these Terms, engage in prohibited activities, fail to comply with applicable laws, or if we are required to do so by law or regulation. You may close your account at any time by contacting our support team."
  },
  {
    id: "liability",
    title: "8. Limitation of Liability", 
    content: "QuickPay will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities. Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the fees paid by you in the 12 months preceding the claim."
  },
  {
    id: "governing-law",
    title: "9. Governing Law and Jurisdiction",
    content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, India."
  },
  {
    id: "modifications",
    title: "10. Modifications to Terms",
    content: "We reserve the right to modify these Terms at any time. We will provide notice of material changes by email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated Terms."
  }
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              QuickPay <span className="text-gold-gradient">Terms of Service</span>
            </h1>
            <div className="bg-muted/50 rounded-xl p-4 inline-block mb-8">
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> September 1, 2025
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Please read these Terms of Service carefully before using our payment processing services.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card-premium bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Important Legal Agreement</h3>
                <p className="text-muted-foreground">
                  These Terms of Service constitute a legally binding agreement. By using QuickPay services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="card-premium">
            <h2 className="text-xl font-semibold text-foreground mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <a 
                  key={index}
                  href={`#${section.id}`}
                  className="text-primary hover:text-secondary transition-colors p-2 rounded hover:bg-muted/50"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} id={section.id} className="card-premium">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed">
                  {section.content.split('. ').map((sentence, sentenceIndex) => (
                    <p key={sentenceIndex} className="mb-4">
                      {sentence}{sentence.endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Key <span className="text-gold-gradient">Points</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <Scale className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Legal Compliance</h3>
              <p className="text-sm text-muted-foreground">All activities must comply with applicable laws and regulations</p>
            </div>
            
            <div className="card-premium text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Account Security</h3>
              <p className="text-sm text-muted-foreground">You are responsible for maintaining account security</p>
            </div>
            
            <div className="card-premium text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <FileText className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fair Usage</h3>
              <p className="text-sm text-muted-foreground">Services must be used for legitimate business purposes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="card-premium bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our legal team is available to clarify any questions you may have about these Terms of Service.
            </p>
            <p className="text-primary font-semibold">
              legal@quickpay.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}