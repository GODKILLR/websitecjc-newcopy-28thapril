import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ShieldCheck, ExternalLink, Lock, FileCheck, Eye } from "lucide-react";

const Audit = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Security & Transparency
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Smart Contract Audit
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Every CJC Race smart contract has been independently reviewed for
            security vulnerabilities. We publish our audit reports openly so
            players can verify our code before trusting us with their assets.
          </p>
        </div>

        {/* Audit Status Banner */}
        <div className="glass-card p-6 flex items-center gap-4 mb-8 border-primary/30">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-display font-bold text-lg">Audit Report — Pending Publication</p>
            <p className="text-foreground/50 text-sm">
              Our smart contracts are currently undergoing independent audit. Report will be published here upon completion.
            </p>
          </div>
          <span className="ml-auto shrink-0 px-3 py-1 rounded-full text-xs font-display border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
            In Progress
          </span>
        </div>

        {/* What we audit */}
        <h2 className="font-display text-2xl font-bold mb-6">What Gets Audited</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            {
              icon: Lock,
              title: "Payout Contracts",
              desc: "Every prize distribution, daily reward and championship payout is governed by audited smart contracts — no manual intervention possible.",
            },
            {
              icon: FileCheck,
              title: "NFT Contracts",
              desc: "All Racehorse, Jockey and Item NFT minting, trading and ownership contracts are independently reviewed.",
            },
            {
              icon: ShieldCheck,
              title: "Marketplace Contracts",
              desc: "Buy, sell and trade logic on the CJC marketplace is verified to ensure funds always reach the correct wallet.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold mb-1">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Reports Table */}
        <h2 className="font-display text-2xl font-bold mb-6">Published Reports</h2>
        <div className="glass-card overflow-hidden mb-16">
          <div className="flex items-center gap-4 p-5 border-b border-border/20">
            <div className="flex-1">
              <p className="font-display text-sm font-bold">CJC Race Core Contracts v1.0</p>
              <p className="text-xs text-foreground/40">Auditor: TBA</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-display border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
              Pending
            </span>
            <button disabled className="inline-flex items-center gap-2 text-foreground/30 font-display text-xs tracking-widest px-5 py-2 rounded-lg border border-border/20 uppercase cursor-not-allowed">
              <ExternalLink className="w-3.5 h-3.5" />
              View Report
            </button>
          </div>
          <div className="flex items-center gap-4 p-5">
            <div className="flex-1">
              <p className="font-display text-sm font-bold">CJC NFT Marketplace v1.0</p>
              <p className="text-xs text-foreground/40">Auditor: TBA</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-display border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
              Pending
            </span>
            <button disabled className="inline-flex items-center gap-2 text-foreground/30 font-display text-xs tracking-widest px-5 py-2 rounded-lg border border-border/20 uppercase cursor-not-allowed">
              <ExternalLink className="w-3.5 h-3.5" />
              View Report
            </button>
          </div>
        </div>

        {/* On-chain verification note */}
        <div className="glass-card p-8 text-center">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold mb-3">Verify On-Chain</h3>
          <p className="text-foreground/50 text-sm max-w-xl mx-auto mb-6">
            All CJC Race contracts are deployed on a public blockchain. You do not
            need to trust us — you can verify every transaction, payout and NFT
            transfer independently using any blockchain explorer.
          </p>
          <a
            href="https://www.cjcrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-xs tracking-widest px-8 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View on Explorer
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Audit;
