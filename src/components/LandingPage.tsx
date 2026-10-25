'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-warm-cream flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center justify-center px-2 md:px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h1 className="font-serif-display text-6xl md:text-7xl lg:text-8xl font-light tracking-widest text-black mb-4">
            UPFORM
          </h1>
          <p className="font-sans-body text-sm md:text-base tracking-[0.25em] uppercase text-muted-foreground font-light">
            Move with Purpose
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 px-2 md:px-0">
          {/* Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <Link href="/studio" className="block h-full">
              <div className="relative overflow-hidden rounded-sm h-96 md:h-[500px] lg:h-[600px]">
                <Image
                  src="/images/landing-studio.jpg"
                  alt="Upform Studio — Reformer Pilates Classes"
                  fill
                  priority={false}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="text-white">
                    <p className="font-sans-body text-sm tracking-[0.15em] uppercase mb-3 font-light opacity-90">
                      Classes · Academy · Corporate
                    </p>
                    <div className="flex items-center gap-2 font-sans-body text-base tracking-[0.1em] uppercase">
                      Discover <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
                {/* Static Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h2 className="font-serif-display text-3xl md:text-4xl font-light tracking-wide mb-2">
                    Studio
                  </h2>
                  <p className="font-sans-body text-xs md:text-sm tracking-[0.15em] uppercase font-light opacity-90">
                    Classes · Academy · Corporate
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Reformers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group cursor-pointer"
          >
            <Link href="/toestellen" className="block h-full">
              <div className="relative overflow-hidden rounded-sm h-96 md:h-[500px] lg:h-[600px]">
                <Image
                  src="/images/landing-reformer.jpg"
                  alt="Upform Reformers — Premium Pilates Equipment"
                  fill
                  priority={false}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="text-white">
                    <p className="font-sans-body text-sm tracking-[0.15em] uppercase mb-3 font-light opacity-90">
                      Shop · Showroom · Studio Projects
                    </p>
                    <div className="flex items-center gap-2 font-sans-body text-base tracking-[0.1em] uppercase">
                      Explore <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
                {/* Static Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h2 className="font-serif-display text-3xl md:text-4xl font-light tracking-wide mb-2">
                    Reformers
                  </h2>
                  <p className="font-sans-body text-xs md:text-sm tracking-[0.15em] uppercase font-light opacity-90">
                    Shop · Showroom · Studio Projects
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer - minimal */}
      <footer className="px-4 py-4 text-center border-t border-border/30">
        <p className="font-sans-body text-xs text-muted-foreground tracking-[0.1em]">
          © 2026 Upform. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
