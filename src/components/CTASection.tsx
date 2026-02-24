import { motion } from "framer-motion";
import heroImage from "@/assets/hero-studio.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Upform Studio achtergrond"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Klaar om te beginnen?
          </p>
          <h2 className="font-serif-display text-4xl md:text-7xl font-light text-foreground mb-6">
            Boek Je Eerste Les
          </h2>
          <div className="w-16 h-px line-gold mx-auto mb-8" />
          <p className="font-sans-body text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Registreer je via Sportbit, koop je beurtenkaart en boek je eerste reformer pilates sessie. 
            We kijken ernaar uit je te verwelkomen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-primary-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 glow-gold"
            >
              Registreer & Boek
            </a>
            <a
              href="https://uprise.sportbitapp.nl/cbm/proeflesplanner/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-primary/30 text-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              Gratis Proefles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
