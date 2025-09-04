export const SocialProof = () => {
  const companies = [
    'BharatKart',
    'GameSphere', 
    'SaaSWala',
    'UrbanBasket',
    'CodeShip',
    'TechFlow'
  ];

  return (
    <section className="py-12 px-4 bg-muted/10 border-b border-border">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            Powering payments for India's fastest-growing businesses
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 font-semibold text-sm md:text-base group cursor-pointer"
              >
                <div className="bg-muted/50 hover:bg-muted border border-border rounded-lg px-4 py-2 group-hover:border-primary/30 transition-all duration-300">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};