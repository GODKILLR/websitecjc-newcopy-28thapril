import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import roadmapQ2 from "@/assets/adventure-banner.jpg";
import roadmapQ3 from "@/assets/league-banner.jpg";
import roadmapQ4 from "@/assets/nft-banner.jpg";
import roadmapH1 from "@/assets/gameplay-bg.jpg";

const milestones = [
  {
    period: "2025 Q2",
    status: "done",
    img: roadmapQ2,
    items: [
      "Whitepaper",
      "Website Launch",
      "CJC Race Gameplay open for Whitelist members",
      "NFT Marketplace Release",
      "NFT Advanced Functions (Upgrade/Synthesis/Burning) Launch",
    ],
  },
  {
    period: "2025 Q3",
    status: "done",
    img: roadmapQ3,
    items: [
      "CJC Global Launch (PC, Mac, iOS, Android)",
      "Activate Social Media Channels (Discord, PLK, X, Medium)",
      "New Game Mode: Stable Spa",
      "$CLIMAX Token",
    ],
  },
  {
    period: "2025 Q4",
    status: "done",
    img: roadmapQ4,
    items: [
      "New game modes in CJC Race",
      "Alliance Mode for Team Races",
      "Mini CJC",
    ],
  },
  {
    period: "2026 H1",
    status: "current",
    img: roadmapH1,
    items: [
      "New batch of NFTs — Cyber Edition",
      "VIP Tower",
    ],
  },
  {
    period: "2026 H2",
    status: "upcoming",
    img: null,
    items: [
      "CJC Race Conf",
      "LIVE Jackpot",
      "Lucky Wins — Luxury Prizes",
      "CJC Race Global Launch",
    ],
  },
  {
    period: "Looking Forward",
    status: "future",
    img: null,
    items: [
      "Real Horse Purchase",
    ],
  },
];

const RoadmapSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
              The Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 tracking-wide">
              Roadmap
            </h2>
          </div>

          {/* Scroll arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-lg border border-border/30 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-lg border border-border/30 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.period}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative flex-shrink-0 w-[280px] md:w-[300px] rounded-xl border overflow-hidden snap-start ${
                m.status === "current"
                  ? "border-primary/50"
                  : "border-border/30"
              }`}
              style={{ minHeight: "380px" }}
            >
              {/* Background image or dark gradient */}
              <div className="absolute inset-0">
                {m.img ? (
                  <>
                    <img
                      src={m.img}
                      alt={m.period}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-t from-background via-card to-card/80" />
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Status dot */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      m.status === "current"
                        ? "bg-primary animate-pulse"
                        : m.status === "done"
                        ? "bg-green-500"
                        : m.status === "upcoming"
                        ? "bg-primary/50"
                        : "bg-foreground/20"
                    }`}
                  />
                  <span className="text-[10px] font-display tracking-widest text-foreground/40 uppercase">
                    {m.status === "current"
                      ? "In Progress"
                      : m.status === "done"
                      ? "Completed"
                      : m.status === "upcoming"
                      ? "Upcoming"
                      : "Future"}
                  </span>
                </div>

                {/* Period */}
                <h3
                  className={`font-display text-2xl font-bold tracking-wide mb-4 ${
                    m.status === "current" ? "text-primary" : "text-foreground"
                  }`}
                >
                  {m.period}
                </h3>

                {/* Spacer to push items down */}
                <div className="flex-1" />

                {/* Items */}
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li
                      key={item}
                      className="text-foreground/80 text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current phase glow */}
              {m.status === "current" && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(201,168,76,0.1)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-foreground/30">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-xs font-display tracking-wider">Swipe to explore</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
