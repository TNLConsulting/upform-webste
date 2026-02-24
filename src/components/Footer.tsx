import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-gradient-warm border-t border-gold">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif-display text-2xl tracking-[0.2em] text-primary mb-4">
              UPFORM
            </h3>
            <p className="font-sans-body text-sm text-muted-foreground leading-relaxed mb-4">
              Reformer Pilates bij Uprise.
              <br />
              We rise by lifting others.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Uprise.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/uprise.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@uprise.be"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {["Over Ons", "Lessen", "Uurrooster", "Prijzen"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                    className="font-sans-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.uprise.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Uprise.be
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-sans-body text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@uprise.be" className="hover:text-primary transition-colors">
                  info@uprise.be
                </a>
              </li>
              <li>
                <a
                  href="https://www.uprise.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.uprise.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px line-gold mb-8" />

        <p className="text-center font-sans-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Upform Studio — Reformer Pilates bij Uprise. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
