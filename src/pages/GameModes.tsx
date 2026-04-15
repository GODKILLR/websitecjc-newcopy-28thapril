import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Trophy, Swords, Crown, Users, Target, Clock, Zap, Star } from "lucide-react";

const gameModes = [
  {
    icon: Trophy,
    name: "Champion Stakes",
    tagline: "The ultimate test of skill",
    description:
      "Champion Stakes is the flagship competitive mode in CJC Race. Distance-specific races where the best horses and jockeys go head-to-head for high-value CJC prizes. Master exit timing, stamina management, and race strategy to claim victory.",
    details: [
      { label: "Distance", value: "1800m" },
      { label: "Entry", value: "Stake-based" },
      { label: "Rewards", value: "Up to 12,500 CJC" },
      { label: "Skill Level", value: "Advanced" },
    ],
    color: "#F59E0B",
  },
  {
    icon: Star,
    name: "League Challenges",
    tagline: "Climb the ranks, earn daily rewards",
    description:
      "Exclusive to members, League Challenges offer competitive races across short, medium, and long distances. Compete in seasonal leagues, rise through the rankings, and reach the top tiers to enter Championship Stakes. Top performers share a daily prize pool of $1,000.",
    details: [
      { label: "Distances", value: "Short / Medium / Long" },
      { label: "Entry", value: "Members only" },
      { label: "Rewards", value: "$1,000 daily pool" },
      { label: "Skill Level", value: "Intermediate" },
    ],
    color: "#60A5FA",
  },
  {
    icon: Crown,
    name: "Grand Master Cup",
    tagline: "Tournament-style glory",
    description:
      "The Grand Master Cup is a high-stakes tournament where top-ranked players compete in elimination-style brackets. Each round narrows the field until only the best remain. Grand Master Cup events feature some of the largest prize pools in CJC Race.",
    details: [
      { label: "Format", value: "Elimination bracket" },
      { label: "Entry", value: "Qualification required" },
      { label: "Rewards", value: "Up to 25,000 CJC" },
      { label: "Skill Level", value: "Expert" },
    ],
    color: "#A78BFA",
  },
  {
    icon: Swords,
    name: "PVP Match",
    tagline: "Player vs Player, head-to-head",
    description:
      "Challenge other players directly in PVP matches. Pick your best horse, set your strategy, and race one-on-one or in small groups. PVP matches are fast-paced, skill-driven, and available on demand. Perfect for testing your build against real opponents.",
    details: [
      { label: "Format", value: "1v1 or small group" },
      { label: "Entry", value: "CJC coin wager" },
      { label: "Rewards", value: "Winner takes pool" },
      { label: "Skill Level", value: "All levels" },
    ],
    color: "#EF4444",
  },
  {
    icon: Target,
    name: "Practice Mode",
    tagline: "Train without risk",
    description:
      "New to CJC Race or testing a new horse build? Practice Mode lets you race without wagering CJC coins. Learn exit timing, test different race conditions, experiment with horse attributes, and build your skills before entering competitive modes.",
    details: [
      { label: "Format", value: "Solo or AI opponents" },
      { label: "Entry", value: "Free" },
      { label: "Rewards", value: "Experience only" },
      { label: "Skill Level", value: "Beginner" },
    ],
    color: "#10B981",
  },
];

const raceConditions = [
  {
    category: "Distance",
    options: [
      { name: "Short", range: "800 – 1,200m", note: "Favours speed and burst" },
      { name: "Medium", range: "1,400 – 1,800m", note: "Balanced attributes needed" },
      { name: "Long", range: "2,000 – 3,200m", note: "Stamina is critical" },
    ],
  },
  {
    category: "Track Type",
    options: [
      { name: "Turf", range: "", note: "Standard surface, balanced performance" },
      { name: "Dirt", range: "", note: "Favours power and gate speed" },
      { name: "Synthetic", range: "", note: "Consistent conditions, all-round stats" },
    ],
  },
  {
    category: "Weather",
    options: [
      { name: "Sunny", range: "", note: "No stamina penalty" },
      { name: "Cloudy", range: "", note: "Mild stamina reduction" },
      { name: "Rainy", range: "", note: "Heavy stamina drain, strategy shifts" },
    ],
  },
];

const GameModes = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Gameplay
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Game Modes
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            From casual practice runs to high-stakes championship tournaments,
            CJC Race offers competitive modes for every skill level.
          </p>
        </div>

        {/* Game Modes */}
        <div className="space-y-6 mb-24">
          {gameModes.map((mode, i) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 md:p-8 border-border/30 hover:border-primary/20 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${mode.color}15`,
                        border: `1px solid ${mode.color}30`,
                      }}
                    >
                      <mode.icon
                        className="w-5 h-5"
                        style={{ color: mode.color }}
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground">
                        {mode.name}
                      </h2>
                      <p
                        className="text-xs font-display tracking-wider"
                        style={{ color: mode.color }}
                      >
                        {mode.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                {/* Right: Details card */}
                <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                  <div className="space-y-3">
                    {mode.details.map((d) => (
                      <div
                        key={d.label}
                        className="flex items-center justify-between"
                      >
                        <span className="text-foreground/50 text-xs">
                          {d.label}
                        </span>
                        <span className="font-display text-xs font-bold text-foreground">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Race Conditions */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Strategy
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Race Conditions
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Every race is shaped by distance, track type, and weather. The
              right horse build depends on the conditions you're racing in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {raceConditions.map((group) => (
              <div key={group.category} className="glass-card p-6 border-border/30">
                <h3 className="font-display text-sm font-bold text-primary mb-4 tracking-wider uppercase">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.options.map((opt) => (
                    <div key={opt.name}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display text-sm font-bold text-foreground">
                          {opt.name}
                        </span>
                        {opt.range && (
                          <span className="text-foreground/40 text-xs">
                            {opt.range}
                          </span>
                        )}
                      </div>
                      <p className="text-foreground/50 text-xs">{opt.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Mechanics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Skill
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Master the Race
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              CJC Race is not luck-based. Winning requires real-time decision
              making across these core mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Zap,
                title: "Exit Timing",
                desc: "Tap when pointers overlap for a clean start. Mistiming costs precious seconds.",
              },
              {
                icon: Clock,
                title: "Stamina Management",
                desc: "Higher speed drains stamina faster. Pace your horse or risk running out before the finish.",
              },
              {
                icon: Users,
                title: "Collision Avoidance",
                desc: "Maintain balance and avoid other horses. Collisions slow you down and drain stamina.",
              },
              {
                icon: Star,
                title: "Whip Strategy",
                desc: "Use your jockey items at the right moment for a burst of speed when it matters most.",
              },
            ].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 border-border/30 text-center"
              >
                <div
                  className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground mb-2">
                  {skill.title}
                </h4>
                <p className="text-foreground/50 text-xs leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.cjcrace.io/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-8 py-3.5 rounded-lg transition-colors uppercase"
          >
            Download & Start Racing
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default GameModes;
