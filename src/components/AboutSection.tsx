import { motion } from "framer-motion";
import studioRef from "@/assets/studio-reference.jpg";
import reformerDetail from "@/assets/reformer-detail.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Welkom bij Upform
          </p>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Reformer Pilates
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-serif-display text-3xl md:text-4xl font-light text-foreground">
              Nieuw bij <span className="text-primary">Uprise</span>
            </h3>
            <p className="font-sans-body text-muted-foreground leading-relaxed">
              Vanaf september breiden we bij Uprise ons aanbod uit met Reformer Pilates. 
              Ben jij klaar om je lichaam op een nieuwe manier uit te dagen en grenzen te verleggen?
            </p>
            <p className="font-sans-body text-muted-foreground leading-relaxed">
              Onze lessen duren 50 minuten met maximaal 8 personen per sessie, 
              zodat je de persoonlijke aandacht krijgt die je verdient. 
              Reserveren is verplicht — exclusiviteit gegarandeerd.
            </p>
            <div className="pt-4">
              <a
                href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-primary text-primary font-sans-body text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Registreer Nu
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src={studioRef}
                alt="Upform Studio interieur"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src={reformerDetail}
                alt="Reformer pilates machine detail"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
