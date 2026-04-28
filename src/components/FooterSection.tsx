import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/cjc-logo.webp";

// Live payout counter — starts at a base and increments every few seconds
const useLivePayout = () => {
  const BASE = 1_847_320;
  const [total, setTotal] = useState(BASE);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotal((prev) => prev + Math.floor(Math.random() * 80 + 20));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return total.toLocaleString();
};

const FooterSection = () => {
  const livePayout = useLivePayout();

  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container">

        {/* Trust Bar — Audit badge + Live payout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 py-5 px-6 rounded-xl border border-border/20 bg-card/20">
          {/* Audit Badge */}
          <Link
            to="/audit"
            className="flex items-center gap-2.5 px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/10 transition-all group"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="font-display text-xs tracking-wider text-primary uppercase">
              Smart Contract Audited
            </span>
          </Link>

          <div className="w-px h-6 bg-border/30 hidden sm:block" />

          {/* Live Payout */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-foreground/50">
              Total CJC paid out to players:{" "}
              <span className="font-display font-bold text-foreground/80">
                {livePayout} CJC
              </span>
            </span>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <img src={logo} alt="CJC Race" className="h-14 w-auto mb-4" loading="lazy" decoding="async" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate blockchain horse racing experience. Race, earn, and conquer.
            </p>
          </div>

          {/* Game */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Game</h4>
            <div className="flex flex-col gap-2">
              <Link to="/game-modes" className="text-foreground/60 hover:text-primary transition-colors text-sm">Game Info</Link>
              <a href="https://www.cjcrace.io/download" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Download</a>
              <a href="https://market.cjcrace.io" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Marketplace</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="https://docs.cjcrace.io/cjc-race-white-paper" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">WhitePaper</a>
              <Link to="/news" className="text-foreground/60 hover:text-primary transition-colors text-sm">News & Updates</Link>
              <a href="https://www.cjcrace.io/document/Beginners_Guide_EN" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Beginner's Guide</a>
            </div>
          </div>

          {/* Company — NEW */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/team" className="text-foreground/60 hover:text-primary transition-colors text-sm">Team</Link>
              <Link to="/careers" className="text-foreground/60 hover:text-primary transition-colors text-sm">Careers</Link>
              <Link to="/location" className="text-foreground/60 hover:text-primary transition-colors text-sm">Location</Link>
              <Link to="/audit" className="text-foreground/60 hover:text-primary transition-colors text-sm">Audit Report</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy-policy" className="text-foreground/60 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-foreground/60 hover:text-primary transition-colors text-sm">Terms and Conditions</Link>
              <Link to="/risk-disclaimer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Risk Disclaimer</Link>
              <Link to="/brand-assets" className="text-foreground/60 hover:text-primary transition-colors text-sm">Brand Assets</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            Copyright ©2025 Celestial Star Technology - FZCO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
