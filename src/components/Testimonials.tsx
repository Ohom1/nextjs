import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Anjali Sharma",
    title: "Founder",
    company: "BharatKart",
    image: "AS",
    quote: "QuickPay has been a lifesaver for our cash flow. Getting our sales revenue instantly means we can pay our suppliers and reinvest in growth without delay. The integration was surprisingly simple.",
    rating: 5
  },
  {
    name: "Rohan Verma",
    title: "Indie App Developer",
    company: "Independent",
    image: "RV",
    quote: "As a solo developer, getting paid quickly is everything. QuickPay's instant settlement means I don't have to chase payments or worry about finances. It just works.",
    rating: 5
  },
  {
    name: "Priya Singh",
    title: "Head of Operations",
    company: "GameSphere",
    image: "PS",
    quote: "Our players love the instant prize payouts. It has significantly increased engagement and trust in our platform. QuickPay's reliable API is the backbone of our competitive gaming ecosystem.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by India's 
            <span className="text-gold-gradient"> Fastest-Growing</span> Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their cash flow with QuickPay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4 group-hover:scale-110 transition-transform">
                    {testimonial.image}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-muted-foreground">Happy Businesses</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2 group-hover:scale-110 transition-transform">
              ₹10Cr+
            </div>
            <div className="text-muted-foreground">Processed Monthly</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2 group-hover:scale-110 transition-transform">
              99.9%
            </div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2 group-hover:scale-110 transition-transform">
              &lt;1s
            </div>
            <div className="text-muted-foreground">Settlement Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};