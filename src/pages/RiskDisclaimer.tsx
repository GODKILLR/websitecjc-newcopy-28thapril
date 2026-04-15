import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { AlertTriangle } from "lucide-react";

const sections = [
  {
    title: "1. No Financial Advice",
    content:
      "Nothing on the CJC Race platform, website, whitepaper, or any associated materials constitutes financial, investment, legal, or tax advice. CJC coins and digital assets available on the Platform are utility tokens intended for in-game use. You should consult a qualified professional before making any financial decisions related to digital assets or cryptocurrency.",
  },
  {
    title: "2. Volatility & Market Risk",
    content:
      "The value of cryptocurrencies and digital assets, including CJC coins and NFT horses, can fluctuate significantly. Prices may increase or decrease at any time without notice. Past performance is not indicative of future results. You acknowledge that you may lose some or all of the value of your digital assets.",
  },
  {
    title: "3. No Guaranteed Returns",
    content:
      "CJC Race does not guarantee any return on investment, earnings, or profit from using the Platform. Rewards earned through gameplay, referrals, leagues, or other activities are subject to change and are distributed at the sole discretion of CJC Race based on published rules and conditions.",
  },
  {
    title: "4. Blockchain & Smart Contract Risks",
    content:
      "The Platform operates on blockchain technology and relies on smart contracts. While our contracts are audited, no audit can guarantee the complete absence of vulnerabilities. Blockchain transactions are irreversible. Once confirmed on the network, transactions cannot be cancelled, reversed, or refunded. You are solely responsible for verifying transaction details before confirming.",
  },
  {
    title: "5. Regulatory Uncertainty",
    content:
      "The regulatory landscape for blockchain gaming, cryptocurrency, and digital assets varies by jurisdiction and is subject to change. It is your responsibility to ensure that your participation in CJC Race complies with the laws and regulations applicable in your jurisdiction. CJC Race may restrict access to certain features or services in specific regions to comply with applicable regulations.",
  },
  {
    title: "6. Technology Risks",
    content:
      "The Platform may experience downtime, network congestion, software bugs, or other technical issues that could affect gameplay, transactions, or asset accessibility. CJC Race is not liable for losses resulting from technical failures, including but not limited to blockchain network outages, wallet malfunctions, or third-party service disruptions.",
  },
  {
    title: "7. Third-Party Services",
    content:
      "The Platform may integrate with third-party wallets, exchanges, and services. CJC Race does not control, endorse, or assume responsibility for third-party services. Your use of any third-party service is at your own risk and subject to their respective terms and policies.",
  },
  {
    title: "8. Loss of Access",
    content:
      "You are solely responsible for securing your wallet credentials, private keys, and account information. CJC Race cannot recover lost private keys or restore access to wallets. Loss of your private key means permanent loss of access to your digital assets.",
  },
  {
    title: "9. Play Responsibly",
    content:
      "CJC Race is designed for entertainment purposes. Do not spend more than you can afford to lose. If you feel that your gaming habits are becoming problematic, we encourage you to seek support from a qualified professional.",
  },
  {
    title: "10. Acknowledgement",
    content:
      "By using the CJC Race platform, you acknowledge that you have read, understood, and accepted the risks outlined in this disclaimer. You agree that CJC Race, Celestial Star Technology - FZCO, and its affiliates shall not be held liable for any losses arising from the risks described herein.",
  },
];

const RiskDisclaimer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Legal
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Risk Disclaimer
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base">
            Last updated: April 2026
          </p>
        </div>

        {/* Warning Banner */}
        <div className="glass-card p-6 flex items-start gap-4 mb-12 border-yellow-500/30">
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="font-display text-sm font-bold text-foreground mb-1">
              Important Notice
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              CJC Race involves digital assets and cryptocurrency. The value of
              these assets can go up or down. Please read this disclaimer
              carefully before using the platform. Only participate with funds
              you can afford to lose.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-foreground mb-3">
                {s.title}
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default RiskDisclaimer;
