import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CheckCircle, Clock, AlertTriangle, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { name: "API Gateway", status: "operational", uptime: "99.99%" },
  { name: "UPI Payments", status: "operational", uptime: "99.98%" },
  { name: "Instant Settlements", status: "operational", uptime: "99.97%" },
  { name: "Merchant Dashboard", status: "operational", uptime: "99.95%" },
  { name: "Developer Sandbox", status: "operational", uptime: "99.99%" }
];

const uptimeData = [
  { day: "Day 1-30", uptime: 99.99 },
  { day: "Day 31-60", uptime: 99.98 },
  { day: "Day 61-90", uptime: 99.97 }
];

export default function ApiStatus() {
  const allOperational = services.every(service => service.status === 'operational');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              QuickPay <span className="text-gold-gradient">Systems Status</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe in complete transparency. This page provides real-time and historical data on our system's performance. You can subscribe to receive updates via email.
            </p>
            
            {/* Overall Status */}
            <div className={`inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-lg mb-8 ${
              allOperational 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
              {allOperational ? (
                <>
                  <CheckCircle className="h-6 w-6 mr-3" />
                  All Systems Operational
                </>
              ) : (
                <>
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  System Issues Detected
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Service Status</h2>
          <div className="card-premium">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-4 ${
                      service.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="text-foreground font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Uptime: {service.uptime}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      service.status === 'operational' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {service.status === 'operational' ? 'Operational' : 'Degraded'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uptime Chart */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Past 90 Days Uptime</h2>
          <div className="card-premium">
            <div className="space-y-6">
              {uptimeData.map((period, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{period.day}</span>
                    <span className="text-green-400 font-semibold">{period.uptime}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      style={{ width: `${period.uptime}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Past Incidents</h2>
          <div className="card-premium text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No incidents reported</h3>
            <p className="text-muted-foreground">No incidents have been reported in the past 90 days.</p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about system updates and planned maintenance windows.
          </p>
          <Button size="lg" className="btn-primary">
            Subscribe to Updates
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}