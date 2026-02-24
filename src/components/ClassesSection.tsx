import { motion } from "framer-motion";
import pilatesAction from "@/assets/pilates-action.jpg";

const classes = [
  {
    title: "Basic",
    subtitle: "Alle niveaus",
    description:
      "Focus op het leren kennen van de machine en de basisoefeningen. Ook voor diegene die al enige ervaring hebben — optimaliseer je basisoefeningen of krijg opties naar moeilijkere varianten.",
    features: ["Kennismaking met de reformer", "Basisoefeningen", "Opties naar moeilijker niveau", "Max. 8 personen"],
  },
  {
    title: "Intermediate",
    subtitle: "Ervaren",
    description:
      "Je hebt al ervaring met de machine en basisoefeningen, waardoor we een stap verder kunnen gaan in de oefeningen met optie tot geavanceerde opties.",
    features: ["Geavanceerde oefeningen", "Meer uitdaging", "Persoonlijke opties", "Max. 8 personen"],
  },
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-card border border-gold p-8 md:p-10 flex flex-col"
            >
              <p className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                {cls.subtitle}
              </p>
              <h3 className="font-serif-display text-3xl md:text-4xl font-light text-foreground mb-4">
                {cls.title}
              </h3>
              <div className="w-10 h-px line-gold mb-6" />
              <p className="font-sans-body text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {cls.description}
              </p>
              <ul className="space-y-3 mb-8">
                {cls.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 border border-primary/30 text-primary font-sans-body text-sm tracking-[0.15em] uppercase text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Boek Les
              </a>
            </motion.div>
          ))}

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden"
          >
            <img
              src={pilatesAction}
              alt="Reformer pilates in actie"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                Privé lessen
              </p>
              <h3 className="font-serif-display text-2xl font-light text-foreground mb-3">
                Solo, Duo of Trio
              </h3>
              <p className="font-sans-body text-sm text-muted-foreground">
                Interesse? Stuur een mail naar{" "}
                <a href="mailto:info@uprise.be" className="text-primary hover:underline">
                  info@uprise.be
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
