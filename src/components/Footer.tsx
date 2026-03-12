'use client';
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

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
              Exclusieve reformer pilates studio.
              <br />
              Waar kracht elegantie ontmoet.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/upformstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/upformstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:info@upformstudio.be"
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
              {[
                { label: "Over Ons", href: "/#about" },
                { label: "Lessen", href: "/#classes" },
                { label: "Uurrooster", href: "/#schedule" },
                { label: "Prijzen", href: "/#pricing" },
                { label: "Toestellen", href: "/toestellen" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-sans-body text-sm text-muted-foreground">
              <li>
                <a href="mailto:tom@upform.be" className="hover:text-primary transition-colors">
                  tom@upform.be
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <span>Stationsstraat 96<br />3150 Haacht</span>
                  <a
                    href="https://maps.google.com/?q=Stationsstraat+96,+3150+Haacht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors mt-1 tracking-wide"
                  >
                    <svg width="12" height="16" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 22 12 22S24 21 24 12C24 5.373 18.627 0 12 0z" fill="#EA4335"/>
                      <circle cx="12" cy="12" r="5" fill="white"/>
                    </svg>
                    Bekijk op Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px line-gold mb-8" />

        <p className="text-center font-sans-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Upform Studio. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
