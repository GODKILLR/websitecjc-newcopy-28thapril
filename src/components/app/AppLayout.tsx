import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ShoppingBag,
  LayoutDashboard,
  Wallet as WalletIcon,
  Crown,
  ScrollText,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";
import logo from "@/assets/cjc-logo.webp";

const navItems = [
  { to: "/app/home", icon: Home, label: "Home" },
  { to: "/app/market", icon: ShoppingBag, label: "Market" },
  { to: "/app/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/app/wallet", icon: WalletIcon, label: "Wallet" },
  { to: "/app/tycoon", icon: Crown, label: "Tycoon Club" },
  { to: "/app/records", icon: ScrollText, label: "Records" },
  { to: "/app/settings", icon: Settings, label: "Settings" },
];

interface AppLayoutProps {
  children: ReactNode;
  pageTitle: string;
  pageSubtitle?: string;
}

const AppLayout = ({ children, pageTitle, pageSubtitle }: AppLayoutProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* ── Sidebar (desktop) ───────────────────────────── */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 z-30 border-r border-border/30 bg-card/40 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 px-6 py-5 border-b border-border/30">
          <img src={logo} alt="CJC Race" className="h-10 w-auto" />
        </Link>

        <nav className="flex-1 px-3 py-6">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors group ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-foreground/60 hover:text-foreground hover:bg-card/40 border border-transparent"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-display text-sm tracking-wider uppercase">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-border/30">
          <Link
            to="/app/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground/60 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-display text-sm tracking-wider uppercase">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* ── Mobile sidebar ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed inset-y-0 left-0 w-64 z-50 bg-card border-r border-border/30 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/30">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img src={logo} alt="CJC Race" className="h-9 w-auto" />
                </Link>
                <button onClick={() => setMobileOpen(false)} className="text-foreground/60">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 px-3 py-4 overflow-y-auto">
                {navItems.map((item) => {
                  const active = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 ${
                        active ? "bg-primary/15 text-primary" : "text-foreground/60"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-display text-sm tracking-wider uppercase">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main content area ───────────────────────────── */}
      <div className="flex-1 md:ml-64 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 border-b border-border/30 bg-card/40 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-foreground/60 p-1"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="font-display text-lg md:text-xl font-bold text-foreground">{pageTitle}</h1>
                {pageSubtitle && <p className="text-foreground/50 text-xs hidden md:block">{pageSubtitle}</p>}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Wallet quick view */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/30 bg-card/30">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-display text-xs text-foreground/60">CJC</span>
                <span className="font-display text-xs font-bold text-primary">12,450</span>
              </div>

              {/* Notifications */}
              <button className="w-9 h-9 rounded-lg border border-border/30 bg-card/30 hover:border-primary/40 transition-colors flex items-center justify-center relative">
                <Bell className="w-4 h-4 text-foreground/60" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
              </button>

              {/* User menu */}
              <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-border/30 bg-card/30 hover:border-primary/40 transition-colors">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-display font-bold text-primary">
                  K
                </div>
                <span className="hidden md:inline font-display text-xs text-foreground/70 max-w-[80px] truncate">0xa12...4f8</span>
                <ChevronDown className="w-3 h-3 text-foreground/40 hidden md:block" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
