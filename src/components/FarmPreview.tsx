import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sprout, ShoppingCart, Timer, Package, Diamond, RotateCcw, Info } from "lucide-react";

const crops = [
  { id: 1, name: "Wheat", icon: "🌾", growTime: 30, baseYield: 5, rareChance: 10, color: "from-yellow-500/20 to-amber-500/20" },
  { id: 2, name: "Carrot", icon: "🥕", growTime: 45, baseYield: 5, rareChance: 15, color: "from-orange-500/20 to-red-500/20" },
  { id: 3, name: "Corn", icon: "🌽", growTime: 60, baseYield: 5, rareChance: 12, color: "from-yellow-400/20 to-yellow-600/20" },
  { id: 4, name: "Mystic Herb", icon: "🌿", growTime: 120, baseYield: 3, rareChance: 25, color: "from-emerald-500/20 to-green-500/20" },
];

const exchangeItems = [
  { name: "Energy Beer", cost: "5 Wheat + 3 Carrot", effect: "Restores Jockey HP", icon: "⚡" },
  { name: "Stamina Juice", cost: "3 Corn + 2 Mystic Herb", effect: "Boosts Stamina", icon: "🔋" },
  { name: "Speed Boost", cost: "10 Wheat", effect: "+10% Speed (1 race)", icon: "🚀" },
  { name: "Golden Carrot", cost: "5 Rare Carrots", effect: "Restores 3 Racehorse HP", icon: "🥕" },
];

const FarmPreview = () => {
  const [activeTab, setActiveTab] = useState("crops");
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [merchantTime, setMerchantTime] = useState({ hours: 8, minutes: 42 });
  const [fields, setFields] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setMerchantTime((prev) => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        return { hours: 24, minutes: 0 };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="farm">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-emerald-400 uppercase mb-4 block">
            Mini-Game
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            The Farm
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Cultivate crops and exchange harvests for valuable props. The Mystery Merchant visits daily for exclusive CJC coin deals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            {/* Header Stats */}
            <div className="grid grid-cols-3 border-b border-border/30">
              <div className="p-4 text-center border-r border-border/30">
                <Sprout className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-xs text-foreground/50">Fields</p>
                <p className="font-display text-xl font-bold text-emerald-400">{fields}/9</p>
              </div>
              <div className="p-4 text-center border-r border-border/30">
                <Timer className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-xs text-foreground/50">Merchant In</p>
                <p className="font-display text-lg">{merchantTime.hours}h {merchantTime.minutes}m</p>
              </div>
              <div className="p-4 text-center">
                <Package className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-xs text-foreground/50">Harvest</p>
                <p className="font-display text-lg">Ready!</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border/30">
              {["crops", "exchange", "merchant"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 font-display text-sm tracking-wider transition-all ${
                    activeTab === tab
                      ? "bg-emerald-500/10 text-emerald-400 border-b-2 border-emerald-400"
                      : "text-foreground/60 hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === "crops" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* Crop Selector */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm">Select Crop</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {crops.map((crop) => (
                        <button
                          key={crop.id}
                          onClick={() => setSelectedCrop(crop)}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            selectedCrop.id === crop.id
                              ? "bg-emerald-500/10 border-emerald-400/50"
                              : "glass-card border-border/30 hover:border-emerald-400/30"
                          }`}
                        >
                          <div className="text-2xl mb-2">{crop.icon}</div>
                          <p className="font-display text-sm">{crop.name}</p>
                          <div className="flex items-center gap-1 text-xs text-foreground/50">
                            <Timer className="w-3 h-3" />
                            {crop.growTime} min
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Crop Details */}
                  <div>
                    <motion.div
                      key={selectedCrop.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`glass-card p-6 h-full bg-gradient-to-br ${selectedCrop.color}`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl">{selectedCrop.icon}</div>
                        <div>
                          <p className="font-display text-xl">{selectedCrop.name}</p>
                          <p className="text-sm text-foreground/50">Grow Time: {selectedCrop.growTime} min</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 glass-card">
                          <span className="text-sm text-foreground/60">Base Yield</span>
                          <span className="font-display">{selectedCrop.baseYield} units</span>
                        </div>
                        <div className="flex items-center justify-between p-3 glass-card">
                          <span className="text-sm text-foreground/60">Rare Drop Chance</span>
                          <span className="font-display text-emerald-400">{selectedCrop.rareChance}%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 glass-card">
                          <span className="text-sm text-foreground/60">Instant Harvest</span>
                          <div className="flex items-center gap-1">
                            <Diamond className="w-4 h-4 text-cyan-400" />
                            <span className="font-display">5</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full mt-4 gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity">
                        Plant Crop
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === "exchange" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {exchangeItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="flex-1">
                          <p className="font-display text-sm">{item.name}</p>
                          <p className="text-xs text-foreground/50 mb-2">{item.effect}</p>
                          <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <RotateCcw className="w-3 h-3" />
                            {item.cost}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "merchant" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    🎩
                  </motion.div>
                  <h3 className="font-display text-xl mb-2">Mystery Merchant</h3>
                  <p className="text-foreground/60 max-w-md mx-auto mb-6">
                    The Mystery Merchant visits member farms daily with exclusive offers to exchange featured crops for CJC coins.
                  </p>

                  <div className="glass-card p-6 max-w-md mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Timer className="w-5 h-5 text-emerald-400" />
                      <span className="font-display text-lg">Next visit in {merchantTime.hours}h {merchantTime.minutes}m</span>
                    </div>
                    <div className="p-4 glass-card bg-emerald-500/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Today's Featured Crop</span>
                        <span className="font-display text-emerald-400">Mystic Herb</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Exchange Rate</span>
                        <span className="font-display">10 = 500 CJC</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-foreground/40">
                    <Info className="w-4 h-4" />
                    <span>Members only • Resets daily at 00:00 UTC</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmPreview;
