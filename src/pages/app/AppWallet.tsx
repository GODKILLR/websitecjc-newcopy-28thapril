import AppLayout from "@/components/app/AppLayout";
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  Copy,
  ExternalLink,
  Check,
} from "lucide-react";

const tabs = ["Deposit", "Withdraw", "Convert"];

const transactions = [
  { type: "Deposit", amount: "+1,000.00 USDT", from: "External Wallet", time: "2 hours ago", status: "Completed" },
  { type: "Convert", amount: "+50,000 CJC", from: "500 USDT converted", time: "1 day ago", status: "Completed" },
  { type: "Withdraw", amount: "-250.00 USDT", from: "To external wallet", time: "3 days ago", status: "Completed" },
  { type: "Convert", amount: "-2,500 CJC", from: "25 USDT received", time: "5 days ago", status: "Completed" },
];

const AppWallet = () => {
  const [activeTab, setActiveTab] = useState("Deposit");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0xa12c4f8d9e2b1234567890abcdef1234567890ab");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AppLayout pageTitle="Wallet" pageSubtitle="Manage your CJC and USDT balances.">
      {/* ── Balance Cards ───────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-2xl border border-primary/30 p-6" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(15,23,42,0.6))" }}>
          <p className="text-[10px] font-display tracking-widest text-primary uppercase mb-2">CJC Coin Balance</p>
          <p className="font-display text-3xl font-bold text-gradient-gold mb-1">12,450</p>
          <p className="text-foreground/50 text-xs">≈ 124.50 USDT (100 CJC = 1 USDT)</p>
        </div>
        <div className="rounded-2xl border border-border/30 p-6 bg-card/30">
          <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">USDT Balance</p>
          <p className="font-display text-3xl font-bold text-foreground mb-1">2,847.50</p>
          <p className="text-foreground/50 text-xs">Available to withdraw</p>
        </div>
        <div className="rounded-2xl border border-border/30 p-6 bg-card/30">
          <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">Diamonds</p>
          <p className="font-display text-3xl font-bold text-foreground mb-1">4,820</p>
          <p className="text-foreground/50 text-xs">In-game premium currency</p>
        </div>
      </div>

      {/* ── Wallet Address Bar ─────────────────────────── */}
      <div className="rounded-xl border border-border/30 bg-card/30 p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-1">Connected Wallet (Arbitrum)</p>
          <p className="font-mono text-sm text-foreground/80 break-all">0xa12c4f8d9e2b1234567890abcdef1234567890ab</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/30 hover:border-primary/40 transition-colors text-xs">
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <a href="https://arbiscan.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/30 hover:border-primary/40 transition-colors text-xs">
            <ExternalLink className="w-3.5 h-3.5" /> Explorer
          </a>
        </div>
      </div>

      {/* ── Action Tabs ────────────────────────────────── */}
      <div className="rounded-2xl border border-border/30 bg-card/30 overflow-hidden mb-8">
        <div className="flex border-b border-border/30">
          {tabs.map((t) => {
            const Icon = t === "Deposit" ? ArrowDownToLine : t === "Withdraw" ? ArrowUpFromLine : ArrowLeftRight;
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-display tracking-wider uppercase transition-colors ${
                  activeTab === t ? "bg-primary/10 text-primary border-b-2 border-primary" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" /> {t}
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8">
          {activeTab === "Deposit" && (
            <div className="max-w-md mx-auto">
              <p className="text-foreground/60 text-sm mb-4">
                Send USDT to your CJC Race wallet on the Arbitrum network. Funds appear within 2 minutes.
              </p>
              <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">Amount (USDT)</label>
              <input type="number" placeholder="0.00" className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-colors mb-4" />
              <button className="w-full gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase">Deposit USDT</button>
              <p className="text-foreground/40 text-xs text-center mt-3">Minimum deposit: 10 USDT</p>
            </div>
          )}
          {activeTab === "Withdraw" && (
            <div className="max-w-md mx-auto">
              <p className="text-foreground/60 text-sm mb-4">
                Withdraw USDT to your external wallet. A small network fee applies.
              </p>
              <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">Amount (USDT)</label>
              <input type="number" placeholder="0.00" className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-colors mb-4" />
              <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">Destination Address</label>
              <input type="text" placeholder="0x..." className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground font-mono text-sm outline-none focus:border-primary/60 transition-colors mb-4" />
              <button className="w-full gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase">Withdraw USDT</button>
              <p className="text-foreground/40 text-xs text-center mt-3">Available: 2,847.50 USDT</p>
            </div>
          )}
          {activeTab === "Convert" && (
            <div className="max-w-md mx-auto">
              <p className="text-foreground/60 text-sm mb-4">
                Convert between CJC Coins and USDT at a fixed rate of 100 CJC = 1 USDT.
              </p>
              <div className="rounded-lg border border-border/30 bg-background/50 p-4 mb-2">
                <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">From</p>
                <div className="flex items-center justify-between">
                  <input type="number" placeholder="0" className="bg-transparent text-foreground text-xl font-display font-bold outline-none flex-1" />
                  <span className="font-display text-primary text-sm">CJC</span>
                </div>
              </div>
              <div className="text-center text-foreground/40 text-xs mb-2">↓</div>
              <div className="rounded-lg border border-border/30 bg-background/50 p-4 mb-4">
                <p className="text-[10px] font-display tracking-widest text-foreground/40 uppercase mb-2">To (You receive)</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-xl font-display font-bold">0.00</span>
                  <span className="font-display text-foreground text-sm">USDT</span>
                </div>
              </div>
              <button className="w-full gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase">Convert</button>
              <p className="text-foreground/40 text-xs text-center mt-3">Minimum: 100 CJC (1 USDT)</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Recent Transactions ─────────────────────────── */}
      <div>
        <h3 className="font-display text-lg font-bold text-foreground mb-4">Recent Transactions</h3>
        <div className="rounded-xl border border-border/30 bg-card/30 overflow-hidden">
          {transactions.map((tx, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr_auto] gap-4 p-4 border-b border-border/20 last:border-0 items-center">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                {tx.type === "Deposit" && <ArrowDownToLine className="w-4 h-4 text-green-400" />}
                {tx.type === "Withdraw" && <ArrowUpFromLine className="w-4 h-4 text-red-400" />}
                {tx.type === "Convert" && <ArrowLeftRight className="w-4 h-4 text-primary" />}
              </div>
              <div>
                <p className="font-display text-sm text-foreground">{tx.type}</p>
                <p className="text-foreground/50 text-xs">{tx.from}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-sm font-bold text-foreground">{tx.amount}</p>
                <p className="text-foreground/40 text-[10px]">{tx.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default AppWallet;
