import { motion } from "framer-motion";
import { Crown, Zap, Star, Shield, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import adventureBanner from "@/assets/adventure-banner.jpg";
import nftBanner from "@/assets/nft-banner.jpg";
import leagueBanner from "@/assets/league-banner.jpg";

// Rarity tiers with colors
const rarityTiers = [
  { label: "N", name: "Normal", color: "#9CA3AF", bg: "rgba(156,163,175,0.15)" },
  { label: "R", name: "Rare", color: "#60A5FA", bg: "rgba(96,165,250,0.15)" },
  { label: "SR", name: "Super Rare", color: "#A78BFA", bg: "rgba(167,139,250,0.15)" },
  { label: "SSR", name: "Ultra", color: "#F59E0B", bg: "rgba(245,158,11,0.15)" },
  { label: "UR", name: "Mythic", color: "#EF4444", bg: "rgba(239,68,68,0.15)" },
  { label: "LR", name: "Legendary", color: "#C9A84C", bg: "rgba(201,168,76,0.2)" },
];

// Preview horse cards
const horseCards = [
  {
    name: "Thunderstrike",
    rarity: "SSR",
    rarityColor: "#F59E0B",
    style: "Front Runner",
    speed: 92,
    stamina: 78,
    gate: 88,
    spirit: 85,
    emoji: "⚡",
  },
  {
    name: "Shadow Dancer",
    rarity: "UR",
    rarityColor: "#EF4444",
    style: "Stalker",
    speed: 85,
    stamina: 94,
    gate: 76,
    spirit: 91,
    emoji: "🌑",
  },
  {
    name: "Golden Crown",
    rarity: "LR",
    rarityColor: "#C9A84C",
    style: "Stretch Runner",
    speed: 96,
    stamina: 88,
    gate: 82,
    spirit: 97,
    emoji: "👑",
  },
];

// Attribute bar component
const AttributeBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center gap-2 text-xs">
    <span className="w-14 text-foreground/50 uppercase tracking-wider">{label}</span>
    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </div>
    <span className="w-6 text-right text-foreground/60 font-mono">{value}</span>
  </div>
);

// Horse card component
const HorseCard = ({ horse, index }: { horse: typeof horseCards[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group"
  >
    <div className="glass-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
      {/* Card header with rarity */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${horse.rarityColor}15, ${horse.rarityColor}05)`,
        }}
      >
        <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">
          {horse.emoji}
        </span>
        {/* Rarity badge */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-bold tracking-wider font-display"
          style={{
            background: `${horse.rarityColor}20`,
            color: horse.rarityColor,
            border: `1px solid ${horse.rarityColor}40`,
          }}
        >
          {horse.rarity}
        </div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-display text-sm font-bold text-foreground tracking-wide">{horse.name}</h4>
        </div>
        <div className="flex items-center gap-1.5 mb-4">
          <Zap className="w-3 h-3 text-primary" />
          <span className="text-xs text-primary/80 font-display tracking-wider">{horse.style}</span>
        </div>

        {/* Attributes */}
        <div className="space-y-2">
          <AttributeBar label="SPD" value={horse.speed} color="#F59E0B" />
          <AttributeBar label="STA" value={horse.stamina} color="#10B981" />
          <AttributeBar label="GATE" value={horse.gate} color="#60A5FA" />
          <AttributeBar label="SPR" value={horse.spirit} color="#A78BFA" />
        </div>
      </div>
    </div>
  </motion.div>
);

// Stable Section — Two-column cinematic layout
const StableSection = () => (
  <div className="relative mb-2">
    <div className="relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img src={nftBanner} alt="Your Stable" className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/50" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 80% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)',
        }} />
      </div>

      {/* Two-column content */}
      <div className="relative z-10 container mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Headline, stats, rarity, CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
              Your Stable
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
              Build Your Stable
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-md leading-relaxed mb-6">
              Every horse tells a story — every upgrade changes the race.
              Collect, customize and compete across{' '}
              <span className="text-primary font-semibold">6 rarity tiers</span> with
              unique attributes that shape your strategy.
            </p>

            {/* Compact stats — 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 max-w-xs">
              {[
                { icon: Crown, value: "1,200+", label: "Unique Horses" },
                { icon: Shield, value: "6", label: "Rarity Tiers" },
                { icon: Sparkles, value: "4", label: "Running Styles" },
                { icon: Star, value: "16+", label: "Attributes" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <stat.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-foreground leading-tight">{stat.value}</div>
                    <div className="text-[9px] text-foreground/45 tracking-wider uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rarity tiers — compact inline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-1.5 mb-6"
            >
              {rarityTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="px-2 py-1 rounded-full text-[10px] font-display font-bold tracking-wider"
                  style={{
                    background: tier.bg,
                    border: `1px solid ${tier.color}30`,
                    color: tier.color,
                  }}
                >
                  {tier.label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://market.cjcrace.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-xs tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase group"
              >
                Explore Your Stable
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-to-play"
                className="inline-flex items-center gap-2 px-5 py-3 font-display text-xs tracking-widest text-foreground/70 hover:text-primary border border-white/10 hover:border-primary/30 rounded-lg transition-all uppercase"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
              >
                How It Works
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Horse cards — compact vertical stack */}
          <div className="flex flex-col gap-3">
            {horseCards.map((horse, i) => (
              <motion.div
                key={horse.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: -4, scale: 1.01 }}
                className="group"
              >
                <div
                  className="flex items-center gap-4 rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 p-3"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Horse icon + rarity */}
                  <div
                    className="relative w-20 h-20 flex-shrink-0 rounded-lg flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${horse.rarityColor}18, ${horse.rarityColor}08)`,
                    }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{horse.emoji}</span>
                    <div
                      className="absolute top-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold font-display"
                      style={{
                        background: `${horse.rarityColor}25`,
                        color: horse.rarityColor,
                        border: `1px solid ${horse.rarityColor}40`,
                      }}
                    >
                      {horse.rarity}
                    </div>
                  </div>

                  {/* Horse info + attributes */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-foreground tracking-wide">{horse.name}</h4>
                      <div className="flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 text-primary" />
                        <span className="text-[10px] text-primary/70 font-display tracking-wider">{horse.style}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <AttributeBar label="SPD" value={horse.speed} color="#F59E0B" />
                      <AttributeBar label="STA" value={horse.stamina} color="#10B981" />
                      <AttributeBar label="GATE" value={horse.gate} color="#60A5FA" />
                      <AttributeBar label="SPR" value={horse.spirit} color="#A78BFA" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
);

// Standard cinematic sections (Gameplay & League)
const standardSections = [
  {
    tag: "GAMEPLAY",
    title: "The Thrill of the Track",
    desc: "Race against real players to earn CJC coins, badges and other rewards. Control your Jockey in-game, match attributes, and use in-game props to secure victory.",
    img: adventureBanner,
    cta: { label: "Learn More", href: "https://www.cjcrace.io/gameinfo" },
  },
  {
    tag: "LEAGUE",
    title: "Compete in League Challenges",
    desc: "League Challenges are exclusive to members and offer competitive gameplay across short, medium, and long distances. Rise through the ranks.",
    img: leagueBanner,
    cta: { label: "Join League", href: "https://www.cjcrace.io/gameinfo" },
  },
];

const CinematicSections = () => {
  return (
    <section id="game-info" className="py-10">
      {/* Section 1: Gameplay */}
      <div className="relative mb-2">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={standardSections[0].img} alt={standardSections[0].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="container max-w-lg ml-8 md:ml-24"
          >
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">{standardSections[0].tag}</span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
              {standardSections[0].title}
            </h2>
            <p className="text-foreground/70 text-base md:text-lg mb-6 leading-relaxed">{standardSections[0].desc}</p>
            <a
              href={standardSections[0].cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass-card px-6 py-3 font-display text-sm tracking-widest text-primary border-primary/40 hover:bg-primary/10 transition-colors uppercase"
            >
              {standardSections[0].cta.label}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Section 2: YOUR STABLE (overhauled) */}
      <StableSection />

      {/* Section 3: League */}
      <div className="relative mb-2">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={standardSections[1].img} alt={standardSections[1].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="container max-w-lg ml-8 md:ml-24"
          >
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">{standardSections[1].tag}</span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
              {standardSections[1].title}
            </h2>
            <p className="text-foreground/70 text-base md:text-lg mb-6 leading-relaxed">{standardSections[1].desc}</p>
            <a
              href={standardSections[1].cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass-card px-6 py-3 font-display text-sm tracking-widest text-primary border-primary/40 hover:bg-primary/10 transition-colors uppercase"
            >
              {standardSections[1].cta.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CinematicSections;
