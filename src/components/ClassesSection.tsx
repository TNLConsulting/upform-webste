'use client';
import { motion } from "framer-motion";

const features = [
  "Toegankelijk voor absolute beginners én gevorderden",
  "Persoonlijke begeleiding in kleine groepen van max. 8 personen",
  "Techniek en uitdaging op jouw niveau",
  "50 minuten intensieve, doordachte sessie",
];

const ClassesSection = () => {
  return (
    <section id="classes" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Ons Aanbod
          </p>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Onze Lessen
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        {/* Single class card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-gradient-card border border-gold p-10 md:p-14 mb-12"
        >
          <p className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-3 text-center">
            Voor iedereen
          </p>
          <h3 className="font-serif-display text-4xl md:text-5xl font-light text-foreground mb-4 text-center">
            Reformer Pilates
          </h3>
          <div className="w-16 h-px line-gold mx-auto mb-8" />
          <p className="font-sans-body text-muted-foreground leading-relaxed mb-4 text-center max-w-xl mx-auto">
            Onze lessen zijn ontworpen voor <span className="text-foreground">elk niveau</span> — of je nu 
            nooit op een reformer hebt gestaan of al jarenlang traint. Elke oefening wordt aangeboden 
            met varianten, zodat jij precies op jouw tempo en capaciteit werkt.
          </p>
          <p className="font-sans-body text-muted-foreground leading-relaxed mb-10 text-center max-w-xl mx-auto">
            Je hoeft geen ervaring te hebben. Je hoeft niet fit te zijn om te beginnen. 
            Je hebt alleen de wil nodig om je lichaam beter te leren kennen — de rest doen wij.
          </p>
          <ul className="space-y-4 max-w-md mx-auto">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-foreground/80 font-sans-body">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Private lessons callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gradient-card border border-gold p-8 md:p-10 text-center"
        >
          <p className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Op maat
          </p>
          <h3 className="font-serif-display text-2xl md:text-3xl font-light text-foreground mb-4">
            Privé Lessen — Solo, Duo of Trio
          </h3>
          <p className="font-sans-body text-sm text-muted-foreground max-w-lg mx-auto">
            Wil je liever een volledig gepersonaliseerde sessie? Of een privé groepsles? 
            Neem contact met ons op en we plannen het samen in.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
