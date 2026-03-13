import { motion } from "framer-motion";
import { Flag, ChevronRight, Info } from "lucide-react";
import { useState } from "react";

const milestones = [
  {
    period: "2025 Q2",
    items: ["Whitepaper", "Website Launch", "CJC Race Gameplay for Whitelist", "NFT Marketplace Release", "NFT Advanced Functions"],
    status: "current",
  },
  {
    period: "2025 Q3",
    items: ["CJC Global Launch (PC, Mac, iOS, Android)", "Social Media Channels", "New Game Mode: Stable Spa", "$CLIMAX Token"],
    status: "upcoming",
  },
  {
    period: "2025 Q4",
    items: ["Mini CJC", "Alliance Mode for Team Races"],
    status: "upcoming",
  },
  {
    period: "2026 H1",
    items: ["New NFTs — Cyber Edition", "VIP Tower"],
    status: "upcoming",
  },
  {
    period: "2026 H2",
    items: ["CJC Race Conf", "LIVE Jackpot", "Lucky Wins — Luxury Prizes", "CRC Race Global Launch"],
    status: "upcoming",
  },
  {
    period: "Beyond",
    items: ["Real Horse Purchase"],
    status: "future",
  },
];

const statusColors: Record<string, string> = {
  current: "bg-primary glow-gold",
  upcoming: "bg-primary/60",
  future: "bg-border",
};

const RoadmapSection = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--gold)) 35px, hsl(var(--gold)) 70px)",
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">The Journey</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 tracking-wide">Roadmap</h2>

          {/* Animated racing flags */}
          <div className="flex items-center justify-center gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-6 gradient-gold rounded flex items-center justify-center"
              >
                <Flag className="w-4 h-4 text-primary-foreground" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress indicator showing current phase */}
        <div className="max-w-md mx-auto mb-12">
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-display tracking-wider text-primary uppercase">Race Progress</span>
              <span className="text-xs text-foreground/60">Phase 1 of 6</span>
            </div>
            <div className="h-2 bg-card/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-gold"
                initial={{ width: "0%" }}
                whileInView={{ width: "16.6%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-foreground/40">
              <span>Start</span>
              <span>Finish Line</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Center line with animated glow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

          {/* Animated progress pulse traveling down the track */}
          <motion.div
            className="absolute left-1/2 w-px bg-primary/30 hidden md:block"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                onMouseEnter={() => setHoveredMilestone(i)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <motion.div
                    className={`glass-card p-6 inline-block ${i % 2 === 1 ? "" : "md:ml-auto"} relative overflow-hidden group cursor-pointer`}
                    whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Status indicator */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-3 h-3 rounded-full ${statusColors[m.status]}`} />
                      <span className="text-[10px] font-display tracking-widest text-primary uppercase">
                        {m.status === "current" ? "In Progress" : m.status === "upcoming" ? "Next" : "Future"}
                      </span>
                    </div>

                    <h3 className="font-display text-lg tracking-widest text-primary mb-3">{m.period}</h3>
                    <ul className="space-y-2">
                      {m.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          className="text-foreground/70 text-sm flex items-start gap-2 group/item"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1, x: 5 }}
                          transition={{ duration: 0.15 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          {item}
                          {/* Tooltip for expanded details */}
                          <motion.div
                            className="absolute left-full ml-2 top-0 z-20 glass-card px-3 py-2 min-w-[200px] pointer-events-none"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: hoveredMilestone === i ? 1 : 0,
                              x: hoveredMilestone === i ? 0 : -10,
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ display: i % 2 === 1 ? "none" : "block" }}
                          >
                            <div className="flex items-center gap-2 text-xs">
                              <Info className="w-3 h-3 text-primary" />
                              <span className="font-display text-xs tracking-wider text-primary">Details</span>
                            </div>
                            <p className="text-xs text-foreground/70 mt-1">
                              This milestone includes {item.toLowerCase()} as a key deliverable.
                            </p>
                          </motion.div>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Track progress on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-card/40"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full gradient-gold"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Animated dot with racing flag */}
                <motion.div
                  className="hidden md:flex w-10 h-10 rounded-full gradient-gold glow-gold shrink-0 relative z-10 items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  animate={
                    hoveredMilestone === i
                      ? { rotate: [0, 360] }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Flag className="w-5 h-5 text-primary-foreground" />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://www.cjcrace.io/roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 font-display text-sm tracking-widest text-primary border-primary/40 hover:bg-primary/10 transition-colors uppercase group"
          >
            View Full Roadmap
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
