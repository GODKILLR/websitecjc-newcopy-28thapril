import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, LayoutDashboard, ArrowRight, Sparkles, BookOpen, Wallet } from "lucide-react";
import heroBg from "@/assets/gameplay-bg.webp";

const MarketplaceHub = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
      </div>

      <main className="relative z-10 container py-24 md:py-32 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              CJC Race Marketplace
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
              Where do you want to go?
            </h1>
            <p className="text-foreground/60 max-w-xl mx-auto text-lg">
              Browse the storefront and learn about NFTs, or log in to the trading app to buy, sell, and manage your stable.
            </p>
          </motion.div>

          {/* Two Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Option 1 — Marketplace Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/shop" className="block group">
                <div
                  className="rounded-2xl border border-border/30 hover:border-primary/40 transition-all duration-300 overflow-hidden h-full p-8 md:p-10 relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(96,165,250,0.08), rgba(15,23,42,0.7) 50%, rgba(167,139,250,0.04))",
                  }}
                >
                  {/* Top icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{
                      background: "rgba(96,165,250,0.15)",
                      border: "1px solid rgba(96,165,250,0.3)",
                    }}
                  >
                    <ShoppingBag className="w-8 h-8 text-blue-400" />
                  </div>

                  <span className="font-display text-[10px] tracking-[0.3em] text-blue-400 uppercase mb-3 block">
                    Explore & Learn
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Browse Marketplace
                  </h2>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-6">
                    See featured NFT drops, Mystery Boxes, racehorses, jockeys, and items. No login required.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Featured Mystery Box drops</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>NFT rarity guide and education</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
                      <span>Browse without connecting wallet</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-display text-sm tracking-wider text-blue-400 uppercase group-hover:gap-3 transition-all">
                    Open Showcase <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Option 2 — Trading App */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/app/login" className="block group">
                <div
                  className="rounded-2xl border border-primary/40 hover:border-primary transition-all duration-300 overflow-hidden h-full p-8 md:p-10 relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(15,23,42,0.7) 50%, rgba(201,168,76,0.05))",
                  }}
                >
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary text-background text-[9px] font-display font-black tracking-widest uppercase">
                    Recommended
                  </div>

                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    <LayoutDashboard className="w-8 h-8 text-primary" />
                  </div>

                  <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase mb-3 block">
                    Trade & Manage
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Open Trading App
                  </h2>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-6">
                    Log in to buy, sell, manage your stable, deposit USDT, and access Tycoon Club benefits.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <Wallet className="w-3.5 h-3.5 text-primary" />
                      <span>Buy and sell NFTs</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <LayoutDashboard className="w-3.5 h-3.5 text-primary" />
                      <span>Dashboard, Wallet, Records</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span>Tycoon Club membership tools</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-display text-sm tracking-wider text-primary uppercase group-hover:gap-3 transition-all">
                    Sign In <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Footer note */}
          <p className="text-center mt-10 text-foreground/40 text-sm">
            New to CJC Race?{" "}
            <Link to="/nfts" className="text-primary hover:underline">
              Learn how NFTs work →
            </Link>
          </p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default MarketplaceHub;
