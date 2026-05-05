import AppLayout from "@/components/app/AppLayout";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Trophy,
  Crown,
  TrendingUp,
  Package,
  ChevronRight,
  Zap,
  Wind,
  Flame,
  Hourglass,
  Heart,
} from "lucide-react";
import horse1 from "@/assets/horses/1.webp";
import horse2 from "@/assets/horses/2.webp";

const quickStats = [
  { label: "CJC Balance", value: "12,450", sub: "≈ 124.50 USDT", color: "#C9A84C" },
  { label: "Active NFTs", value: "23", sub: "Horses, Jockeys, Items", color: "#60A5FA" },
  { label: "Total Earnings", value: "8,932 CJC", sub: "+1,240 this week", color: "#10B981" },
  { label: "Tycoon Tier", value: "Gold", sub: "2-Star Member", color: "#F59E0B" },
];

const featuredDrops = [
  { name: "Tycoon Ultimate Pack", price: "$5,200", color: "#C9A84C", desc: "6+ NFTs, guaranteed UR/LR" },
  { name: "Prime Pack", price: "$1,499", color: "#F59E0B", desc: "3 horses + 2 jockeys + 4 items" },
  { name: "Welcome Pack", price: "$179", color: "#9CA3AF", desc: "1H + 1J + 1I, perfect entry" },
];

const recentActivity = [
  { type: "Race Won", detail: "Champion Stakes #4892", amount: "+2,500 CJC", time: "12 min ago" },
  { type: "NFT Listed", detail: "Akhal-Teke #1490", amount: "$2,288 USDT", time: "2 hours ago" },
  { type: "Day Spa", detail: "Spa A income collected", amount: "+450 CJC", time: "5 hours ago" },
  { type: "Race Lost", detail: "League Challenge", amount: "+45 points", time: "1 day ago" },
];

const featuredHorses = [
  { id: "1490", img: horse1, breed: "Akhal-Teke", level: 52, rarity: "UR", color: "#EF4444", price: "2,288.00" },
  { id: "1484", img: horse2, breed: "Friesian", level: 60, rarity: "UR", color: "#EF4444", price: "2,388.00" },
];

const AppHome = () => {
  return (
    <AppLayout pageTitle="Welcome back" pageSubtitle="Race, earn and manage your stable.">
      {/* ── Quick Stats ──────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border/30 bg-card/30 p-5"
            style={{ background: `linear-gradient(135deg, ${s.color}08, rgba(15,23,42,0.4))` }}
          >
            <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">
              {s.label}
            </p>
            <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{s.value}</p>
            <p className="text-foreground/40 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* ── Featured Drops ──────────────────────────────── */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Featured Drops
          </h2>
          <Link to="/app/market" className="text-primary text-xs font-display tracking-wider uppercase hover:gap-2 inline-flex items-center gap-1 transition-all">
            View All <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredDrops.map((d) => (
            <div
              key={d.name}
              className="rounded-xl border p-6 hover:border-primary/30 transition-colors cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, ${d.color}10, rgba(15,23,42,0.6))`,
                borderColor: `${d.color}30`,
              }}
            >
              <Package className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" style={{ color: d.color }} strokeWidth={1.5} />
              <h3 className="font-display text-base font-bold text-foreground mb-1">{d.name}</h3>
              <p className="text-foreground/50 text-xs mb-4">{d.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border/20">
                <span className="font-display text-lg font-bold" style={{ color: d.color }}>{d.price}</span>
                <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Two-Column: Featured Horses + Recent Activity ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Horses */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Trending Horses
            </h2>
            <Link to="/app/market" className="text-primary text-xs font-display tracking-wider uppercase hover:gap-2 inline-flex items-center gap-1 transition-all">
              Browse Market <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredHorses.map((h) => (
              <div key={h.id} className="rounded-xl border border-border/30 bg-card/30 overflow-hidden hover:border-primary/30 transition-colors group cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <img src={h.img} alt={h.breed} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black font-display backdrop-blur-sm" style={{ background: `${h.color}40`, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                    {h.rarity}
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-[10px] font-display text-primary">#{h.id}</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-sm font-bold text-foreground">{h.breed}</h4>
                    <span className="text-foreground/40 text-xs">Lvl {h.level}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border/20">
                    <span className="text-foreground/40 text-[10px] uppercase tracking-wider font-display">Price</span>
                    <span className="font-display text-base font-bold text-foreground">{h.price} USDT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              Recent Activity
            </h2>
            <Link to="/app/records" className="text-primary text-xs font-display tracking-wider uppercase hover:gap-2 inline-flex items-center gap-1 transition-all">
              All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="rounded-xl border border-border/30 bg-card/30 p-2">
            {recentActivity.map((a, i) => (
              <div key={i} className="p-3 border-b border-border/10 last:border-0 hover:bg-primary/5 transition-colors rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-xs text-primary uppercase tracking-wider">{a.type}</span>
                  <span className="font-display text-xs font-bold text-foreground">{a.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/60 text-xs">{a.detail}</span>
                  <span className="text-foreground/40 text-[10px]">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tycoon Promo ──────────────────────────────────── */}
      <div className="mt-10 rounded-2xl border border-primary/20 p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(10,10,14,0.95) 50%, rgba(201,168,76,0.04))" }}>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-primary" />
            <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase">Tycoon Club</span>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-2">You earned 240 points this week</h3>
          <p className="text-foreground/60 text-sm">Refer 1 more buddy to unlock the Full Payout multiplier.</p>
        </div>
        <Link to="/app/tycoon" className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase whitespace-nowrap">
          View Tycoon <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </AppLayout>
  );
};

export default AppHome;
