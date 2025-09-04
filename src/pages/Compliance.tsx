import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Brain, Award, CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const securityFeatures = [
  {
    icon: Shield,
    title: "PCI DSS Compliant",
    description: "We are a PCI DSS (Payment Card Industry Data Security Standard) Level 1 Service Provider. This is the most stringent level of certification available in the payments industry, ensuring your data is handled with maximum security.",
    certification: "Level 1 Certified"
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data, both at rest and in transit, is encrypted using AES-256 encryption. All communication between your platform, our servers, and our banking partners is secured with 256-bit TLS encryption.",
    certification: "AES-256 & TLS 256-bit"
  },
  {
    icon: Award,
    title: "NPCI Adherence",
    description: "Our entire UPI payment infrastructure is built in strict accordance with all security protocols and guidelines mandated by the National Payments Corporation of India (NPCI).",
    certification: "NPCI Certified"
  },
  {
    icon: Brain,
    title: "AI-Powered Fraud Prevention",
    description: "Our proprietary AI-driven fraud detection engine analyzes every transaction in real-time. It identifies and blocks suspicious activities, protecting your business from financial losses and chargebacks.",
    certification: "Real-time Monitoring"
  }
];

const certifications = [
  "ISO 27001:2013 Certified",
  "SOC 2 Type II Compliant", 
  "GDPR Compliant",
  "RBI Guidelines Adherent",
  "NPCI Security Standards"
];

export default function Compliance() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Security You and Your Customers Can <span className="text-gold-gradient">Trust</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              At QuickPay, security isn't a feature; it's our foundation. We are committed to upholding the highest standards of security and regulatory compliance to protect your business, your data, and your customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="btn-primary">
                View Security Report
              </Button>
              <Button size="lg" variant="outline">
                Download Compliance Certificate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-premium group">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {feature.certification}
                      </div>
                    </div>
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

      {/* Certifications */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Industry <span className="text-gold-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to security and compliance is validated by leading industry certifications and regulatory bodies.
            </p>
          </div>
          
          <div className="card-premium">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-muted/50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Our Security Practices
          </h2>
          
          <div className="space-y-6">
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Protection</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  All sensitive data is encrypted at rest using AES-256 encryption
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Data in transit is protected with TLS 1.3 encryption
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Regular security audits and penetration testing
                </li>
              </ul>
            </div>
            
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">Infrastructure Security</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  24/7 security monitoring and incident response team
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Multi-factor authentication for all system access
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Segregated network architecture with intrusion detection
                </li>
              </ul>
            </div>
            
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">Compliance Monitoring</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Continuous compliance monitoring and reporting
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Regular third-party security assessments
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Incident response and breach notification procedures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Questions About Security?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security team is here to address any questions or concerns about our security practices and compliance standards.
          </p>
          <Button size="lg" className="btn-primary">
            Contact Security Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}