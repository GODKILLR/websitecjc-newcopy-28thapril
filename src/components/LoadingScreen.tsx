import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [loading, setLoading] = useState(true);
  const [gatesOpen, setGatesOpen] = useState(false);
  const [horsesBurst, setHorsesBurst] = useState(false);

  useEffect(() => {
    // Simulate loading sequence
    const timer1 = setTimeout(() => setGatesOpen(true), 800);
    const timer2 = setTimeout(() => setHorsesBurst(true), 1200);
    const timer3 = setTimeout(() => {
      setLoading(false);
      onLoadComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Starting gates */}
          <div className="relative w-full max-w-2xl h-64">
            {/* Gate structure */}
            <div className="absolute inset-x-0 bottom-0 h-full flex">
              {/* Left gate */}
              <motion.div
                animate={{ x: gatesOpen ? "-100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-1/2 h-full bg-gradient-to-r from-card to-transparent border-r-2 border-primary/50 flex items-center justify-center"
              >
                <span className="font-display text-6xl font-bold text-primary/30">1</span>
              </motion.div>

              {/* Right gate */}
              <motion.div
                animate={{ x: gatesOpen ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-1/2 h-full bg-gradient-to-l from-card to-transparent border-l-2 border-primary/50 flex items-center justify-center"
              >
                <span className="font-display text-6xl font-bold text-primary/30">2</span>
              </motion.div>
            </div>

            {/* Top bar */}
            <motion.div
              animate={{ y: gatesOpen ? "-20px" : "0", opacity: gatesOpen ? 0.5 : 1 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 right-0 h-8 gradient-gold flex items-center justify-center"
            >
              <span className="font-display text-sm tracking-[0.5em] text-primary-foreground uppercase">
                Starting Gates
              </span>
            </motion.div>

            {/* Horses bursting out */}
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, scale: 0.5, opacity: 0 }}
                  animate={{
                    x: horsesBurst ? (i === 1 ? 0 : i === 0 ? -100 + i * 30 : 100 - i * 30) : 0,
                    scale: horsesBurst ? 1 : 0.5,
                    opacity: horsesBurst ? 1 : 0,
                  }}
                  transition={{
                    x: { duration: 0.6, ease: "easeOut" },
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.3 },
                  }}
                  className="text-4xl"
                >
                  🐴
                </motion.div>
              ))}
            </div>

            {/* Dust particles */}
            {horsesBurst && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, x: Math.random() * 100 - 50 }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: -30 - Math.random() * 20,
                      x: (Math.random() - 0.5) * 150,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: Math.random() * 0.3,
                    }}
                    className="absolute bottom-0 w-2 h-2 rounded-full bg-primary/40"
                    style={{ left: `${50 + (Math.random() - 0.5) * 60}%` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full mx-auto mb-4"
            />
            <p className="font-display text-sm tracking-[0.3em] text-primary uppercase">
              Loading Race
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
