import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const openRoles = [
  {
    title: "Senior Solidity Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description:
      "Build and audit the smart contracts powering CJC Race payouts, NFT mechanics and staking systems.",
  },
  {
    title: "Game Backend Engineer",
    department: "Engineering",
    location: "Remote / Dubai",
    type: "Full-Time",
    description:
      "Design and maintain the game server infrastructure handling real-time race simulations and player data.",
  },
  {
    title: "Community Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    description:
      "Manage and grow the CJC Race community on Discord, Telegram and Twitter. Engage players and surface feedback.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    description:
      "Design intuitive, visually stunning game interfaces and marketing assets for CJC Race.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Join the Race
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Careers at CJC Race
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We are building something real — a blockchain game that actually pays
            out. If you want to work on technology that matters to players, we
            want to hear from you.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { title: "Remote First", desc: "Work from anywhere in the world. We care about output, not location." },
            { title: "Real Impact", desc: "Every feature you build directly affects thousands of players and their earnings." },
            { title: "Competitive Pay", desc: "Salary in USDT or fiat, plus CJC token allocation for all full-time roles." },
          ].map((val, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <h3 className="font-display font-bold text-primary mb-2">{val.title}</h3>
              <p className="text-foreground/50 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Roles */}
        <h2 className="font-display text-2xl font-bold mb-6">Open Positions</h2>
        <div className="flex flex-col gap-4">
          {openRoles.map((role, i) => (
            <div
              key={i}
              className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg">{role.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-primary/30 text-primary font-display">
                    {role.type}
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-foreground/40 mb-3">
                  <span>{role.department}</span>
                  <span>·</span>
                  <span>{role.location}</span>
                </div>
                <p className="text-foreground/60 text-sm">{role.description}</p>
              </div>
              <a
                href="mailto:careers@cjcrace.io"
                className="shrink-0 inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-xs tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        {/* General apply */}
        <div className="glass-card p-8 text-center mt-8">
          <h3 className="font-display text-xl font-bold mb-2">Don't see your role?</h3>
          <p className="text-foreground/50 text-sm mb-6">
            We are always looking for talented people. Send us your CV and tell us how you can contribute.
          </p>
          <a
            href="mailto:careers@cjcrace.io"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-xs tracking-widest px-8 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase"
          >
            Send General Application
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Careers;
