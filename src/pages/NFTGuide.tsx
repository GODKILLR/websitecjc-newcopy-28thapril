import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Crown,
  Zap,
  Target,
  Sparkles,
  ChevronRight,
  ShoppingBag,
  Package,
  Trophy,
  ArrowRight,
} from "lucide-react";

const nftTypes = [
  {
    icon: "🐎",
    title: "Racehorse NFT",
    desc: "Your primary racing asset. Each horse has 4 core attributes (Speed, Burst, Stamina, Toughness) and 4 preferences (Distance, Direction, Weather, Track Type). HP depletes with every race.",
    stats: ["4 Core Attributes", "4 Preferences", "Levels 1 to 60", "5 Condition Levels"],
    color: "#F59E0B",
  },
  {
    icon: "🏇",
    title: "Jockey NFT",
    desc: "Rides your racehorse in every race. 3 core attributes (Technique, Balance, Weight) determine race speed and collision tolerance. Lose all balance and you are disqualified.",
    stats: ["3 Core Attributes", "Levels 1 to 60", "Race Speed Modifier", "Collision Tolerance"],
    color: "#A78BFA",
  },
  {
    icon: "🎋",
    title: "Item NFT",
    desc: "Enhances specific attributes of your horse or jockey. 12 item types available. Equip up to 4 items per race set. Items gain proficiency through racing and level up to increase bonuses.",
    stats: ["12 Item Types", "4 Per Race Set", "Proficiency Leveling", "Stat Boosts"],
    color: "#10B981",
  },
];

const rarityTiers = [
  {
    label: "N",
    name: "Normal",
    color: "#9CA3AF",
    bg: "rgba(156,163,175,0.12)",
    drop: "60%",
    description: "Base stats and HP. Entry-level NFTs perfect for learning the game.",
  },
  {
    label: "R",
    name: "Rare",
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.12)",
    drop: "25%",
    description: "Slightly elevated stats. A solid step up from common horses.",
  },
  {
    label: "SR",
    name: "Super Rare",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.12)",
    drop: "10%",
    description: "Strong all-around performance with notably higher HP and stat ceilings.",
  },
  {
    label: "SSR",
    name: "Ultra",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.12)",
    drop: "3%",
    description: "Top-tier competitive racing. High maximum HP and powerful stat scaling.",
  },
  {
    label: "UR",
    name: "Mythic",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.12)",
    drop: "1.5%",
    description: "Elite-class NFTs. Exceptional stats with strong Champion Stakes potential.",
  },
  {
    label: "LR",
    name: "Legendary",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.15)",
    drop: "0.5%",
    description: "The pinnacle. Maximum stats, maximum HP, and maximum prestige.",
  },
];

const steps = [
  {
    num: "01",
    icon: ShoppingBag,
    title: "Buy a Pack",
    desc: "Choose from 8 Mystery Box tiers ($179 to $5,200 USDT). Higher tiers offer better rarity probabilities.",
  },
  {
    num: "02",
    icon: Package,
    title: "Open & Reveal",
    desc: "Each box reveals random NFTs based on the pack's rarity table. Racehorse, Jockey, and Items included.",
  },
  {
    num: "03",
    icon: Crown,
    title: "Tycoon Club Activated",
    desc: "Membership begins instantly. Access exclusive game modes, Day Spa, Farm, and reward-sharing structure.",
  },
  {
    num: "04",
    icon: Trophy,
    title: "Start Racing",
    desc: "Load your NFTs into a team and enter Champion Stakes, League Challenges, or Grand Master Cup.",
  },
];

const packTiers = [
  { name: "Welcome Pack", price: "$179", contents: "1 Racehorse + 1 Jockey + 1 Item", best: "Beginners" },
  { name: "Starter Pack", price: "$299", contents: "1 Racehorse + 1 Jockey + 2 Items", best: "Casual players" },
  { name: "Basic Pack", price: "$499", contents: "2 Racehorses + 1 Jockey + 2 Items", best: "Building first stable" },
  { name: "Balance Pack", price: "$899", contents: "2 Racehorses + 2 Jockeys + 3 Items", best: "Multi-distance racers" },
  { name: "Prime Pack", price: "$1,499", contents: "3 Racehorses + 2 Jockeys + 4 Items", best: "Serious competitors" },
  { name: "Supreme Pack", price: "$2,499", contents: "4 Racehorses + 3 Jockeys + 5 Items", best: "Champion Stakes hunters" },
  { name: "Ultimate Pack", price: "$3,999", contents: "5 Racehorses + 4 Jockeys + 6 Items", best: "Top-tier players" },
  { name: "Tycoon Pack", price: "$5,200", contents: "6+ NFTs with guaranteed UR/LR", best: "Whales and collectors", featured: true },
];

const NFTGuide = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* ── Hero ────────────────────────────────────────────── */}
        <div className="text-center mb-20">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            NFT Guide
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Understand Your NFTs
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Everything you need to know about CJC Race NFTs, the 6 rarity tiers, and how Mystery Boxes work.
          </p>
        </div>

        {/* ── Three NFT Types ─────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
              Three NFT Types
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Build Your Racing Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nftTypes.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/30 p-8 hover:border-primary/30 transition-colors"
                style={{ background: `linear-gradient(135deg, ${t.color}08, rgba(15,23,42,0.6))` }}
              >
                <div className="text-5xl mb-4">{t.icon}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {t.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-5">{t.desc}</p>
                <div className="space-y-2 pt-5 border-t border-border/20">
                  {t.stats.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="w-1 h-1 rounded-full" style={{ background: t.color }} />
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Six Rarity Tiers ─────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
              Rarity System
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Six Rarity Tiers
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Every NFT has a rarity grade. Higher rarity means better base stats, higher HP cap, and stronger performance at maximum level.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {rarityTiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl border p-5 text-center"
                style={{
                  background: tier.bg,
                  borderColor: `${tier.color}40`,
                }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center font-display font-black text-xl"
                  style={{
                    background: `${tier.color}25`,
                    color: tier.color,
                    border: `1px solid ${tier.color}50`,
                  }}
                >
                  {tier.label}
                </div>
                <p className="font-display text-sm font-bold text-foreground mb-1">{tier.name}</p>
                <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-3">
                  Drop {tier.drop}
                </p>
                <p className="text-foreground/60 text-xs leading-relaxed">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── How Mystery Boxes Work ─────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              From Pack to Podium
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-xl border border-border/30 bg-card/20 p-6"
              >
                <span className="font-display text-3xl font-bold text-primary/15 absolute top-4 right-5">
                  {s.num}
                </span>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                >
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-base font-bold text-foreground mb-2">{s.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/30 text-lg">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Pack Tier Comparison ─────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
              Mystery Boxes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Pack Tier Comparison
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Eight tiers from $179 to $5,200 USDT. Higher tiers include more NFTs and better rarity probabilities.
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 overflow-hidden">
            <div className="hidden md:grid grid-cols-[1.5fr_1fr_2fr_1.5fr] gap-4 p-4 border-b border-border/30 bg-card/30 text-[10px] font-display tracking-widest text-foreground/40 uppercase">
              <div>Pack</div>
              <div>Price</div>
              <div>Contents</div>
              <div>Best For</div>
            </div>
            {packTiers.map((p) => (
              <div
                key={p.name}
                className={`grid grid-cols-1 md:grid-cols-[1.5fr_1fr_2fr_1.5fr] gap-2 md:gap-4 p-5 border-b border-border/20 last:border-0 hover:bg-primary/5 transition-colors ${
                  p.featured ? "bg-primary/5" : ""
                }`}
              >
                <div className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                  {p.featured && <Sparkles className="w-3.5 h-3.5 text-primary" />}
                  {p.name}
                </div>
                <div className="text-primary font-display font-bold">{p.price}</div>
                <div className="text-foreground/70 text-sm">{p.contents}</div>
                <div className="text-foreground/50 text-xs">{p.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Leveling & Upgrades ─────────────────────────────── */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="glass-card p-6 border-border/30">
            <Zap className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-display text-base font-bold text-foreground mb-2">Leveling</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              All NFTs level from 1 to 60. Racehorses and jockeys earn EXP from Champion Stakes and League Challenges. Items gain proficiency from racing.
            </p>
          </div>
          <div className="glass-card p-6 border-border/30">
            <Target className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-display text-base font-bold text-foreground mb-2">HP & Condition</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Each race deducts 1 HP from horse and jockey. Condition drops every 5 races. Restore at the Day Spa to maintain peak performance.
            </p>
          </div>
          <div className="glass-card p-6 border-border/30">
            <Sparkles className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-display text-base font-bold text-foreground mb-2">Synthesis</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Burn N and R rarity NFTs through Synthesis to mint a higher-rarity NFT. A small CJC Coin fee applies. Drawn from a separate pool.
            </p>
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div
          className="rounded-2xl border border-primary/20 p-10 md:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,14,0.95) 50%, rgba(201,168,76,0.04) 100%)",
          }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Build Your Stable?
          </h2>
          <p className="text-foreground/60 text-sm max-w-md mx-auto mb-6">
            Browse Mystery Boxes, racehorses, jockeys, and items in the marketplace.
          </p>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-8 py-3.5 rounded-lg transition-colors uppercase"
          >
            Explore the Marketplace <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default NFTGuide;
