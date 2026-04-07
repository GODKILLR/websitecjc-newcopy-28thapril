import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const team = [
  {
    name: "Coming Soon",
    role: "Chief Executive Officer",
    bio: "Leading the vision behind CJC Race — building the most legitimate play-to-earn horse racing game on blockchain.",
    avatar: "👤",
  },
  {
    name: "Coming Soon",
    role: "Chief Technology Officer",
    bio: "Architecting the smart contract infrastructure and game engine that powers real, verifiable payouts.",
    avatar: "👤",
  },
  {
    name: "Coming Soon",
    role: "Head of Game Design",
    bio: "Designing the race mechanics, NFT attribute systems and competitive league structures.",
    avatar: "👤",
  },
  {
    name: "Coming Soon",
    role: "Head of Blockchain",
    bio: "Ensuring every transaction, payout and NFT trade is secure, transparent and on-chain.",
    avatar: "👤",
  },
  {
    name: "Coming Soon",
    role: "Head of Community",
    bio: "Growing and supporting the CJC Race community across Discord, Telegram and social platforms.",
    avatar: "👤",
  },
  {
    name: "Coming Soon",
    role: "Head of Marketing",
    bio: "Driving awareness and adoption of CJC Race across global markets.",
    avatar: "👤",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            The People Behind CJC Race
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Meet the Team
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We are a team of blockchain engineers, game designers and competitive
            gaming veterans building the most transparent and legitimate
            play-to-earn racing game on the market.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary/40 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl mb-4">
                {member.avatar}
              </div>
              <h3 className="font-display text-lg font-bold mb-1">{member.name}</h3>
              <span className="text-primary text-xs font-display tracking-wider uppercase mb-4">
                {member.role}
              </span>
              <p className="text-foreground/50 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-foreground/40 text-sm">
            Full team profiles and LinkedIn links coming soon.
          </p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Team;
