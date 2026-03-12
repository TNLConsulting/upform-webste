'use client';
import { motion } from "framer-motion";
import reformerDetail from "@/assets/reformer-detail.jpg";
import pilatesAction from "@/assets/pilates-action.jpg";

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
            Welkom
          </p>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Over Upform Studio
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
              Waar kracht <span className="text-primary">elegantie</span> ontmoet
            </h3>
            <p className="font-sans-body text-muted-foreground leading-relaxed">
              Bij Upform Studio geloven we dat pilates meer is dan een workout — het is een investering in jezelf.
              In onze warme, intieme studio bieden we reformer pilates aan in kleine groepen van maximaal 8 personen.
            </p>
            <p className="font-sans-body text-muted-foreground leading-relaxed">
              Onze lessen van 50 minuten zijn ontworpen om je lichaam uit te dagen, je houding te verbeteren 
              en je sterker te maken — op jouw tempo, met persoonlijke begeleiding.
            </p>
            <p className="font-sans-body text-muted-foreground leading-relaxed">
              Reserveren is verplicht, zodat we iedereen de aandacht kunnen geven die je verdient.
              Exclusiviteit en kwaliteit staan centraal.
            </p>
            <div className="pt-4">
              <a
                href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-primary text-primary font-sans-body text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Start Vandaag
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
                src={reformerDetail.src}
                alt="Reformer pilates machine in Upform Studio"
                className="w-full aspect-[3/4] object-cover"
                style={{ imageOrientation: "from-image" }}
                loading="lazy"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src={pilatesAction.src}
                alt="Reformer pilates sessie bij Upform Studio"
                className="w-full aspect-[3/4] object-cover"
                style={{ imageOrientation: "from-image" }}
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
