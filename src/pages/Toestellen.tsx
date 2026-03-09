import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const reformerImages = [
  "/images/reformer-01.jpg",
  "/images/reformer-02.jpg",
  "/images/reformer-03.jpg",
  "/images/reformer-04.jpg",
  "/images/reformer-05.jpg",
  "/images/reformer-06.jpg",
  "/images/reformer-07.jpg",
  "/images/reformer-08.jpg",
  "/images/reformer-09.jpg",
  "/images/reformer-10.jpg",
];

const features = [
  "Gebouwd voor dagelijks intensief professioneel gebruik",
  "Strak minimalistisch design met duurzame materialen",
  "Soepele, stille loop — ideaal voor studio's en trainers",
  "Personaliseerbaar in kleur en afwerking",
  "Belgische expertise, Europese levering",
  "Eén model, perfect uitgewerkt — geen compromissen",
];

const Toestellen = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/reformer-05.jpg"
            alt="Upform Reformer — premium pilates toestel"
            className="w-full h-full object-cover"
            style={{ imageOrientation: "from-image" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
          >
            Premium Reformers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif-display text-6xl md:text-8xl font-light tracking-wide mb-6"
          >
            <span className="text-gradient-gold">Upform</span>
            <br />
            <span className="text-foreground">Reformer</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-px line-gold mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-sans-body text-lg text-muted-foreground max-w-xl mx-auto font-light"
          >
            Professionele pilates reformers voor studio's en trainers die geen compromissen sluiten.
          </motion.p>
        </div>
      </section>

      {/* Over de Reformer */}
      <section className="py-24 md:py-32 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary">
                De Upform Reformer
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl font-light text-foreground">
                Eén toestel,{" "}
                <span className="text-primary">perfect uitgewerkt</span>
              </h2>
              <div className="w-16 h-px line-gold" />
              <p className="font-sans-body text-muted-foreground leading-relaxed">
                Bij Upform geloven we dat een pilates reformer meer is dan een toestel — het is een investering 
                in kwaliteit, design en prestaties. Onze premium reformers zijn ontworpen voor intensief 
                professioneel gebruik en combineren strakke lijnen met duurzame materialen.
              </p>
              <p className="font-sans-body text-muted-foreground leading-relaxed">
                Wij geloven in focus: één model, perfect uitgewerkt. Optioneel bieden we personalisatie 
                in kleur en afwerking, zodat jouw reformer bij jouw studio past.
              </p>
              <ul className="space-y-3 pt-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-sans-body text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
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
                  src="/images/reformer-02.jpg"
                  alt="Upform Reformer detail"
                  className="w-full aspect-[3/4] object-cover"
                  style={{ imageOrientation: "from-image" }}
                  loading="lazy"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src="/images/reformer-03.jpg"
                  alt="Upform Reformer in gebruik"
                  className="w-full aspect-[3/4] object-cover"
                  style={{ imageOrientation: "from-image" }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prijs banner */}
      <section className="py-16 bg-card border-y border-gold">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Investering
            </p>
            <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-4">
              Prijs op Aanvraag
            </h2>
            <p className="font-sans-body text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Elk project is uniek. Contacteer ons voor een persoonlijk voorstel op maat van jouw studio, 
              inclusief eventuele kleur- en afwerkingsopties.
            </p>
            <a
              href="mailto:tom@upform.be"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 glow-gold"
            >
              Vraag een Offerte Aan
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fotogalerij */}
      <section className="py-24 md:py-32 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Galerij
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Ontdek de Reformer
            </h2>
            <div className="w-16 h-px line-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {reformerImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Upform Reformer ${i + 1}`}
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                  style={{ imageOrientation: "from-image" }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ervaar in Studio */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/reformer-04.jpg"
            alt="Upform Studio sfeerbeeld"
            className="w-full h-full object-cover"
            style={{ imageOrientation: "from-image" }}
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
              Test voor je koopt
            </p>
            <h2 className="font-serif-display text-4xl md:text-6xl font-light text-foreground mb-6">
              Ervaar het Zelf
            </h2>
            <div className="w-16 h-px line-gold mx-auto mb-8" />
            <p className="font-sans-body text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              In onze Upform Studio, gevestigd binnen het sportmedisch centrum Uprise in Haacht, 
              kan je de reformer zelf zien, voelen en uitproberen. Wij ontvangen je op afspraak, 
              zodat we alle tijd hebben voor jouw vragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:tom@upform.be"
                className="px-10 py-4 bg-primary text-primary-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 glow-gold"
              >
                Maak een Afspraak
              </a>
              <a
                href="/#about"
                className="px-10 py-4 border border-primary/30 text-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                Meer over de Studio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Toestellen;
