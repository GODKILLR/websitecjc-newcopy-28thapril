import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Sparkles,
  Crown,
  ArrowRight,
  Wallet,
  Package,
  Zap,
  Wind,
  Flame,
  Hourglass,
  Heart,
} from "lucide-react";
import { useRef } from "react";

import heroBg from "@/assets/gameplay-bg.webp";
import horse1 from "@/assets/horses/1.webp";
import horse2 from "@/assets/horses/2.webp";
import horse3 from "@/assets/horses/3.webp";
import horse4 from "@/assets/horses/4.webp";

/* ── Stats ──────────────────────────────────────────── */
const stats = [
  { label: "NFTs Traded", value: "47,832" },
  { label: "Total Volume", value: "$3.2M USDT" },
  { label: "Active Listings", value: "8,421" },
  { label: "Live Now", value: "1,247" },
];

/* ── Mystery Boxes ──────────────────────────────────── */
const packs = [
  { name: "Welcome Pack", price: "$179", color: "#9CA3AF", contents: "1H + 1J + 1I", featured: false },
  { name: "Starter Pack", price: "$299", color: "#60A5FA", contents: "1H + 1J + 2I", featured: false },
  { name: "Basic Pack", price: "$499", color: "#A78BFA", contents: "2H + 1J + 2I", featured: false },
  { name: "Balance Pack", price: "$899", color: "#10B981", contents: "2H + 2J + 3I", featured: false },
  { name: "Prime Pack", price: "$1,499", color: "#F59E0B", contents: "3H + 2J + 4I", featured: true },
  { name: "Supreme Pack", price: "$2,499", color: "#EF4444", contents: "4H + 3J + 5I", featured: false },
  { name: "Ultimate Pack", price: "$3,999", color: "#EC4899", contents: "5H + 4J + 6I", featured: false },
  { name: "Tycoon Pack", price: "$5,200", color: "#C9A84C", contents: "6+ NFTs UR/LR", featured: true },
];

/* ── Featured Racehorses ─────────────────────────────── */
const horses = [
  {
    id: "1490",
    img: horse1,
    breed: "Akhal-Teke",
    gender: "Male",
    level: 52,
    rarity: "UR",
    rarityColor: "#EF4444",
    price: "2,288.00",
    energy: 10,
    speed: 1209,
    burst: 1250,
    stamina: 1254,
    spirit: 1254,
  },
  {
    id: "1484",
    img: horse2,
    breed: "Friesian",
    gender: "Male",
    level: 60,
    rarity: "UR",
    rarityColor: "#EF4444",
    price: "2,388.00",
    energy: 10,
    speed: 1301,
    burst: 1281,
    stamina: 1295,
    spirit: 1284,
  },
  {
    id: "781",
    img: horse3,
    breed: "Black Forest Cold Blood",
    gender: "Female",
    level: 60,
    rarity: "UR",
    rarityColor: "#EF4444",
    price: "1,280.00",
    energy: 10,
    speed: 1322,
    burst: 1276,
    stamina: 1296,
    spirit: 1343,
  },
  {
    id: "220",
    img: horse4,
    breed: "Morgan",
    gender: "Male",
    level: 60,
    rarity: "UR",
    rarityColor: "#EF4444",
    price: "1,388.00",
    energy: 10,
    speed: 1296,
    burst: 1291,
    stamina: 1330,
    spirit: 1306,
  },
];

/* ── Jockeys ─────────────────────────────────────────── */
const jockeys = [
  { id: "J-201", emoji: "🏇", name: "Jockey #201", rarity: "LR", rarityColor: "#C9A84C", level: 58, technique: 1320, balance: 1290, weight: 52, price: "1,899" },
  { id: "J-188", emoji: "🏇", name: "Jockey #188", rarity: "UR", rarityColor: "#EF4444", level: 55, technique: 1245, balance: 1310, weight: 50, price: "1,450" },
  { id: "J-167", emoji: "🏇", name: "Jockey #167", rarity: "UR", rarityColor: "#EF4444", level: 60, technique: 1298, balance: 1275, weight: 53, price: "1,520" },
  { id: "J-145", emoji: "🏇", name: "Jockey #145", rarity: "SSR", rarityColor: "#F59E0B", level: 48, technique: 1180, balance: 1220, weight: 49, price: "899" },
];

/* ── Items ──────────────────────────────────────────── */
const items = [
  { name: "Whip", emoji: "🥢", boost: "+Burst", rarity: "LR", rarityColor: "#C9A84C", price: "489" },
  { name: "Silks", emoji: "🎽", boost: "+Balance", rarity: "UR", rarityColor: "#EF4444", price: "320" },
  { name: "Saddle", emoji: "🦴", boost: "+Stamina", rarity: "SSR", rarityColor: "#F59E0B", price: "245" },
  { name: "Helmet", emoji: "⛑", boost: "+Technique", rarity: "UR", rarityColor: "#EF4444", price: "298" },
  { name: "Boots", emoji: "🥾", boost: "+Speed", rarity: "SR", rarityColor: "#A78BFA", price: "175" },
  { name: "Gloves", emoji: "🧤", boost: "+Toughness", rarity: "LR", rarityColor: "#C9A84C", price: "412" },
];

/* ── Trending ───────────────────────────────────────── */
const trending = [
  { type: "Racehorse", name: "Arabian #2104", buyer: "0xa12...4f8", price: "3,250", time: "2 min ago" },
  { type: "Pack", name: "Tycoon Pack", buyer: "0x891...c2d", price: "5,200", time: "8 min ago" },
  { type: "Jockey", name: "Jockey #J-099", buyer: "0xf45...92a", price: "2,180", time: "15 min ago" },
  { type: "Racehorse", name: "Thoroughbred #3142", buyer: "0x223...8e1", price: "1,890", time: "23 min ago" },
];

/* ── Attribute Circle ───────────────────────────────── */
const AttrCircle = ({ value, color, icon: Icon, label }: { value: number; color: string; icon: React.ComponentType<{ className?: string }>; label: string }) => (
  <div className="flex flex-col items-center gap-0.5" title={label}>
    <span className="text-[9px] font-bold text-foreground/80 font-display">{value.toLocaleString()}</span>
    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: color, opacity: 0.9 }}>
      <Icon className="w-2.5 h-2.5 text-white" />
    </div>
  </div>
);

/* ── Horizontal Scroll Row ──────────────────────────── */
const ScrollRow = ({ title, subtitle, ctaLabel, ctaHref, children }: { title: string; subtitle?: string; ctaLabel: string; ctaHref: string; children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <div className="mb-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">{title}</h2>
          {subtitle && <p className="text-foreground/50 text-sm mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll("left")} className="hidden md:flex w-9 h-9 rounded-lg border border-border/30 items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => scroll("right")} className="hidden md:flex w-9 h-9 rounded-lg border border-border/30 items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          <a href={ctaHref} className="font-display text-xs tracking-wider text-primary uppercase hover:gap-2 inline-flex items-center gap-1 transition-all ml-2">
            {ctaLabel} <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {children}
      </div>
    </div>
  );
};

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero Banner ───────────────────────────────────── */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="relative z-10 container h-full flex items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block font-display text-[10px] tracking-[0.3em] text-primary uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
              Featured Drop
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-4">
              Tycoon Ultimate Pack
            </h1>
            <p className="text-foreground/70 text-base md:text-lg max-w-lg mb-6 leading-relaxed">
              Limited edition. Six NFTs with guaranteed UR or LR rarity. Includes Tycoon Club membership and exclusive title bonuses.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://market.cjcrace.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-widest px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase">
                <Sparkles className="w-4 h-4" /> Buy Now $5,200
              </a>
              <Link to="/nfts" className="font-display text-sm tracking-widest text-foreground/80 hover:text-primary uppercase inline-flex items-center gap-1 transition-colors">
                Learn About Packs <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="container py-16">
        {/* ── Stats Bar ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left rounded-xl border border-border/30 bg-card/20 p-5">
              <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-1">
                {s.label}
              </p>
              <p className="font-display text-xl md:text-2xl font-bold text-gradient-gold">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Mystery Boxes ──────────────────────────────── */}
        <ScrollRow title="Mystery Boxes" subtitle="Eight tiers from $179 to $5,200. All include Tycoon Club membership." ctaLabel="View All Packs" ctaHref="/nfts">
          {packs.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[240px] rounded-xl border overflow-hidden snap-start hover:border-primary/30 transition-all relative group"
              style={{
                background: `linear-gradient(135deg, ${p.color}15 0%, rgba(15,23,42,0.8) 60%)`,
                borderColor: p.featured ? `${p.color}50` : "rgba(255,255,255,0.1)",
              }}
            >
              {p.featured && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary/90 text-background text-[9px] font-display font-black tracking-widest uppercase">
                  Hot
                </div>
              )}
              <div className="h-32 flex items-center justify-center" style={{ background: `${p.color}10` }}>
                <Package className="w-16 h-16 group-hover:scale-110 transition-transform" style={{ color: p.color }} strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <h4 className="font-display text-base font-bold text-foreground mb-1">{p.name}</h4>
                <p className="text-foreground/40 text-xs mb-3">{p.contents}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border/20">
                  <span className="font-display text-lg font-bold" style={{ color: p.color }}>{p.price}</span>
                  <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollRow>

        {/* ── Racehorses ─────────────────────────────────── */}
        <ScrollRow title="Racehorses" subtitle="Top-rated horses listed by collectors and breeders." ctaLabel="View All Horses" ctaHref="https://market.cjcrace.io">
          {horses.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[280px] rounded-xl border border-white/10 hover:border-primary/30 transition-colors snap-start overflow-hidden"
              style={{ background: "rgba(15,23,42,0.7)" }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={h.img} alt={h.breed} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black font-display backdrop-blur-sm" style={{ background: `${h.rarityColor}40`, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                  {h.rarity}
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-[10px] font-display text-primary">#{h.id}</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-display text-sm font-bold text-foreground">{h.breed}</h4>
                  <span className="text-foreground/40 text-xs">Lvl {h.level}</span>
                </div>
                <p className="text-foreground/40 text-xs mb-3">{h.gender}</p>
                <div className="flex items-center justify-between gap-1.5 mb-4">
                  <AttrCircle value={h.energy} color="#F59E0B" icon={Zap} label="Energy" />
                  <AttrCircle value={h.speed} color="#10B981" icon={Wind} label="Speed" />
                  <AttrCircle value={h.burst} color="#10B981" icon={Flame} label="Burst" />
                  <AttrCircle value={h.stamina} color="#60A5FA" icon={Hourglass} label="Stamina" />
                  <AttrCircle value={h.spirit} color="#EC4899" icon={Heart} label="Spirit" />
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/20">
                  <span className="text-foreground/40 text-[10px] uppercase tracking-wider font-display">Price</span>
                  <span className="font-display text-base font-bold text-foreground">{h.price} USDT</span>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollRow>

        {/* ── Jockeys ────────────────────────────────────── */}
        <ScrollRow title="Jockeys" subtitle="Master technicians who ride your horses to victory." ctaLabel="View All Jockeys" ctaHref="https://market.cjcrace.io">
          {jockeys.map((j) => (
            <motion.div
              key={j.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[240px] rounded-xl border border-white/10 hover:border-primary/30 transition-colors snap-start p-5"
              style={{ background: "rgba(15,23,42,0.7)" }}
            >
              <div className="flex items-center justify-center w-full h-28 rounded-lg mb-4" style={{ background: `${j.rarityColor}15` }}>
                <span className="text-5xl">{j.emoji}</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display text-sm font-bold text-foreground">{j.name}</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-black font-display" style={{ background: `${j.rarityColor}20`, color: j.rarityColor }}>{j.rarity}</span>
              </div>
              <div className="space-y-1.5 text-xs mb-4">
                <div className="flex justify-between"><span className="text-foreground/50">Technique</span><span className="text-foreground font-mono">{j.technique}</span></div>
                <div className="flex justify-between"><span className="text-foreground/50">Balance</span><span className="text-foreground font-mono">{j.balance}</span></div>
                <div className="flex justify-between"><span className="text-foreground/50">Weight</span><span className="text-foreground font-mono">{j.weight}kg</span></div>
                <div className="flex justify-between"><span className="text-foreground/50">Level</span><span className="text-foreground font-mono">{j.level}</span></div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border/20">
                <span className="text-foreground/40 text-[10px] uppercase tracking-wider font-display">Price</span>
                <span className="font-display text-sm font-bold text-foreground">{j.price} USDT</span>
              </div>
            </motion.div>
          ))}
        </ScrollRow>

        {/* ── Items ──────────────────────────────────────── */}
        <ScrollRow title="Items" subtitle="12 item types. Equip up to 4 per race set." ctaLabel="View All Items" ctaHref="https://market.cjcrace.io">
          {items.map((it) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[200px] rounded-xl border border-white/10 hover:border-primary/30 transition-colors snap-start p-5 text-center"
              style={{ background: "rgba(15,23,42,0.7)" }}
            >
              <div className="text-5xl mb-3">{it.emoji}</div>
              <h4 className="font-display text-sm font-bold text-foreground mb-1">{it.name}</h4>
              <span className="inline-block px-2 py-0.5 rounded text-[9px] font-black font-display mb-3" style={{ background: `${it.rarityColor}20`, color: it.rarityColor }}>{it.rarity}</span>
              <p className="text-primary text-xs mb-4 font-display tracking-wider">{it.boost}</p>
              <div className="pt-3 border-t border-border/20">
                <span className="font-display text-sm font-bold text-foreground">{it.price} USDT</span>
              </div>
            </motion.div>
          ))}
        </ScrollRow>

        {/* ── Trending ───────────────────────────────────── */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Trending This Week
              </h2>
              <p className="text-foreground/50 text-sm mt-1">Recent high-value sales across the marketplace.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border/30 overflow-hidden">
            <div className="hidden md:grid grid-cols-[1fr_2fr_1.5fr_1fr_1fr] gap-4 p-4 border-b border-border/30 bg-card/30 text-[10px] font-display tracking-widest text-foreground/40 uppercase">
              <div>Type</div>
              <div>Item</div>
              <div>Buyer</div>
              <div>Price</div>
              <div>Time</div>
            </div>
            {trending.map((t, i) => (
              <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_2fr_1.5fr_1fr_1fr] gap-2 md:gap-4 p-4 border-b border-border/20 last:border-0 hover:bg-primary/5 transition-colors text-sm">
                <span className="text-primary font-display tracking-wider text-xs uppercase">{t.type}</span>
                <span className="text-foreground font-display">{t.name}</span>
                <span className="text-foreground/60 font-mono text-xs">{t.buyer}</span>
                <span className="font-display font-bold text-foreground">{t.price} USDT</span>
                <span className="text-foreground/40 text-xs">{t.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tycoon Club Promo ──────────────────────────── */}
        <div
          className="rounded-2xl border border-primary/20 p-10 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,14,0.95) 50%, rgba(201,168,76,0.04) 100%)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-primary" />
              <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">Tycoon Club</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Every Pack Includes Membership
            </h2>
            <p className="text-foreground/60 text-sm md:text-base max-w-xl leading-relaxed">
              Unlock Champion Stakes, League Challenges, the Day Spa, the Farm, and the Tycoon Club reward-sharing structure the moment you open your first Mystery Box.
            </p>
          </div>
          <Link
            to="/nfts"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-7 py-3.5 rounded-lg transition-colors uppercase whitespace-nowrap"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Connect Wallet Note ────────────────────────── */}
        <div className="mt-16 text-center">
          <p className="text-foreground/40 text-xs mb-3 font-display tracking-widest uppercase">Ready to buy?</p>
          <a
            href="https://market.cjcrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary/40 text-primary font-display text-sm tracking-wider px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors uppercase"
          >
            <Wallet className="w-4 h-4" /> Connect Wallet & Trade
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Marketplace;
