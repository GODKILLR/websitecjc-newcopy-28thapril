import { motion } from "framer-motion";

const milestones = [
  {
    period: "2025 Q2",
    items: ["Whitepaper", "Website Launch", "CJC Race Gameplay for Whitelist", "NFT Marketplace Release", "NFT Advanced Functions"],
  },
  {
    period: "2025 Q3",
    items: ["CJC Global Launch (PC, Mac, iOS, Android)", "Social Media Channels", "New Game Mode: Stable Spa", "$CLIMAX Token"],
  },
  {
    period: "2025 Q4",
    items: ["Mini CJC", "Alliance Mode for Team Races"],
  },
  {
    period: "2026 H1",
    items: ["New NFTs — Cyber Edition", "VIP Tower"],
  },
  {
    period: "2026 H2",
    items: ["CJC Race Conf", "LIVE Jackpot", "Lucky Wins — Luxury Prizes", "CRC Race Global Launch"],
  },
  {
    period: "Beyond",
    items: ["Real Horse Purchase"],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">The Journey</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 tracking-wide">Roadmap</h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`glass-card p-6 inline-block ${i % 2 === 1 ? "" : "md:ml-auto"}`}>
                    <h3 className="font-display text-lg tracking-widest text-primary mb-3">{m.period}</h3>
                    <ul className="space-y-2">
                      {m.items.map((item) => (
                        <li key={item} className="text-foreground/70 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full gradient-gold glow-gold shrink-0 relative z-10" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
