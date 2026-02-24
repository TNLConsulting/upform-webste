import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Over Ons", href: "#about" },
  { label: "Lessen", href: "#classes" },
  { label: "Uurrooster", href: "#schedule" },
  { label: "Prijzen", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gold"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-serif-display text-2xl tracking-[0.2em] text-primary">
          UPFORM
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 border border-primary text-primary text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Boek Nu
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-gold overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://uprise.sportbitapp.nl/web/be/registreren/lidmaatschap"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 border border-primary text-primary text-sm tracking-[0.15em] uppercase text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Boek Nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
