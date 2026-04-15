import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/cjc-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Game Info", href: "#game-info" },
  { label: "How to Play", href: "#how-to-play" },
  { label: "Marketplace", href: "https://market.cjcrace.io", external: true },
  { label: "WhitePaper", href: "https://docs.cjcrace.io/cjc-race-white-paper", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="CJC Race" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-display text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
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
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
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
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </a>
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
