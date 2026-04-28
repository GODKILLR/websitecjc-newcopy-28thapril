import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Clock, Droplets, Crown, ChevronRight, AlertCircle } from "lucide-react";

const rarityMultipliers: Record<string, number> = {
  N: 1.0,
  R: 1.2,
  SR: 1.4,
  SSR: 1.6,
  UR: 1.8,
  LR: 2.0,
};

const rarityColors: Record<string, string> = {
  N: "border-gray-400 text-gray-400",
  R: "border-blue-400 text-blue-400",
  SR: "border-purple-400 text-purple-400",
  SSR: "border-cyan-400 text-cyan-400",
  UR: "border-amber-400 text-amber-400",
  LR: "border-rose-500 text-rose-500",
};

const DaySpa = () => {
  const [baseFee, setBaseFee] = useState(20);
  const [selectedRarity, setSelectedRarity] = useState("SR");
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 45, seconds: 30 });
  const [auctionPhase, setAuctionPhase] = useState(true);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        setAuctionPhase(false);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculatedFee = Math.round(baseFee * rarityMultipliers[selectedRarity]);

  return (
    <section className="py-24 relative overflow-hidden" id="day-spa">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan-400 uppercase mb-4 block">
            Exclusive Feature
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            Run the Spa. Collect the Fees.
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Bid for spa operating windows. Set your washing fee. Every member who restores their horse pays you. Two spas. Continuous 4 hour shifts. Real CJC Coin earnings every cycle.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            {/* Status Banner */}
            <div className="p-4 border-b border-border/30 bg-gradient-to-r from-cyan-500/10 to-transparent">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${auctionPhase ? "bg-cyan-500/20 text-cyan-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                    {auctionPhase ? <Clock className="w-5 h-5" /> : <Droplets className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-display text-sm">
                      {auctionPhase ? "Auction in Progress" : "Day Spa Operating"}
                    </p>
                    <p className="text-xs text-foreground/50">
                      {auctionPhase ? "Bidding ends in" : "Current operator:"}
                    </p>
                  </div>
                </div>

                {auctionPhase ? (
                  <div className="flex items-center gap-2 font-display text-cyan-400">
                    <Clock className="w-4 h-4" />
                    <span>{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-primary" />
                    <span className="font-display text-sm">RacingKing</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Left: Auction/Bidding */}
              <div>
                <h3 className="font-display text-sm mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {auctionPhase ? "Place Your Bid" : "Next Auction In"}
                </h3>

                {auctionPhase ? (
                  <div className="space-y-4">
                    <div className="glass-card p-4">
                      <p className="text-xs text-foreground/50 mb-2">Current Highest Bid</p>
                      <p className="font-display text-2xl font-bold text-gradient-gold">2,450 CJC</p>
                      <p className="text-xs text-foreground/40 mt-1">by SpeedDemon99</p>
                    </div>

                    <div className="glass-card p-4">
                      <p className="text-xs text-foreground/50 mb-2">Set Basic Washing Fee</p>
                      <input
                        type="number"
                        value={baseFee}
                        onChange={(e) => setBaseFee(Number(e.target.value))}
                        min={20}
                        className="w-full bg-card/40 border border-border/50 rounded-lg px-4 py-3 font-display mb-3"
                      />
                      <p className="text-xs text-foreground/40">
                        Min: 20 CJC • Buyout: 24,000 CJC
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Link to="/download" className="flex-1 gradient-gold text-primary-foreground font-display text-sm py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
                        Place Bid
                      </Link>
                      <button className="glass-card px-4 py-3 rounded-lg hover:border-primary/50 transition-colors">
                        Buyout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="glass-card p-4 text-center">
                      <p className="text-xs text-foreground/50 mb-2">Time Until Next Auction</p>
                      <div className="flex items-center justify-center gap-2 font-display text-2xl text-cyan-400">
                        <Clock className="w-6 h-6" />
                        <span>2h 15m</span>
                      </div>
                    </div>

                    <div className="glass-card p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm">Next Auction Start</span>
                        <span className="font-display text-sm text-primary">14:00 UTC</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Duration</span>
                        <span className="font-display text-sm">90 minutes</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Fee Calculator */}
              <div>
                <h3 className="font-display text-sm mb-4 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  Washing Fee Calculator
                </h3>

                <div className="glass-card p-4 mb-4">
                  <p className="text-xs text-foreground/50 mb-3">Select Racehorse Rarity</p>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.keys(rarityMultipliers).map((rarity) => (
                      <button
                        key={rarity}
                        onClick={() => setSelectedRarity(rarity)}
                        className={`p-2 rounded-lg border transition-all text-sm font-display ${
                          selectedRarity === rarity
                            ? `bg-primary/20 border-primary ${rarityColors[rarity]}`
                            : "border-border/30 text-foreground/60 hover:border-primary/30"
                        }`}
                      >
                        {rarity}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-4">
                  <p className="text-xs text-foreground/50 mb-2">Current Settings</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">Base Fee</span>
                      <span className="font-display">{baseFee} CJC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">Rarity Multiplier</span>
                      <span className="font-display">×{rarityMultipliers[selectedRarity]}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/30">
                      <span className="font-display text-sm">Total Fee</span>
                      <span className="font-display text-xl font-bold text-cyan-400">{calculatedFee} CJC</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <p className="text-xs text-cyan-400/80">
                    Each wash takes 3 minutes and restores full condition. You can race while washing.
                  </p>
                </div>
              </div>
            </div>

            {/* Operator Privileges */}
            <div className="p-6 border-t border-border/30 bg-gradient-to-r from-primary/5 to-transparent">
              <h3 className="font-display text-sm mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4 text-primary" />
                Operator Privileges
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card p-4">
                  <p className="text-sm font-display mb-1">Auto-Restore</p>
                  <p className="text-xs text-foreground/50">All your horses auto-restore at period start/end</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-sm font-display mb-1">Unlimited Washes</p>
                  <p className="text-xs text-foreground/50">Free manual restorations during operation</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-sm font-display mb-1">Fee Collection</p>
                  <p className="text-xs text-foreground/50">Collect all washing fees from other members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaySpa;
