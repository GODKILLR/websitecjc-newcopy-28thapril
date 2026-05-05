import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown, Star, Shield, Sparkles, ArrowRight, ChevronRight, Zap, Wind, Flame, Hourglass, Heart } from "lucide-react";
import adventureBanner from "@/assets/gameplay-bg.webp";
import nftBanner from "@/assets/nft-banner.webp";
import horse1 from "@/assets/horses/1.webp";
import horse2 from "@/assets/horses/2.webp";
import horse3 from "@/assets/horses/3.webp";
import horse4 from "@/assets/horses/4.webp";

// Rarity tiers with colors
const rarityTiers = [
  { label: "N", name: "Normal", color: "#9CA3AF", bg: "rgba(156,163,175,0.15)" },
  { label: "R", name: "Rare", color: "#60A5FA", bg: "rgba(96,165,250,0.15)" },
  { label: "SR", name: "Super Rare", color: "#A78BFA", bg: "rgba(167,139,250,0.15)" },
  { label: "SSR", name: "Ultra", color: "#F59E0B", bg: "rgba(245,158,11,0.15)" },
  { label: "UR", name: "Mythic", color: "#EF4444", bg: "rgba(239,68,68,0.15)" },
  { label: "LR", name: "Legendary", color: "#C9A84C", bg: "rgba(201,168,76,0.2)" },
];

// Preview horse cards — marketplace style
const horseCards = [
  {
    id: "1490",
    breed: "Akhal-Teke",
    gender: "Male",
    level: 52,
    rarity: "UR",
    rarityColor: "#EF4444",
    img: horse1,
    energy: 10,
    speed: 1209,
    burst: 1250,
    stamina: 1254,
    spirit: 1254,
    listing: "in 2 months",
    price: "2,288.00",
  },
  {
    id: "1484",
    breed: "Friesian",
    gender: "Male",
    level: 60,
    rarity: "UR",
    rarityColor: "#EF4444",
    img: horse2,
    energy: 10,
    speed: 1301,
    burst: 1281,
    stamina: 1295,
    spirit: 1284,
    listing: "in 2 months",
    price: "2,388.00",
  },
  {
    id: "781",
    breed: "Black Forest Cold Blood",
    gender: "Female",
    level: 60,
    rarity: "UR",
    rarityColor: "#EF4444",
    img: horse3,
    energy: 10,
    speed: 1322,
    burst: 1276,
    stamina: 1296,
    spirit: 1343,
    listing: "in 2 months",
    price: "1,280.00",
  },
  {
    id: "220",
    breed: "Morgan",
    gender: "Male",
    level: 60,
    rarity: "UR",
    rarityColor: "#EF4444",
    img: horse4,
    energy: 10,
    speed: 1296,
    burst: 1291,
    stamina: 1330,
    spirit: 1306,
    listing: "in 2 months",
    price: "1,388.00",
  },
];

// Marketplace-style attribute circle with icon
const AttrCircle = ({
  value,
  color,
  icon: Icon,
  label,
}: {
  value: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-0.5" title={label}>
    <span className="text-[10px] font-bold text-foreground/80 font-display">
      {value.toLocaleString()}
    </span>
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center"
      style={{ background: color, opacity: 0.9 }}
    >
      <Icon className="w-3 h-3 text-white" />
    </div>
  </div>
);


// Stable Section — Two-column cinematic layout
const StableSection = () => (
  <div className="relative mb-2">
    <div className="relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img src={nftBanner} alt="Your Stable" className="w-full h-full object-cover" style={{ opacity: 0.6 }} loading="lazy" decoding="async" />
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
              Build Your Team
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-md leading-relaxed mb-6">
              Every horse tells a story. Every upgrade changes the race.
              Collect across{' '}
              <span className="text-primary font-semibold">6 rarity tiers</span>.
              Train your jockey. Stack items that match your build. Your team. Your strategy.
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
                Build Your Team
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

          {/* RIGHT COLUMN: Marketplace-style horse cards */}
          <div className="flex flex-col gap-3">
            {horseCards.map((horse, i) => (
              <motion.div
                key={horse.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: -4, scale: 1.01 }}
                className="group"
              >
                <div
                  className="flex items-center gap-3 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 p-3"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Horse thumbnail with rarity badge */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={horse.img}
                      alt={horse.breed}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={80}
                      height={80}
                    />
                    <div
                      className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-black font-display backdrop-blur-sm"
                      style={{
                        background: `${horse.rarityColor}40`,
                        color: '#fff',
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                      }}
                    >
                      {horse.rarity}
                    </div>
                  </div>

                  {/* Center: Level + breed + attribute circles */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 text-xs flex-wrap">
                      <span className="text-foreground/50">Level</span>
                      <span className="font-display font-bold" style={{ color: horse.rarityColor }}>{horse.level}</span>
                      <span className="text-foreground/50">{horse.gender}</span>
                      <span className="text-foreground/40 truncate">{horse.breed}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <AttrCircle value={horse.energy} color="#F59E0B" icon={Zap} label="Energy" />
                      <AttrCircle value={horse.speed} color="#10B981" icon={Wind} label="Speed" />
                      <AttrCircle value={horse.burst} color="#10B981" icon={Flame} label="Burst" />
                      <AttrCircle value={horse.stamina} color="#60A5FA" icon={Hourglass} label="Stamina" />
                      <AttrCircle value={horse.spirit} color="#EC4899" icon={Heart} label="Spirit" />
                    </div>
                  </div>

                  {/* Right: Listing info */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <div
                      className="px-2 py-1 rounded text-[10px] font-display font-bold"
                      style={{
                        background: 'rgba(201,168,76,0.15)',
                        color: '#C9A84C',
                        border: '1px solid rgba(201,168,76,0.3)',
                      }}
                    >
                      # {horse.id}
                    </div>
                    <span className="text-[10px] text-foreground/40">{horse.listing}</span>
                    <span className="font-display text-sm font-bold text-foreground">{horse.price}</span>
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

// Cinematic gameplay banner section
const standardSections = [
  {
    tag: "GAMEPLAY",
    title: "The Thrill of the Track",
    desc: "Take control of your jockey in real time. Time the gate exit. Manage stamina. Whip at the right second. Champion Stakes runs a new race every 30 minutes throughout the day with reward pools that scale up as the membership base grows.",
    img: adventureBanner,
    cta: { label: "Learn More", href: "/game-modes", internal: true },
  },
];

const CinematicSections = () => {
  return (
    <section id="game-info" className="py-10">
      {/* Section 1: Gameplay */}
      <div className="relative mb-2">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={standardSections[0].img} alt={standardSections[0].title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40 md:to-transparent md:via-background/70" />
        </div>
        <div className="absolute inset-0 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-lg px-4 sm:px-6 md:pl-24 md:pr-8 pointer-events-auto select-text"
          >
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase select-text">{standardSections[0].tag}</span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide select-text">
              {standardSections[0].title}
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg mb-5 leading-relaxed select-text">
              Take control of your jockey in real time.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 select-text">
              {[
                { icon: Zap, label: "Gate Timing", color: "#F59E0B" },
                { icon: Hourglass, label: "Stamina", color: "#60A5FA" },
                { icon: Flame, label: "Whip Timing", color: "#10B981" },
              ].map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
                  style={{
                    background: `${skill.color}12`,
                    borderColor: `${skill.color}40`,
                  }}
                >
                  <skill.icon className="w-3.5 h-3.5" style={{ color: skill.color }} />
                  <span className="text-xs font-display tracking-wider text-foreground/85 uppercase">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-foreground/60 text-sm md:text-base mb-6 leading-relaxed select-text">
              Champion Stakes runs a new race every 30 minutes with reward pools that scale up as the membership base grows.
            </p>
            <Link
              to={standardSections[0].cta.href}
              className="inline-block gradient-gold px-6 py-3 font-display text-sm tracking-widest text-primary-foreground rounded-lg hover:opacity-90 transition-opacity uppercase select-none"
            >
              {standardSections[0].cta.label}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Section 2: YOUR STABLE (overhauled) */}
      <StableSection />
    </section>
  );
};

export default CinematicSections;
