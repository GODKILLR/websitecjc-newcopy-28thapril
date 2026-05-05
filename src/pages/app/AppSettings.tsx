import AppLayout from "@/components/app/AppLayout";
import { useState } from "react";
import { User, Lock, Bell, Wallet, BookOpen, FileText, Globe, ChevronRight } from "lucide-react";

const sections = [
  { id: "profile", icon: User, label: "Profile" },
  { id: "security", icon: Lock, label: "Security" },
  { id: "notifications", icon: Bell, label: "Notifications" },
  { id: "wallet", icon: Wallet, label: "Wallet" },
  { id: "preferences", icon: Globe, label: "Preferences" },
  { id: "help", icon: BookOpen, label: "Help & Tutorials" },
  { id: "legal", icon: FileText, label: "Legal" },
];

const AppSettings = () => {
  const [active, setActive] = useState("profile");

  return (
    <AppLayout pageTitle="Settings" pageSubtitle="Manage your account, security, and preferences.">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Sub-sidebar */}
        <aside className="rounded-xl border border-border/30 bg-card/30 p-2 h-fit">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-left transition-colors ${
                active === s.id ? "bg-primary/15 text-primary" : "text-foreground/60 hover:text-foreground hover:bg-card/40"
              }`}
            >
              <s.icon className="w-4 h-4" />
              <span className="font-display text-sm tracking-wider uppercase flex-1">{s.label}</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            </button>
          ))}
        </aside>

        {/* Settings content */}
        <div className="rounded-xl border border-border/30 bg-card/30 p-6 md:p-8">
          {active === "profile" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Profile</h2>
              <div className="space-y-5 max-w-xl">
                <div>
                  <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">Display Name</label>
                  <input type="text" defaultValue="Ketan" className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-colors" />
                </div>
                <div>
                  <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">Email</label>
                  <input type="email" defaultValue="ketan@cjcrace.io" className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-colors" />
                </div>
                <div>
                  <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">Player ID</label>
                  <input type="text" defaultValue="CJC-48291" disabled className="w-full bg-background/30 border border-border/40 rounded-lg px-4 py-3 text-foreground/60 outline-none" />
                </div>
                <button className="gradient-gold text-primary-foreground font-display text-sm tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase">
                  Save Changes
                </button>
              </div>
            </>
          )}

          {active === "security" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Security</h2>
              <div className="space-y-5 max-w-xl">
                <div className="rounded-lg border border-border/30 p-4">
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">Account Password</h4>
                  <p className="text-foreground/50 text-xs mb-3">Used to log into your CJC Race account.</p>
                  <button className="text-primary text-xs font-display tracking-wider uppercase hover:underline">Change Password →</button>
                </div>
                <div className="rounded-lg border border-border/30 p-4">
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">Game Password</h4>
                  <p className="text-foreground/50 text-xs mb-3">Required when accessing the in-game client.</p>
                  <button className="text-primary text-xs font-display tracking-wider uppercase hover:underline">Reset Game Password →</button>
                </div>
                <div className="rounded-lg border border-border/30 p-4">
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">Two-Factor Authentication</h4>
                  <p className="text-foreground/50 text-xs mb-3">Add an extra layer of security to your account.</p>
                  <button className="text-primary text-xs font-display tracking-wider uppercase hover:underline">Enable 2FA →</button>
                </div>
              </div>
            </>
          )}

          {active === "notifications" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Notifications</h2>
              <div className="space-y-3 max-w-xl">
                {[
                  { label: "Race results", desc: "Get notified when a race finishes" },
                  { label: "NFT sold", desc: "When one of your listed NFTs is purchased" },
                  { label: "Tycoon payouts", desc: "Weekly payout reminders and confirmations" },
                  { label: "New referrals", desc: "When a new buddy joins via your link" },
                  { label: "Day Spa auctions", desc: "Bid status and operating window alerts" },
                  { label: "Marketing emails", desc: "Updates about new packs, features, events" },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between p-4 rounded-lg border border-border/30">
                    <div>
                      <p className="font-display text-sm text-foreground">{n.label}</p>
                      <p className="text-foreground/50 text-xs">{n.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-10 h-5 bg-card rounded-full peer-checked:bg-primary/40 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-primary after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          {active === "wallet" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Wallet</h2>
              <div className="space-y-4 max-w-xl">
                <div className="rounded-lg border border-border/30 p-4">
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">Connected Wallet</h4>
                  <p className="font-mono text-foreground/60 text-xs break-all mb-3">0xa12c4f8d9e2b1234567890abcdef1234567890ab</p>
                  <p className="text-foreground/50 text-xs mb-3">Network: Arbitrum One</p>
                  <button className="text-red-400 text-xs font-display tracking-wider uppercase hover:underline">Disconnect →</button>
                </div>
                <div className="rounded-lg border border-border/30 p-4">
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">Default Network</h4>
                  <p className="text-foreground/50 text-xs mb-3">Choose which chain to use for transactions.</p>
                  <select className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-2 text-foreground text-sm outline-none focus:border-primary/60 transition-colors">
                    <option>Arbitrum One</option>
                    <option>Polygon</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {active === "preferences" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Preferences</h2>
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/30">
                  <div>
                    <p className="font-display text-sm text-foreground">Language</p>
                    <p className="text-foreground/50 text-xs">Display language across the app</p>
                  </div>
                  <select className="bg-background/50 border border-border/40 rounded-lg px-3 py-1.5 text-foreground text-sm outline-none">
                    <option>English</option>
                    <option>한국어</option>
                    <option>日本語</option>
                    <option>中文</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/30">
                  <div>
                    <p className="font-display text-sm text-foreground">Currency Display</p>
                    <p className="text-foreground/50 text-xs">Default currency for prices</p>
                  </div>
                  <select className="bg-background/50 border border-border/40 rounded-lg px-3 py-1.5 text-foreground text-sm outline-none">
                    <option>USDT</option>
                    <option>USD</option>
                    <option>CJC</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/30">
                  <div>
                    <p className="font-display text-sm text-foreground">Time Zone</p>
                    <p className="text-foreground/50 text-xs">Used for race schedules and payouts</p>
                  </div>
                  <select className="bg-background/50 border border-border/40 rounded-lg px-3 py-1.5 text-foreground text-sm outline-none">
                    <option>GMT (UTC+0)</option>
                    <option>EST (UTC-5)</option>
                    <option>PST (UTC-8)</option>
                    <option>JST (UTC+9)</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {active === "help" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Help & Tutorials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {[
                  { title: "Quick Start Guide", desc: "Get racing in 10 minutes" },
                  { title: "How to Buy a Pack", desc: "Step-by-step purchase tutorial" },
                  { title: "Understanding Rarity", desc: "Six tiers explained" },
                  { title: "Race Mechanics", desc: "Master gate timing and stamina" },
                  { title: "Tycoon Club Guide", desc: "Membership benefits and payouts" },
                  { title: "Contact Support", desc: "Get help from our team" },
                ].map((h) => (
                  <a key={h.title} href="#" className="flex items-center gap-3 p-4 rounded-lg border border-border/30 hover:border-primary/40 transition-colors group">
                    <BookOpen className="w-5 h-5 text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-bold text-foreground">{h.title}</p>
                      <p className="text-foreground/50 text-xs">{h.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </>
          )}

          {active === "legal" && (
            <>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Legal</h2>
              <div className="space-y-2 max-w-xl">
                {[
                  { label: "Terms and Conditions", to: "/terms" },
                  { label: "Privacy Policy", to: "/privacy-policy" },
                  { label: "Risk Disclaimer", to: "/risk-disclaimer" },
                  { label: "Brand Assets", to: "/brand-assets" },
                ].map((l) => (
                  <a key={l.label} href={l.to} className="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-primary/40 transition-colors">
                    <span className="font-display text-sm text-foreground">{l.label}</span>
                    <ChevronRight className="w-4 h-4 text-foreground/40" />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default AppSettings;
