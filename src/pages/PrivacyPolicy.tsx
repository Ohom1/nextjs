import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: "This Privacy Policy describes how QuickPay Technologies Pvt. Ltd. ('we', 'our', or 'us') collects, uses, and protects your personal information when you use our payment processing services. We are committed to protecting your privacy and ensuring the security of your personal data."
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: [
      {
        subtitle: "Personal Data",
        details: "We collect personal information including your name, email address, phone number, and information required for our Know Your Customer (KYC) process such as PAN details, bank account information, and identity verification documents."
      },
      {
        subtitle: "Transactional Data", 
        details: "Information about transactions processed through our payment gateway, including transaction amounts, timestamps, merchant details, and payment method information."
      },
      {
        subtitle: "Technical Data",
        details: "We automatically collect technical information including IP addresses, browser type and version, device information, operating system, and usage data to improve our services and security."
      }
    ]
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      "To provide, operate, and maintain our payment processing services",
      "To process transactions and facilitate instant settlements",
      "To comply with legal and regulatory obligations including Anti-Money Laundering (AML) and KYC requirements",
      "For fraud prevention, security monitoring, and risk assessment",
      "To provide customer support and respond to your inquiries",
      "To improve our services and develop new features"
    ]
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing and Disclosure",
    content: "We do not sell your personal data to third parties. We may share your information with banking partners and payment networks to facilitate transactions, with law enforcement agencies as required by law, with trusted third-party service providers under strict confidentiality agreements, and with regulatory authorities for compliance purposes."
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: "We implement robust technical and organizational security measures to protect your personal data. This includes encryption of data both in transit and at rest, secure data centers with access controls, regular security audits and assessments, employee training on data protection, and incident response procedures for data breaches."
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: "You have the right to access your personal information, request corrections to inaccurate data, request deletion of your personal data (subject to legal and regulatory requirements), object to certain processing activities, and withdraw consent where processing is based on consent."
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: "For any privacy-related questions, concerns, or requests, please contact our Data Protection Officer at privacy@quickpay.com or write to us at QuickPay Technologies Pvt. Ltd., Compliance Department, [Address], India."
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              QuickPay <span className="text-gold-gradient">Privacy Policy</span>
            </h1>
            <div className="bg-muted/50 rounded-xl p-4 inline-block mb-8">
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> September 1, 2025
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
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

      {/* Privacy Policy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} id={section.id} className="card-premium">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                
                {Array.isArray(section.content) ? (
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {typeof item === 'string' ? (
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        ) : (
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                              {item.subtitle}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.details}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    {section.content.split(', ').map((item, itemIndex) => (
                      <p key={itemIndex}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Privacy <span className="text-gold-gradient">Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <Lock className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data Protection</h3>
              <p className="text-sm text-muted-foreground">End-to-end encryption and secure data handling</p>
            </div>
            
            <div className="card-premium text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <Eye className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">Clear information about how we use your data</p>
            </div>
            
            <div className="card-premium text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Your Rights</h3>
              <p className="text-sm text-muted-foreground">Full control over your personal information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="card-premium bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Have Privacy Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our Data Protection Officer is here to help with any privacy-related questions or concerns you may have.
            </p>
            <p className="text-primary font-semibold">
              privacy@quickpay.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}