import AppLayout from "@/components/app/AppLayout";
import { useState } from "react";
import { Search, Filter, ExternalLink, ChevronDown } from "lucide-react";

const recordTypes = ["All", "Race", "Trade", "Deposit/Withdraw", "Day Spa", "Tycoon"];

const records = [
  { id: "TX-48291", type: "Race", detail: "Champion Stakes #4892 - 1st place", amount: "+2,500 CJC", date: "Apr 28, 2026 14:32", txHash: "0xa12...4f8" },
  { id: "TX-48290", type: "Trade", detail: "Sold Friesian #1484", amount: "+2,388.00 USDT", date: "Apr 28, 2026 12:15", txHash: "0xb23...5e9" },
  { id: "TX-48289", type: "Deposit", detail: "Deposited from external wallet", amount: "+1,000.00 USDT", date: "Apr 28, 2026 10:45", txHash: "0xc34...6f0" },
  { id: "TX-48288", type: "Day Spa", detail: "Spa A operating fees collected", amount: "+450 CJC", date: "Apr 28, 2026 09:00", txHash: "0xd45...7g1" },
  { id: "TX-48287", type: "Tycoon", detail: "Weekly payout received", amount: "+33.75 USDT", date: "Apr 27, 2026 23:59", txHash: "0xe56...8h2" },
  { id: "TX-48286", type: "Race", detail: "League Challenge #2847 - 4th place", amount: "+180 CJC", date: "Apr 27, 2026 19:22", txHash: "0xf67...9i3" },
  { id: "TX-48285", type: "Trade", detail: "Bought Whip Item LR", amount: "-489.00 USDT", date: "Apr 27, 2026 15:08", txHash: "0xa78...0j4" },
  { id: "TX-48284", type: "Day Spa", detail: "Horse condition restored", amount: "-120 CJC", date: "Apr 26, 2026 22:30", txHash: "0xb89...1k5" },
  { id: "TX-48283", type: "Withdraw", detail: "Withdrew to external wallet", amount: "-250.00 USDT", date: "Apr 25, 2026 18:45", txHash: "0xc90...2l6" },
  { id: "TX-48282", type: "Race", detail: "Grand Master Cup - 3rd place", amount: "+5,200 CJC", date: "Apr 23, 2026 21:00", txHash: "0xd01...3m7" },
];

const typeColor: Record<string, string> = {
  Race: "#10B981",
  Trade: "#A78BFA",
  Deposit: "#10B981",
  Withdraw: "#EF4444",
  "Day Spa": "#60A5FA",
  Tycoon: "#C9A84C",
};

const AppRecords = () => {
  const [activeType, setActiveType] = useState("All");

  return (
    <AppLayout pageTitle="Records" pageSubtitle="Complete transaction history.">
      {/* ── Filter bar ─────────────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input
            type="text"
            placeholder="Search by TX ID, hash, or detail..."
            className="w-full bg-card/30 border border-border/30 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:border-primary/40 transition-colors placeholder:text-foreground/30"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-card/30 border border-border/30 rounded-lg pl-4 pr-10 py-3 text-sm outline-none focus:border-primary/40 transition-colors w-full md:w-auto">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
            <option>All time</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
        </div>
      </div>

      {/* ── Type chips ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {recordTypes.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-display tracking-wider uppercase transition-colors ${
              activeType === t ? "bg-primary text-background" : "bg-card/30 border border-border/30 text-foreground/60 hover:text-foreground hover:border-primary/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Records table ──────────────────────────────── */}
      <div className="rounded-xl border border-border/30 overflow-hidden">
        <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1.2fr_1fr_auto] gap-4 p-4 border-b border-border/30 bg-card/30 text-[10px] font-display tracking-widest text-foreground/40 uppercase">
          <div>Type</div>
          <div>Detail</div>
          <div>Amount</div>
          <div>Date</div>
          <div>TX Hash</div>
          <div></div>
        </div>
        {records.map((r) => {
          const color = typeColor[r.type] || "#9CA3AF";
          return (
            <div key={r.id} className="grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr_1.2fr_1fr_auto] gap-2 md:gap-4 p-4 border-b border-border/20 last:border-0 hover:bg-primary/5 transition-colors items-center">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-display font-bold tracking-wider" style={{ background: `${color}20`, color: color }}>
                  {r.type}
                </span>
              </div>
              <div className="text-sm text-foreground">{r.detail}</div>
              <div className={`font-display font-bold text-sm ${r.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{r.amount}</div>
              <div className="text-foreground/50 text-xs">{r.date}</div>
              <div className="font-mono text-foreground/60 text-xs">{r.txHash}</div>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors" title="View on explorer">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>

      {/* ── Pagination ─────────────────────────────────── */}
      <div className="flex items-center justify-between mt-6 text-sm">
        <p className="text-foreground/50">Showing 10 of 248 records</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg border border-border/30 text-foreground/40 disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1.5 rounded-lg bg-primary text-background font-display font-bold">1</button>
          <button className="px-3 py-1.5 rounded-lg border border-border/30 text-foreground/60 hover:border-primary/40 transition-colors">2</button>
          <button className="px-3 py-1.5 rounded-lg border border-border/30 text-foreground/60 hover:border-primary/40 transition-colors">3</button>
          <span className="text-foreground/40 px-2">...</span>
          <button className="px-3 py-1.5 rounded-lg border border-border/30 text-foreground/60 hover:border-primary/40 transition-colors">25</button>
          <button className="px-3 py-1.5 rounded-lg border border-border/30 text-foreground/60 hover:border-primary/40 transition-colors">Next</button>
        </div>
      </div>
    </AppLayout>
  );
};

export default AppRecords;
