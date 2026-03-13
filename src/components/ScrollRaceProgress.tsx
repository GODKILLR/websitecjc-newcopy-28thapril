import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollRaceProgress = () => {
  const { scrollYProgress } = useScroll();
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find all major sections on the page
    const sectionElements = document.querySelectorAll(
      "section, .parallax-section"
    );
    setSections(Array.from(sectionElements));
  }, []);

  // Map scroll progress to horse position
  const horseX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Calculate current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const sectionNames = ["Start", "Features", "Gameplay", "NFTs", "League", "Roadmap", "Finish"];

  return (
    <>
      {/* Fixed sidebar race progress */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="glass-card p-3 pr-6 min-w-[180px]">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="w-6 h-6 rounded-full gradient-gold flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <span className="text-[10px]">🐴</span>
            </motion.div>
            <span className="font-display text-xs tracking-widest text-primary uppercase">
              Race Progress
            </span>
          </div>

          {/* Track visualization */}
          <div ref={trackRef} className="relative h-2 bg-card/40 rounded-full overflow-hidden mb-3">
            <motion.div
              className="absolute inset-y-0 left-0 gradient-gold"
              style={{ width: scrollYProgress }}
            />
            {/* Distance markers */}
            <div className="absolute inset-0 flex justify-between items-center px-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-px h-full bg-border/30"
                />
              ))}
            </div>
          </div>

          {/* Section indicators */}
          <div className="space-y-1">
            {sectionNames.slice(0, 5).map((name, i) => (
              <div
                key={name}
                className={`flex items-center gap-2 text-[10px] font-display tracking-wider transition-colors ${
                  currentSection === i ? "text-primary" : "text-foreground/40"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    currentSection === i ? "bg-primary glow-gold" : "bg-border"
                  }`}
                />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom progress bar for mobile */}
      <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-card/40 z-40 lg:hidden">
        <motion.div
          className="h-full gradient-gold"
          style={{ width: scrollYProgress }}
        />
      </div>

      {/* Finish line celebration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: scrollYProgress.get() > 0.95 ? 1 : 0,
          scale: scrollYProgress.get() > 0.95 ? 1 : 0.8,
        }}
        className="fixed bottom-20 right-4 z-40 glass-card p-4 text-center hidden lg:block"
      >
        <div className="text-2xl mb-1">🏁</div>
        <div className="font-display text-xs tracking-widest text-primary uppercase">
          Finish Line!
        </div>
      </motion.div>
    </>
  );
};

export default ScrollRaceProgress;
