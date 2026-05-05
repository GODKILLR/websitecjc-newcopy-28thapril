import AppLayout from "@/components/app/AppLayout";
import { useState } from "react";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Zap,
  Wind,
  Flame,
  Hourglass,
  Heart,
  ChevronDown,
} from "lucide-react";
import horse1 from "@/assets/horses/1.webp";
import horse2 from "@/assets/horses/2.webp";
import horse3 from "@/assets/horses/3.webp";
import horse4 from "@/assets/horses/4.webp";

const categories = ["All", "Racehorses", "Jockeys", "Items", "Mystery Boxes"];
const rarities = ["All", "N", "R", "SR", "SSR", "UR", "LR"];
const sortOptions = ["Recently Listed", "Price: Low to High", "Price: High to Low", "Highest Level"];

const listings = [
  { id: "1490", img: horse1, type: "Racehorse", breed: "Akhal-Teke", level: 52, rarity: "UR", color: "#EF4444", price: "2,288.00", energy: 10, speed: 1209, burst: 1250, stamina: 1254, spirit: 1254 },
  { id: "1484", img: horse2, type: "Racehorse", breed: "Friesian", level: 60, rarity: "UR", color: "#EF4444", price: "2,388.00", energy: 10, speed: 1301, burst: 1281, stamina: 1295, spirit: 1284 },
  { id: "781", img: horse3, type: "Racehorse", breed: "Black Forest", level: 60, rarity: "UR", color: "#EF4444", price: "1,280.00", energy: 10, speed: 1322, burst: 1276, stamina: 1296, spirit: 1343 },
  { id: "220", img: horse4, type: "Racehorse", breed: "Morgan", level: 60, rarity: "UR", color: "#EF4444", price: "1,388.00", energy: 10, speed: 1296, burst: 1291, stamina: 1330, spirit: 1306 },
  { id: "2104", img: horse1, type: "Racehorse", breed: "Arabian", level: 45, rarity: "SSR", color: "#F59E0B", price: "899.00", energy: 9, speed: 1102, burst: 1145, stamina: 1098, spirit: 1130 },
  { id: "3142", img: horse2, type: "Racehorse", breed: "Thoroughbred", level: 38, rarity: "SR", color: "#A78BFA", price: "499.00", energy: 8, speed: 980, burst: 945, stamina: 1010, spirit: 968 },
  { id: "4521", img: horse3, type: "Racehorse", breed: "Mustang", level: 30, rarity: "R", color: "#60A5FA", price: "229.00", energy: 7, speed: 820, burst: 805, stamina: 845, spirit: 812 },
  { id: "5892", img: horse4, type: "Racehorse", breed: "Quarter Horse", level: 22, rarity: "N", color: "#9CA3AF", price: "89.00", energy: 6, speed: 650, burst: 645, stamina: 680, spirit: 635 },
];

const AttrCircle = ({ value, color, icon: Icon, label }: { value: number; color: string; icon: React.ComponentType<{ className?: string }>; label: string }) => (
  <div className="flex flex-col items-center gap-0.5" title={label}>
    <span className="text-[9px] font-bold text-foreground/80 font-display">{value.toLocaleString()}</span>
    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: color, opacity: 0.9 }}>
      <Icon className="w-2.5 h-2.5 text-white" />
    </div>
  </div>
);

const AppMarket = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRarity, setActiveRarity] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <AppLayout pageTitle="Marketplace" pageSubtitle="Browse, filter, and buy NFTs.">
      {/* ── Search & Sort bar ──────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input
            type="text"
            placeholder="Search by ID, breed, or trait..."
            className="w-full bg-card/30 border border-border/30 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:border-primary/40 transition-colors placeholder:text-foreground/30"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center justify-center gap-2 bg-card/30 border border-border/30 rounded-lg px-4 py-3 text-sm hover:border-primary/40 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
        <div className="relative hidden md:block">
          <select className="appearance-none bg-card/30 border border-border/30 rounded-lg pl-4 pr-10 py-3 text-sm outline-none focus:border-primary/40 transition-colors">
            {sortOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
        </div>
      </div>

      {/* ── Filter chips ───────────────────────────────── */}
      <div className={`${showFilters ? "block" : "hidden md:block"} mb-6`}>
        <div className="mb-4">
          <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">Type</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-display tracking-wider uppercase transition-colors ${
                  activeCategory === c ? "bg-primary text-background" : "bg-card/30 border border-border/30 text-foreground/60 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">Rarity</p>
          <div className="flex flex-wrap gap-2">
            {rarities.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRarity(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold transition-colors ${
                  activeRarity === r ? "bg-primary text-background" : "bg-card/30 border border-border/30 text-foreground/60 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Result count ───────────────────────────────── */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-foreground/50 text-sm">
          Showing <span className="text-foreground font-bold">{listings.length}</span> of <span className="text-foreground font-bold">8,421</span> listings
        </p>
      </div>

      {/* ── Grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {listings.map((l) => (
          <div key={l.id} className="rounded-xl border border-white/10 hover:border-primary/30 transition-colors overflow-hidden cursor-pointer group" style={{ background: "rgba(15,23,42,0.6)" }}>
            <div className="relative h-44 overflow-hidden">
              <img src={l.img} alt={l.breed} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black font-display backdrop-blur-sm" style={{ background: `${l.color}40`, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                {l.rarity}
              </div>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-[10px] font-display text-primary">#{l.id}</div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-display text-sm font-bold text-foreground truncate">{l.breed}</h4>
                <span className="text-foreground/40 text-xs shrink-0">Lvl {l.level}</span>
              </div>
              <p className="text-foreground/40 text-xs mb-3">{l.type}</p>
              <div className="flex items-center justify-between gap-1.5 mb-4">
                <AttrCircle value={l.energy} color="#F59E0B" icon={Zap} label="Energy" />
                <AttrCircle value={l.speed} color="#10B981" icon={Wind} label="Speed" />
                <AttrCircle value={l.burst} color="#10B981" icon={Flame} label="Burst" />
                <AttrCircle value={l.stamina} color="#60A5FA" icon={Hourglass} label="Stamina" />
                <AttrCircle value={l.spirit} color="#EC4899" icon={Heart} label="Spirit" />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border/20">
                <span className="text-foreground/40 text-[10px] uppercase tracking-wider font-display">Price</span>
                <span className="font-display text-base font-bold text-foreground">{l.price} USDT</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Load more ──────────────────────────────────── */}
      <div className="text-center mt-10">
        <button className="border border-primary/40 text-primary font-display text-sm tracking-wider px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors uppercase">
          Load More
        </button>
      </div>
    </AppLayout>
  );
};

export default AppMarket;
