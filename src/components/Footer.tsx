import { Zap, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'UPI Payments', href: '#' },
    { name: 'Payment Links', href: '#' },
    { name: 'Smart Checkout', href: '#' },
    { name: 'Analytics Dashboard', href: '#' }
  ],
  developers: [
    { name: 'API Documentation', href: '#' },
    { name: 'Integration Guides', href: '/integration-guides' },
    { name: 'API Status', href: '/api-status' },
    { name: 'Sandbox', href: '/sandbox' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Security & Compliance', href: '/compliance' }
  ]
};

export const Footer = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  const handleContactClick = (method: string) => {
    console.log(`Contact via ${method}`);
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold">
                <span className="text-gold-gradient">Quick</span>
                <span className="text-foreground">Pay</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Instant Payments, Infinite Possibilities. 
              Empowering Indian businesses with T+0 UPI settlements and seamless payment experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => handleContactClick('email')}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                support@quickpay.in
              </button>
              <button 
                onClick={() => handleContactClick('phone')}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 80XXX XXXXX
              </button>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">
                  Bengaluru, Karnataka<br />
                  India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg flex items-center justify-center group"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg flex items-center justify-center group"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialClick('GitHub')}
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg flex items-center justify-center group"
              >
                <Github className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div id="developers">
            <h3 className="text-foreground font-semibold mb-4">Developers</h3>
            <ul className="space-y-3">
              {footerLinks.developers.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 QuickPay Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                All systems operational
              </span>
              <span>•</span>
              <span>PCI-DSS Compliant</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};