import { motion } from "framer-motion";
import { useState } from "react";
import { Wallet, Coins, Crown, Package, ChevronRight, ExternalLink, Shield } from "lucide-react";

const demoWallet = {
  address: "0x7a2...9f3d",
  cjcBalance: 12580,
  diamonds: 245,
  clubStatus: {
    active: true,
    daysRemaining: 312,
    tier: "Tycoon Club",
  },
  nfts: {
    horses: [
      { id: 1, name: "Thunder Strike", rarity: "SR", level: 42, stamina: 85, speed: 78, image: "🐎" },
      { id: 2, name: "Midnight Flash", rarity: "SSR", level: 38, stamina: 92, speed: 88, image: "🐎" },
      { id: 3, name: "Golden Spirit", rarity: "R", level: 25, stamina: 65, speed: 70, image: "🐎" },
    ],
    jockeys: [
      { id: 1, name: "Chen Wei", rarity: "SR", level: 35, technique: 82, balance: 78, image: "🏇" },
      { id: 2, name: "Sarah Kim", rarity: "R", level: 28, technique: 72, balance: 70, image: "🏇" },
    ],
    items: [
      { id: 1, name: "Golden Whip", rarity: "SSR", type: "Whip", image: "🎋" },
      { id: 2, name: "Champion Saddle", rarity: "SR", type: "Saddle", image: "🏇" },
      { id: 3, name: "Lucky Horseshoe", rarity: "R", type: "Accessory", image: "🍀" },
      { id: 4, name: "Silk Jersey", rarity: "N", type: "Silks", image: "👕" },
    ],
  },
};

const rarityColors: Record<string, string> = {
  N: "border-gray-400 text-gray-400",
  R: "border-blue-400 text-blue-400",
  SR: "border-purple-400 text-purple-400",
  SSR: "border-cyan-400 text-cyan-400",
  UR: "border-amber-400 text-amber-400",
  LR: "border-rose-500 text-rose-500",
};

const WalletPreview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isConnected, setIsConnected] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden" id="wallet">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Web3 Ready
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            Your NFTs. Your Wallet. Your Asset.
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Horses. Jockeys. Items. All stored on chain in your own wallet. Trade them. Rent them. Sell them. The game reads your wallet to know what you own.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {!isConnected ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-24 h-24 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6"
              >
                <Wallet className="w-12 h-12 text-primary-foreground" />
              </motion.div>

              <h3 className="font-display text-2xl font-bold mb-4">Connect Your Wallet</h3>
              <p className="text-foreground/60 max-w-md mx-auto mb-8">
                Link your crypto wallet to view your NFT collection, track your CJC earnings, and manage your Tycoon Club membership.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConnected(true)}
                  className="gradient-gold text-primary-foreground font-display text-sm tracking-widest px-8 py-4 rounded-lg hover:opacity-90 transition-opacity uppercase flex items-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </button>
                <a
                  href="https://market.cjcrace.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card text-foreground font-display text-sm tracking-widest px-8 py-4 rounded-lg hover:border-primary/50 transition-colors uppercase flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Browse Marketplace
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-foreground/40">
                <Shield className="w-4 h-4" />
                <span>Secure connection via WalletConnect</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-border/30 bg-gradient-to-r from-card to-card/50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-display text-sm">{demoWallet.address}</p>
                      <p className="text-xs text-foreground/50">Connected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {demoWallet.clubStatus.active && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary">
                        <Crown className="w-4 h-4" />
                        <span className="text-xs font-display">{demoWallet.clubStatus.tier}</span>
                      </div>
                    )}
                    <button
                      onClick={() => setIsConnected(false)}
                      className="text-xs text-foreground/50 hover:text-foreground transition-colors"
                    >
                      Disconnect
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 border-b border-border/30">
                <div className="p-6 text-center border-r border-border/30">
                  <Coins className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-foreground/50 mb-1">CJC Balance</p>
                  <p className="font-display text-xl font-bold text-gradient-gold">
                    {demoWallet.cjcBalance.toLocaleString()}
                  </p>
                </div>
                <div className="p-6 text-center border-r border-border/30">
                  <Package className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-foreground/50 mb-1">Diamonds</p>
                  <p className="font-display text-xl font-bold text-primary">
                    {demoWallet.diamonds.toLocaleString()}
                  </p>
                </div>
                <div className="p-6 text-center">
                  <Crown className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-foreground/50 mb-1">Club Days</p>
                  <p className="font-display text-xl font-bold text-primary">
                    {demoWallet.clubStatus.daysRemaining}
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border/30">
                {["overview", "horses", "jockeys", "items"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-3 font-display text-sm tracking-wider transition-all ${
                      activeTab === tab
                        ? "bg-primary/10 text-primary border-b-2 border-primary"
                        : "text-foreground/60 hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="glass-card p-4 text-center">
                        <p className="text-3xl mb-2">{demoWallet.nfts.horses.length}</p>
                        <p className="text-xs text-foreground/50">Racehorses</p>
                      </div>
                      <div className="glass-card p-4 text-center">
                        <p className="text-3xl mb-2">{demoWallet.nfts.jockeys.length}</p>
                        <p className="text-xs text-foreground/50">Jockeys</p>
                      </div>
                      <div className="glass-card p-4 text-center">
                        <p className="text-3xl mb-2">{demoWallet.nfts.items.length}</p>
                        <p className="text-xs text-foreground/50">Items</p>
                      </div>
                      <div className="glass-card p-4 text-center">
                        <p className="text-3xl mb-2">6</p>
                        <p className="text-xs text-foreground/50">Total NFTs</p>
                      </div>
                    </div>

                    <div className="glass-card p-4">
                      <h4 className="font-display text-sm mb-4">Top Performers</h4>
                      <div className="space-y-3">
                        {demoWallet.nfts.horses.slice(0, 2).map((horse) => (
                          <div key={horse.id} className="flex items-center gap-4">
                            <div className="text-2xl">{horse.image}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-display text-sm">{horse.name}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded border ${rarityColors[horse.rarity]}`}>
                                  {horse.rarity}
                                </span>
                              </div>
                              <p className="text-xs text-foreground/50">Level {horse.level}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-primary">{horse.speed} SPD</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "horses" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {demoWallet.nfts.horses.map((horse) => (
                      <motion.div
                        key={horse.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-4 hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{horse.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-display text-sm">{horse.name}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded border ${rarityColors[horse.rarity]}`}>
                                {horse.rarity}
                              </span>
                            </div>
                            <p className="text-xs text-foreground/50 mb-2">Level {horse.level}</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-foreground/40">Speed:</span>{" "}
                                <span className="text-primary">{horse.speed}</span>
                              </div>
                              <div>
                                <span className="text-foreground/40">Stamina:</span>{" "}
                                <span className="text-primary">{horse.stamina}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "jockeys" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {demoWallet.nfts.jockeys.map((jockey) => (
                      <motion.div
                        key={jockey.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-4 hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{jockey.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-display text-sm">{jockey.name}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded border ${rarityColors[jockey.rarity]}`}>
                                {jockey.rarity}
                              </span>
                            </div>
                            <p className="text-xs text-foreground/50 mb-2">Level {jockey.level}</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-foreground/40">Technique:</span>{" "}
                                <span className="text-primary">{jockey.technique}</span>
                              </div>
                              <div>
                                <span className="text-foreground/40">Balance:</span>{" "}
                                <span className="text-primary">{jockey.balance}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "items" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {demoWallet.nfts.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-4 text-center hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        <div className="text-3xl mb-2">{item.image}</div>
                        <p className="font-display text-xs mb-1">{item.name}</p>
                        <p className="text-xs text-foreground/50 mb-2">{item.type}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${rarityColors[item.rarity]}`}>
                          {item.rarity}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-border/30 bg-card/50">
                <a
                  href="https://market.cjcrace.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity uppercase"
                >
                  Manage on Marketplace
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletPreview;
