import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute bottom-0 left-0 right-0 h-40 section-fade" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-gradient-gold mb-6"
        >
          CJC RACE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-body max-w-2xl mx-auto mb-10 font-light tracking-wide"
        >
          Race, Earn & Conquer — The Future of Horse Racing on Blockchain
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.cjcrace.io/download"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground font-display text-sm tracking-widest px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase glow-gold"
          >
            Play Now
          </a>
          <a
            href="https://market.cjcrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card text-foreground font-display text-sm tracking-widest px-8 py-3.5 rounded-lg hover:border-primary/50 transition-colors uppercase"
          >
            Marketplace
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
