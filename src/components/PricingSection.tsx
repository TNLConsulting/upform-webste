import { motion } from "framer-motion";

const plans = [
  { sessions: "1", price: "22", per: "sessie", label: "Eén sessie" },
  { sessions: "5", price: "100", per: "€20/sessie", label: "5 beurtenkaart", popular: false },
  { sessions: "10", price: "180", per: "€18/sessie", label: "10 beurtenkaart", popular: true },
  { sessions: "25", price: "425", per: "€17/sessie", label: "25 beurtenkaart" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Investeer in jezelf
          </p>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Prijzen
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.sessions}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gradient-card border p-8 text-center flex flex-col ${
                plan.popular ? "border-primary glow-gold" : "border-gold"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-sans-body text-xs tracking-[0.15em] uppercase px-4 py-1">
                  Populair
                </span>
              )}
              <p className="font-sans-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {plan.label}
              </p>
              <div className="mb-2">
                <span className="font-serif-display text-5xl md:text-6xl font-light text-foreground">
                  €{plan.price}
                </span>
              </div>
              <p className="font-sans-body text-sm text-primary mb-8">{plan.per}</p>
              <a
                href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto px-6 py-3 font-sans-body text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Koop Nu
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 font-sans-body text-sm text-muted-foreground"
        >
          Na aankoop ontvang je een mail met instructies om je lessen in te boeken via{" "}
          <span className="text-primary">Sportbit</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
