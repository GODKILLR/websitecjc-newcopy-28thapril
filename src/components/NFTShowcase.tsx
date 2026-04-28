import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Clock, Sparkles } from "lucide-react";

// Mock NFT data based on the game mechanics from the DOCX
const mockNFTs = {
  recentSales: [
    { id: 1, name: "Thunder Bolt", type: "Racehorse", rarity: "UR", price: 2450, currency: "CJC", time: "2m ago", image: "🐎", color: "from-purple-500/20 to-pink-500/20" },
    { id: 2, name: "Silver Star", type: "Jockey", rarity: "SSR", price: 890, currency: "CJC", time: "5m ago", image: "🏇", color: "from-blue-500/20 to-cyan-500/20" },
    { id: 3, name: "Golden Whip", type: "Item", rarity: "SR", price: 320, currency: "CJC", time: "12m ago", image: "🎋", color: "from-amber-500/20 to-yellow-500/20" },
    { id: 4, name: "Midnight Runner", type: "Racehorse", rarity: "LR", price: 8500, currency: "CJC", time: "18m ago", image: "🐎", color: "from-rose-500/20 to-red-500/20" },
  ],
  featured: [
    { id: 5, name: "Celestial Champion", type: "Racehorse", rarity: "LR", attributes: { speed: 98, burst: 95, stamina: 92 }, price: 15200, currency: "USDT", image: "🐎", badge: "Legendary" },
    { id: 6, name: "Master Jockey Chen", type: "Jockey", rarity: "UR", attributes: { technique: 96, balance: 94 }, price: 4200, currency: "USDT", image: "🏇", badge: "Ultra Rare" },
    { id: 7, name: "Mystic Saddle", type: "Item", rarity: "SSR", attributes: { boost: 88 }, price: 1500, currency: "USDT", image: "🎋", badge: "Super Rare" },
  ],
  newListings: [
    { id: 8, name: "Storm Chaser", type: "Racehorse", rarity: "SR", price: 680, currency: "CJC", listed: "Just now", image: "🐎" },
    { id: 9, name: "Lightning Jockey", type: "Jockey", rarity: "R", price: 245, currency: "CJC", listed: "2m ago", image: "🏇" },
    { id: 10, name: "Energy Drink x10", type: "Item", rarity: "N", price: 45, currency: "CJC", listed: "5m ago", image: "⚡" },
  ],
};

const rarityColors: Record<string, string> = {
  N: "text-gray-400 border-gray-400/30",
  R: "text-blue-400 border-blue-400/30",
  SR: "text-purple-400 border-purple-400/30",
  SSR: "text-cyan-400 border-cyan-400/30",
  UR: "text-amber-400 border-amber-400/30",
  LR: "text-rose-500 border-rose-500/30",
};

const rarityBg: Record<string, string> = {
  N: "from-gray-500/10 to-gray-600/10",
  R: "from-blue-500/10 to-blue-600/10",
  SR: "from-purple-500/10 to-purple-600/10",
  SSR: "from-cyan-500/10 to-cyan-600/10",
  UR: "from-amber-500/10 to-amber-600/10",
  LR: "from-rose-500/10 to-rose-600/10",
};

const tabs = [
  { id: "featured", label: "Featured", icon: Sparkles },
  { id: "sales", label: "Recent Sales", icon: TrendingUp },
  { id: "listings", label: "New Listings", icon: Clock },
];

const NFTShowcase = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const featuredNFT = mockNFTs.featured[currentIndex];

  useEffect(() => {
    if (!autoPlay || activeTab !== "featured") return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockNFTs.featured.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, activeTab]);

  const nextNFT = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % mockNFTs.featured.length);
  };

  const prevNFT = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + mockNFTs.featured.length) % mockNFTs.featured.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            NFT Marketplace
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            Own Your Champions
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Discover unique Racehorse, Jockey, and Item NFTs. Trade, upgrade, and dominate the track with rare collectibles.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-display text-xs sm:text-sm tracking-wider transition-all ${
                activeTab === tab.id
                  ? "gradient-gold text-primary-foreground"
                  : "glass-card text-foreground/70 hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "featured" && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card p-6 sm:p-8 md:p-12 relative overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${rarityBg[featuredNFT.rarity]} opacity-50`} />

                <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* NFT Display */}
                  <div className="relative">
                    <motion.div
                      key={featuredNFT.id}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => {
                        setAutoPlay(false);
                        if (info.offset.x < -60) nextNFT();
                        else if (info.offset.x > 60) prevNFT();
                      }}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-square glass-card rounded-2xl flex items-center justify-center text-7xl sm:text-8xl relative overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                      <motion.span
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="pointer-events-none"
                      >
                        {featuredNFT.image}
                      </motion.span>

                      {/* Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${rarityColors[featuredNFT.rarity]} bg-card/80 text-xs font-display pointer-events-none`}>
                        {featuredNFT.rarity}
                      </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-2 mt-4">
                      <button
                        onClick={prevNFT}
                        aria-label="Previous NFT"
                        className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full glass-card hover:border-primary/50 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div className="flex items-center">
                        {mockNFTs.featured.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setAutoPlay(false); setCurrentIndex(i); }}
                            aria-label={`Go to NFT ${i + 1}`}
                            className="p-2 group"
                          >
                            <span className={`block h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-6" : "bg-foreground/20 w-2 group-hover:bg-foreground/40"}`} />
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={nextNFT}
                        aria-label="Next NFT"
                        className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full glass-card hover:border-primary/50 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* NFT Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-display">{featuredNFT.type}</span>
                      <span className="text-foreground/50 text-xs">{featuredNFT.badge}</span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{featuredNFT.name}</h3>

                    {/* Attributes */}
                    <div className="space-y-3 mb-6">
                      {Object.entries(featuredNFT.attributes).map(([attr, value]) => (
                        <div key={attr} className="flex items-center gap-4">
                          <span className="text-sm text-foreground/60 capitalize w-24">{attr}</span>
                          <div className="flex-1 h-2 bg-card/40 rounded-full overflow-hidden">
                            <motion.div
                              key={featuredNFT.id + attr}
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="h-full gradient-gold rounded-full"
                            />
                          </div>
                          <span className="text-sm font-display text-primary w-10">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 glass-card rounded-xl mb-6">
                      <div className="min-w-0">
                        <p className="text-xs text-foreground/50 mb-1">Current Price</p>
                        <p className="text-xl sm:text-2xl font-display font-bold text-gradient-gold whitespace-nowrap">
                          {featuredNFT.price.toLocaleString()} {featuredNFT.currency}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/50 mb-1">Rarity Rank</p>
                        <p className="text-lg font-display">#{Math.floor(Math.random() * 500) + 1}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://market.cjcrace.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full gradient-gold text-primary-foreground font-display text-sm tracking-widest py-4 rounded-lg hover:opacity-90 transition-opacity uppercase"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on Marketplace
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "sales" && (
            <motion.div
              key="sales"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {mockNFTs.recentSales.map((nft, i) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 group hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className={`aspect-square rounded-lg bg-gradient-to-br ${nft.color} flex items-center justify-center text-4xl mb-4 relative overflow-hidden`}>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10"
                    >
                      {nft.image}
                    </motion.span>
                    <div className={`absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-display border ${rarityColors[nft.rarity]} bg-card/80`}>
                      {nft.rarity}
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-display text-sm">{nft.name}</p>
                      <p className="text-xs text-foreground/50">{nft.type}</p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-display font-bold text-primary">{nft.price} {nft.currency}</p>
                    <p className="text-xs text-foreground/40">{nft.time}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "listings" && (
            <motion.div
              key="listings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card overflow-hidden">
                {mockNFTs.newListings.map((nft, i) => (
                  <motion.div
                    key={nft.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-b border-border/30 last:border-0 hover:bg-card/40 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-card/60 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                      {nft.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-display text-sm truncate">{nft.name}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${rarityColors[nft.rarity]} shrink-0`}>{nft.rarity}</span>
                      </div>
                      <p className="text-xs text-foreground/50 truncate">{nft.type} • Listed {nft.listed}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-display font-bold text-primary text-sm sm:text-base whitespace-nowrap">{nft.price} {nft.currency}</p>
                      <p className="text-xs text-foreground/40">~${(nft.price * 0.15).toFixed(2)}</p>
                    </div>
                    <ExternalLink className="hidden sm:block w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://market.cjcrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card text-foreground font-display text-sm tracking-widest px-8 py-3 rounded-lg hover:border-primary/50 transition-colors uppercase"
          >
            Browse All NFTs
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTShowcase;
