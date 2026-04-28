import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Wallet } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/cjc-logo.webp";

type NavLink = {
  label: string;
  to?: string;
  hash?: string;
  external?: string;
};

const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Game Info", to: "/", hash: "#game-info" },
  { label: "How to Play", to: "/", hash: "#how-to-play" },
  { label: "Marketplace", external: "https://market.cjcrace.io" },
  { label: "WhitePaper", external: "https://docs.cjcrace.io/cjc-race-white-paper" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (link: NavLink) => {
    setOpen(false);
    if (link.external) {
      window.open(link.external, "_blank", "noopener,noreferrer");
      return;
    }
    if (link.to) {
      if (location.pathname !== link.to) {
        navigate(link.to);
        if (link.hash) {
          // Wait for navigation, then scroll
          setTimeout(() => {
            const el = document.querySelector(link.hash!);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        if (link.hash) {
          const el = document.querySelector(link.hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0 })}>
          <img src={logo} alt="CJC Race" className="h-10 md:h-12 w-auto" width={48} height={48} decoding="async" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="font-display text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://market.cjcrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-primary/40 text-primary font-display text-sm tracking-wider px-5 py-2.5 rounded-lg hover:bg-primary/10 transition-colors uppercase"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </a>
          <Link
            to="/download"
            className="flex items-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-wider px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity uppercase"
          >
            <Download className="w-4 h-4" />
            Download
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/30 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className="text-left font-display text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://market.cjcrace.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-primary/40 text-primary font-display text-sm tracking-wider px-6 py-2.5 rounded-lg mt-2 uppercase"
              >
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </a>
              <Link
                to="/download"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-wider px-6 py-2.5 rounded-lg uppercase"
              >
                <Download className="w-4 h-4" />
                Download Game
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
