import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Trophy, Swords, Crown, Users, Target, Clock, Zap, Star, Sparkles, Gift } from "lucide-react";

const gameModes = [
  {
    icon: Trophy,
    name: "Champion Stakes",
    tagline: "Primary earning mode",
    description:
      "The flagship competitive mode for Tycoon Club members. New races every 30 minutes throughout the day. Players register for one race at a time, matching their horse's distance and rarity to the upcoming event. Before registering check the race direction, weather, and track type to align your horse preferences. Top 5 finishers earn CJC Coins, Climax Tokens and props (up to 20 USDT per race). Positions 6 to 18 earn Climax Tokens only. Total prize pool exceeds 30K USDT every month and scales as the membership base grows.",
    details: [
      { label: "Access", value: "Members Only" },
      { label: "Availability", value: "New race every 30 minutes" },
      { label: "HP Cost", value: "1 HP (horse and jockey)" },
      { label: "Top 5", value: "CJC + Climax + Props (up to 20 USDT)" },
      { label: "6th to 18th", value: "Climax Tokens only" },
      { label: "Monthly Pool", value: "30K+ USDT" },
    ],
    color: "#F59E0B",
  },
  {
    icon: Star,
    name: "League Challenges",
    tagline: "Consistent grind mode",
    description:
      "24/7 continuous racing for Tycoon Club members. Pick your preferred distance (short, medium or long) and get matched instantly with other players. Every participant earns season points after each race regardless of placement. Finishing first earns more, but even last place earns something. Strategy: consistency beats occasional big wins. Racing frequently and regularly compounds points faster than sporadic high-placement races.",
    details: [
      { label: "Access", value: "Members Only" },
      { label: "Availability", value: "24/7 continuous" },
      { label: "HP Cost", value: "1 HP (horse and jockey)" },
      { label: "Distances", value: "Short, Medium, Long" },
      { label: "Scoring", value: "Season points every race" },
    ],
    color: "#60A5FA",
  },
  {
    icon: Crown,
    name: "Grand Master Cup",
    tagline: "High-stakes tournament",
    description:
      "Periodic high-stakes tournaments open to all players. Categorised by short, medium, and long distances. Each round, the top 6 players advance to the next, with 2 to 8 rounds depending on participant count. Top 3 in each round earn CJC Coins. The champion can win up to 150x their entry fee.",
    details: [
      { label: "Access", value: "All Players" },
      { label: "Availability", value: "Periodic events" },
      { label: "HP Cost", value: "None" },
      { label: "Rewards", value: "Up to 150x entry fee" },
    ],
    color: "#A78BFA",
  },
  {
    icon: Swords,
    name: "PVP Races",
    tagline: "Player vs Player, on demand",
    description:
      "Available 24/7. Any player can host a PVP race. The host sets all parameters: required NFT rarities, race distance, track conditions, and whether betting is enabled. If betting is enabled, all participants wager the same amount. Winner takes the pool, or it splits 5-3-2 among top 3 based on host settings.",
    details: [
      { label: "Access", value: "All Players" },
      { label: "Availability", value: "24/7" },
      { label: "HP Cost", value: "None" },
      { label: "Rewards", value: "Winner takes pool (or 5-3-2 split)" },
    ],
    color: "#EF4444",
  },
  {
    icon: Target,
    name: "Practice Match",
    tagline: "Sandbox training mode",
    description:
      "A pure training ground available to all players. Customise teams, course conditions, and the number of AI opponents. A default SR-rarity Level 30 horse and jockey are provided. No HP deduction, no EXP gains, no proficiency progress. Perfect for testing exit timing and horse builds.",
    details: [
      { label: "Access", value: "All Players" },
      { label: "Availability", value: "Anytime" },
      { label: "HP Cost", value: "None" },
      { label: "Rewards", value: "Experience only" },
    ],
    color: "#10B981",
  },
];

// Non-member access modes
const nonMemberModes = [
  {
    name: "Champion Stakes — Free Mode",
    desc: "The system randomly assigns one horse per race. All players earn Climax Tokens based on finishing position. Daily cap: 600 Climax Tokens per player.",
  },
  {
    name: "League Challenges — Free Mode",
    desc: "Random horse, random racecourse and conditions. Matched 24/7. 8,000 Climax Token hourly prize pool shared among participants. Daily cap: 300 tokens per player.",
  },
];

const raceConditions = [
  {
    category: "Distance",
    options: [
      { name: "Short", range: "800 to 1,200m", note: "Match horses with short distance preference" },
      { name: "Medium", range: "1,400 to 1,800m", note: "Match horses with medium distance preference" },
      { name: "Long", range: "2,000 to 3,200m", note: "Match horses with long distance preference" },
    ],
  },
  {
    category: "Direction",
    options: [
      { name: "Left", range: "", note: "Anti-clockwise track. Match horse direction preference." },
      { name: "Right", range: "", note: "Clockwise track. Match horse direction preference." },
      { name: "Straight", range: "", note: "Straight track. Match horse direction preference." },
    ],
  },
  {
    category: "Weather",
    options: [
      { name: "Sunny", range: "", note: "Match horse weather preference for max performance" },
      { name: "Cloudy", range: "", note: "Match horse weather preference for max performance" },
      { name: "Rainy", range: "", note: "Match horse weather preference for max performance" },
    ],
  },
  {
    category: "Track Type",
    options: [
      { name: "Turf", range: "", note: "Match horse track preference" },
      { name: "Dirt", range: "", note: "Match horse track preference" },
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
            Six game modes for every skill level. Tycoon Club members compete in CJC Coin earning modes. Free players race for Climax Tokens and qualify for Lucky Wins draws.
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
              className="relative rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${mode.color}08 0%, rgba(15,23,42,0.6) 50%, ${mode.color}04 100%)`,
              }}
            >
              {/* Accent stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, transparent, ${mode.color}, transparent)` }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
                {/* Left: Content */}
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        background: `${mode.color}20`,
                        border: `1px solid ${mode.color}40`,
                      }}
                    >
                      <mode.icon
                        className="w-7 h-7"
                        style={{ color: mode.color }}
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <span
                        className="text-[10px] font-display tracking-[0.25em] uppercase"
                        style={{ color: mode.color }}
                      >
                        {mode.tagline}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
                        {mode.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/75 text-base leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                {/* Right: Details panel */}
                <div
                  className="p-8 md:p-10 lg:border-l border-t lg:border-t-0 border-border/20"
                  style={{ background: 'rgba(8,10,15,0.5)' }}
                >
                  <p className="text-[10px] font-display tracking-[0.25em] uppercase text-foreground/40 mb-5">
                    At a Glance
                  </p>
                  <div className="space-y-4">
                    {mode.details.map((d) => (
                      <div key={d.label} className="grid grid-cols-[100px_1fr] gap-3 items-start">
                        <p className="text-foreground/50 text-xs uppercase tracking-wider font-display pt-0.5">
                          {d.label}
                        </p>
                        <p
                          className="text-sm font-display font-bold leading-snug"
                          style={{ color: '#fff' }}
                        >
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Mode Access */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Free to Play
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Race Without Buying In
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Sign up with email and race for free. Earn Climax Tokens to enter monthly Lucky Wins draws with $250,000 minimum prize fund.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {nonMemberModes.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 border-border/30"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.3)",
                    }}
                  >
                    <Gift className="w-5 h-5" style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">
                      {m.name}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Every race is shaped by distance, direction, weather, and track type. The right horse build depends on the conditions you are racing in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                title: "Gate Exit",
                desc: "3 seconds before gates open, an Exit Indicator appears. Tap when two pointers overlap for the optimal start.",
              },
              {
                icon: Clock,
                title: "Stamina Management",
                desc: "Stamina depletes from race start. Higher speed drains it faster. Each whip costs extra. Run out and your horse drops to base speed.",
              },
              {
                icon: Users,
                title: "Balance & Collisions",
                desc: "Active collisions cost balance. If your jockey loses all balance you are immediately disqualified.",
              },
              {
                icon: Star,
                title: "Whip & Direction",
                desc: "Adjust whip pressure with up and down buttons. Steer left and right to position. Tap whip for a manual speed burst.",
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
