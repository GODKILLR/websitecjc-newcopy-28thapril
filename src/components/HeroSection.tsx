import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: ref });
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Animated horse silhouettes
  const HorseSilhouette = ({ delay = 0, speed = 1, scale = 1, bottom = 0 }: { delay?: number; speed?: number; scale?: number; bottom?: number }) => (
    <motion.svg
      viewBox="0 0 100 60"
      className="absolute text-primary/20"
      style={{
        bottom: `${bottom}%`,
        width: `${80 * scale}px`,
        height: `${50 * scale}px`,
      }}
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 15 / speed,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      {/* Simple horse silhouette path */}
      <path
        d="M25,45 L30,35 L35,38 L40,35 L45,38 L50,35 L55,40 L60,35 L65,40 L70,35 L75,40 L80,35 L85,40 L90,45 L85,50 L80,48 L75,50 L70,48 L65,50 L60,48 L55,50 L50,48 L45,50 L40,48 L35,50 L30,48 L25,50 Z"
        fill="currentColor"
        className="horse-gallop"
      />
    </motion.svg>
  );

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute bottom-0 left-0 right-0 h-40 section-fade" />
      </motion.div>

      {/* Animated horse silhouettes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <HorseSilhouette delay={0} speed={1.2} scale={0.8} bottom={10} />
        <HorseSilhouette delay={5} speed={0.8} scale={1} bottom={5} />
        <HorseSilhouette delay={10} speed={1} scale={0.6} bottom={20} />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block"
        >
          <span className="font-display text-xs tracking-[0.4em] text-primary uppercase mb-4 block">
            Skill-Based Horse Racing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-gradient-gold mb-4 sweep-flag"
        >
          CJC RACE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-foreground/90 mb-6"
        >
          RACE. WIN. GET PAID IN <span className="text-primary">REAL USDT</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-foreground/70 font-body max-w-2xl mx-auto mb-10 font-light tracking-wide"
        >
          Master gate timing, manage stamina, outrace real players, and win real USDT rewards.
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
            className="font-display text-sm tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all uppercase glow-gold group relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #059669, #10B981)', color: '#ffffff' }}
          >
            <span className="relative z-10">Start Racing Free</span>
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.span
                className="w-full h-full bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </a>
          <a
            href="https://market.cjcrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card text-foreground font-display text-sm tracking-widest px-8 py-3.5 rounded-lg hover:border-primary/50 transition-colors uppercase silk-underline"
          >
            Marketplace
          </a>
          <a
            href="https://www.cjcrace.io/download"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground font-display text-sm tracking-widest px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase"
          >
            Download Game
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
      >
        <ChevronDown className="w-8 h-8 flag-wave" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
