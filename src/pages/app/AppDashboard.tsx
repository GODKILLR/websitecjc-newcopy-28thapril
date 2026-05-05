import AppLayout from "@/components/app/AppLayout";
import { useState } from "react";
import { Trophy, Star, Sparkles, Award, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const tabs = ["Overview", "Activities", "Achievements", "Sale History"];

const stats = [
  { label: "Total Earnings", value: "8,932 CJC", change: "+12.4%", up: true },
  { label: "Race Win Rate", value: "67%", change: "+3.2%", up: true },
  { label: "Total Races", value: "428", change: "+24", up: true },
  { label: "Day Spa Income", value: "1,240 CJC", change: "-5.1%", up: false },
];

const activities = [
  { type: "Race Reward", detail: "Champion Stakes #4892, 1st place", amount: "+2,500 CJC", time: "12 min ago", color: "#10B981" },
  { type: "Day Spa Income", detail: "Spa A operating fees collected", amount: "+450 CJC", time: "5 hours ago", color: "#60A5FA" },
  { type: "Race Reward", detail: "League Challenge, 4th place", amount: "+180 CJC", time: "1 day ago", color: "#10B981" },
  { type: "NFT Listed", detail: "Akhal-Teke #1490 listed at 2,288 USDT", amount: "—", time: "2 days ago", color: "#A78BFA" },
  { type: "Day Spa Expense", detail: "Horse condition restored at Spa B", amount: "-120 CJC", time: "3 days ago", color: "#EF4444" },
  { type: "Race Reward", detail: "Grand Master Cup, 3rd place", amount: "+5,200 CJC", time: "5 days ago", color: "#F59E0B" },
];

const achievements = [
  { name: "First Win", desc: "Win your first Champion Stakes race", earned: true, icon: "🏆", color: "#F59E0B" },
  { name: "Stable Builder", desc: "Own 10 NFTs simultaneously", earned: true, icon: "🐎", color: "#A78BFA" },
  { name: "Consistent Racer", desc: "Race 100 League Challenges", earned: true, icon: "⭐", color: "#60A5FA" },
  { name: "Day Spa Tycoon", desc: "Win 10 Day Spa auctions", earned: false, icon: "💎", color: "#9CA3AF" },
  { name: "Grand Champion", desc: "Win a Grand Master Cup", earned: false, icon: "👑", color: "#9CA3AF" },
  { name: "Legendary Owner", desc: "Own an LR rarity NFT", earned: false, icon: "🌟", color: "#9CA3AF" },
];

const sales = [
  { item: "Friesian #1484", buyer: "0xa12...4f8", price: "2,388.00", date: "Apr 28, 2026" },
  { item: "Whip Item LR", buyer: "0x891...c2d", price: "489.00", date: "Apr 25, 2026" },
  { item: "Jockey #J-099", buyer: "0xf45...92a", price: "1,180.00", date: "Apr 22, 2026" },
];

const AppDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <AppLayout pageTitle="Dashboard" pageSubtitle="Your performance, activity, and achievements.">
      {/* ── Stats grid ─────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/30 bg-card/30 p-5">
            <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">
              {s.label}
            </p>
            <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">{s.value}</p>
            <div className={`flex items-center gap-1 text-xs ${s.up ? "text-green-400" : "text-red-400"}`}>
              {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {s.change}
              <span className="text-foreground/30">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Tabs ───────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border/30 pb-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-lg text-xs font-display tracking-wider uppercase transition-colors ${
              activeTab === t ? "bg-primary text-background" : "text-foreground/60 hover:text-foreground hover:bg-card/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Overview ───────────────────────────────────── */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-border/30 bg-card/30 p-6">
            <h3 className="font-display text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> Earnings Trend
            </h3>
            {/* Mock chart bars */}
            <div className="flex items-end gap-2 h-48">
              {[40, 65, 50, 80, 70, 95, 60, 85, 75, 90, 100, 88].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm transition-all hover:opacity-80"
                    style={{ height: `${h}%`, background: "linear-gradient(180deg, rgba(201,168,76,0.6), rgba(201,168,76,0.2))" }}
                  />
                  <span className="text-[9px] text-foreground/30 font-display">M{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border/30 bg-card/30 p-6">
            <h3 className="font-display text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" /> Best Race
            </h3>
            <p className="font-display text-3xl font-bold text-gradient-gold mb-1">5,200 CJC</p>
            <p className="text-foreground/50 text-sm mb-4">Grand Master Cup winner</p>
            <div className="space-y-2 pt-4 border-t border-border/20 text-sm">
              <div className="flex justify-between"><span className="text-foreground/50">Date</span><span className="text-foreground">Apr 23, 2026</span></div>
              <div className="flex justify-between"><span className="text-foreground/50">Distance</span><span className="text-foreground">Long 2400m</span></div>
              <div className="flex justify-between"><span className="text-foreground/50">Horse</span><span className="text-foreground">Friesian #1484</span></div>
            </div>
          </div>
        </div>
      )}

      {/* ── Activities ─────────────────────────────────── */}
      {activeTab === "Activities" && (
        <div className="rounded-xl border border-border/30 bg-card/30 overflow-hidden">
          {activities.map((a, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr_auto] gap-4 p-4 border-b border-border/20 last:border-0 hover:bg-primary/5 transition-colors items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${a.color}15`, border: `1px solid ${a.color}30` }}>
                <Trophy className="w-4 h-4" style={{ color: a.color }} />
              </div>
              <div>
                <p className="font-display text-sm text-foreground">{a.type}</p>
                <p className="text-foreground/50 text-xs">{a.detail}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-sm font-bold text-foreground">{a.amount}</p>
                <p className="text-foreground/40 text-[10px]">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Achievements ───────────────────────────────── */}
      {activeTab === "Achievements" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a) => (
            <div
              key={a.name}
              className={`rounded-xl border p-5 ${a.earned ? "" : "opacity-50"}`}
              style={{
                background: a.earned ? `linear-gradient(135deg, ${a.color}10, rgba(15,23,42,0.6))` : "rgba(15,23,42,0.4)",
                borderColor: a.earned ? `${a.color}40` : "rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <h4 className="font-display text-sm font-bold text-foreground mb-1">{a.name}</h4>
              <p className="text-foreground/50 text-xs mb-3">{a.desc}</p>
              <div className="pt-3 border-t border-border/20">
                {a.earned ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-display tracking-widest uppercase" style={{ color: a.color }}>
                    <Award className="w-3 h-3" /> Earned
                  </span>
                ) : (
                  <span className="text-[10px] font-display tracking-widest text-foreground/40 uppercase">Locked</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Sale History ────────────────────────────────── */}
      {activeTab === "Sale History" && (
        <div className="rounded-xl border border-border/30 overflow-hidden">
          <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 p-4 border-b border-border/30 bg-card/30 text-[10px] font-display tracking-widest text-foreground/40 uppercase">
            <div>Item</div><div>Buyer</div><div>Price</div><div>Date</div>
          </div>
          {sales.map((s, i) => (
            <div key={i} className="grid grid-cols-2 md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-2 md:gap-4 p-4 border-b border-border/20 last:border-0 text-sm">
              <span className="text-foreground font-display">{s.item}</span>
              <span className="text-foreground/60 font-mono text-xs">{s.buyer}</span>
              <span className="font-display font-bold text-foreground">{s.price} USDT</span>
              <span className="text-foreground/40 text-xs">{s.date}</span>
            </div>
          ))}
        </div>
      )}
    </AppLayout>
  );
};

export default AppDashboard;
