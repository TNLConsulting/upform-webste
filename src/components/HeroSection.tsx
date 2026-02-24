import { motion } from "framer-motion";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Upform Studio reformer pilates studio met warme sfeerverlichting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          Reformer Pilates bij Uprise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wide mb-6"
        >
          <span className="text-gradient-gold">Upform</span>
          <br />
          <span className="text-foreground">Studio</span>
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
          className="font-sans-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light"
        >
          Daag je lichaam uit en verleg je grenzen in onze exclusieve reformer pilates studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-primary-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 glow-gold"
          >
            Boek Je Les
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-primary/30 text-foreground font-sans-body text-sm tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ontdek Meer
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
