import AppLayout from "@/components/app/AppLayout";
import { Crown, Users, Star, Calendar, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const memberStats = [
  { label: "Personal Score", value: "2,400", sub: "100 points per box opened" },
  { label: "Active Buddies", value: "8", sub: "Direct referrals" },
  { label: "Pool Share", value: "0.024%", sub: "Of total payouts" },
  { label: "Tier", value: "2-Star", sub: "Gold member status" },
];

const upcomingPayouts = [
  { week: "Week 18", points: 450, payout: "33.75 USDT", status: "Pending" },
  { week: "Week 19", points: 380, payout: "28.50 USDT", status: "Pending" },
  { week: "Week 20", points: 520, payout: "39.00 USDT", status: "Pending" },
];

const referralBonus = {
  perReferral: "75 USDT",
  totalReferrals: 8,
  totalEarned: "600 USDT",
  pendingReferrals: 2,
};

const milestones = [
  { stars: 1, name: "Bronze", points: 1000, current: true, reward: "Bronze badge + Discord role", achieved: true },
  { stars: 2, name: "Silver", points: 5000, current: true, reward: "Silver badge + Up to 250 USDT/mo", achieved: true },
  { stars: 3, name: "Gold", points: 15000, current: false, reward: "Gold badge + Up to 500 USDT/mo + Merch", achieved: false },
  { stars: 4, name: "Platinum", points: 50000, current: false, reward: "Platinum + Revenue share + NFT drops", achieved: false },
  { stars: 5, name: "Diamond", points: 150000, current: false, reward: "Diamond + Co-creation rights", achieved: false },
];

const AppTycoon = () => {
  return (
    <AppLayout pageTitle="Tycoon Club" pageSubtitle="Membership benefits, points, and payouts.">
      {/* ── Hero Status Banner ────────────────────────── */}
      <div className="rounded-2xl border border-primary/30 p-6 md:p-8 mb-8" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(15,23,42,0.6) 50%, rgba(201,168,76,0.06))" }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-primary" />
              <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase">Active Member</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">2-Star Gold Member</h2>
            <p className="text-foreground/60 text-sm">Your Tycoon Club position activated April 2026</p>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < 2 ? "text-primary fill-primary" : "text-border"}`} />
            ))}
          </div>
        </div>

        {/* Progress to next tier */}
        <div className="mt-6 pt-6 border-t border-primary/20">
          <div className="flex items-center justify-between mb-2 text-xs">
            <span className="text-foreground/60">Progress to 3-Star Gold</span>
            <span className="text-primary font-display font-bold">2,400 / 15,000</span>
          </div>
          <div className="h-2 bg-card/40 rounded-full overflow-hidden">
            <div className="h-full gradient-gold rounded-full" style={{ width: "16%" }} />
          </div>
          <p className="text-foreground/40 text-xs mt-2">12,600 more points to unlock $500/mo Gold tier</p>
        </div>
      </div>

      {/* ── Member Stats ──────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {memberStats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/30 bg-card/30 p-5">
            <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">{s.label}</p>
            <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{s.value}</p>
            <p className="text-foreground/40 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* ── Two-column ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Referrals */}
        <div className="rounded-xl border border-border/30 bg-card/30 p-6">
          <h3 className="font-display text-base font-bold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" /> Member-Get-Member Referrals
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg bg-background/40 border border-border/20 p-4">
              <p className="text-foreground/40 text-xs mb-1">Per Referral</p>
              <p className="font-display text-lg font-bold text-primary">{referralBonus.perReferral}</p>
            </div>
            <div className="rounded-lg bg-background/40 border border-border/20 p-4">
              <p className="text-foreground/40 text-xs mb-1">Total Earned</p>
              <p className="font-display text-lg font-bold text-foreground">{referralBonus.totalEarned}</p>
            </div>
            <div className="rounded-lg bg-background/40 border border-border/20 p-4">
              <p className="text-foreground/40 text-xs mb-1">Active</p>
              <p className="font-display text-lg font-bold text-foreground">{referralBonus.totalReferrals}</p>
            </div>
            <div className="rounded-lg bg-background/40 border border-border/20 p-4">
              <p className="text-foreground/40 text-xs mb-1">Pending</p>
              <p className="font-display text-lg font-bold text-foreground">{referralBonus.pendingReferrals}</p>
            </div>
          </div>
          <button className="w-full gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Get Your Referral Link
          </button>
        </div>

        {/* Upcoming Payouts */}
        <div className="rounded-xl border border-border/30 bg-card/30 p-6">
          <h3 className="font-display text-base font-bold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" /> Upcoming Payouts
          </h3>
          <div className="space-y-3">
            {upcomingPayouts.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/40 border border-border/20">
                <div>
                  <p className="font-display text-sm text-foreground">{p.week}</p>
                  <p className="text-foreground/40 text-xs">{p.points} points</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-sm font-bold text-primary">{p.payout}</p>
                  <p className="text-foreground/40 text-[10px]">{p.status}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/40 text-xs mt-4">Next payout window opens in 3 days</p>
        </div>
      </div>

      {/* ── Milestone Tiers ───────────────────────────── */}
      <div className="rounded-xl border border-border/30 bg-card/30 p-6">
        <h3 className="font-display text-base font-bold text-foreground mb-6 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" /> Star Bonus Milestones
        </h3>
        <div className="space-y-3">
          {milestones.map((m) => (
            <div
              key={m.stars}
              className={`flex items-center gap-4 p-4 rounded-lg border ${
                m.achieved ? "border-primary/30 bg-primary/5" : "border-border/20 bg-background/30"
              }`}
            >
              <div className="flex items-center gap-1 shrink-0">
                {[...Array(m.stars)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${m.achieved ? "text-primary fill-primary" : "text-border"}`} />
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm font-bold text-foreground">
                  {m.stars}-Star {m.name}
                </p>
                <p className="text-foreground/50 text-xs truncate">{m.reward}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-display text-sm font-bold text-foreground">{m.points.toLocaleString()}</p>
                <p className="text-foreground/40 text-[10px]">points</p>
              </div>
              {m.achieved && (
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default AppTycoon;
