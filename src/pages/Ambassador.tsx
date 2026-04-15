import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Crown,
  Gift,
  Users,
  Globe,
  Megaphone,
  Zap,
  MessageCircle,
  Video,
  PenTool,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";

/* ── Tier data ───────────────────────────────────────────────────────────── */
const tiers = [
  {
    name: "Bronze",
    icon: Star,
    color: "#CD7F32",
    requirement: "Getting started",
    benefits: [
      "Exclusive Discord role & channel access",
      "Monthly CJC coin rewards",
      "Early news & feature previews",
      "Official Ambassador badge",
    ],
  },
  {
    name: "Silver",
    icon: Trophy,
    color: "#C0C0C0",
    requirement: "Consistent contribution",
    benefits: [
      "Everything in Bronze",
      "Up to $250/month in CJC rewards",
      "CJC Race merchandise pack",
      "Direct access to the team",
      "Beta testing access for new features",
    ],
    featured: false,
  },
  {
    name: "Gold",
    icon: Crown,
    color: "#C9A84C",
    requirement: "Top-tier ambassador",
    benefits: [
      "Everything in Silver",
      "Up to $500/month in CJC rewards",
      "Revenue share on referrals",
      "Exclusive NFT drops",
      "Invite to private events & AMAs",
      "Co-creation opportunities with the team",
    ],
    featured: true,
  },
];

/* ── What we look for ────────────────────────────────────────────────────── */
const roles = [
  {
    icon: PenTool,
    title: "Content Creators",
    desc: "Create videos, articles, guides, or social media content about CJC Race. Share gameplay strategies, tutorials, and updates with your audience.",
  },
  {
    icon: MessageCircle,
    title: "Community Leaders",
    desc: "Moderate and grow CJC Race communities on Discord, Telegram, or regional forums. Help onboard new players and answer questions.",
  },
  {
    icon: Globe,
    title: "Regional Representatives",
    desc: "Represent CJC Race in your country or region. Translate content, build local communities, and bring CJC to new markets.",
  },
  {
    icon: Video,
    title: "Streamers & Influencers",
    desc: "Stream CJC Race gameplay, host watch parties, or showcase the game to your followers across platforms like YouTube, Twitch, or TikTok.",
  },
];

/* ── How it works steps ──────────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    title: "Apply",
    desc: "Fill out the application form with your background, social profiles, and why you want to represent CJC Race.",
  },
  {
    step: "02",
    title: "Review",
    desc: "Our team reviews your application. We look for passion, community presence, and alignment with CJC values.",
  },
  {
    step: "03",
    title: "Onboard",
    desc: "Accepted ambassadors receive a welcome kit, Discord access, brand assets, and your first set of tasks.",
  },
  {
    step: "04",
    title: "Contribute & Earn",
    desc: "Complete tasks, create content, grow the community, and earn rewards. Progress through tiers as your impact grows.",
  },
];

/* ── Requirements ────────────────────────────────────────────────────────── */
const requirements = [
  "Active social media presence (any platform)",
  "Genuine interest in blockchain gaming and CJC Race",
  "Ability to commit at least 5 hours per week",
  "Strong communication skills",
  "Must be 18 years or older",
  "No history of involvement in scams or fraudulent projects",
];

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <div className="text-center mb-20">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Ambassador Program
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Become a CJC Ambassador
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg mb-8">
            Join a global network of passionate community members who represent
            CJC Race. Earn rewards, get exclusive access, and help shape the
            future of blockchain horse racing.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-8 py-3.5 rounded-lg transition-colors uppercase"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ── Tiers ──────────────────────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ambassador Tiers
            </h2>
            <p className="text-foreground/60 max-w-lg mx-auto text-sm">
              Progress through tiers as your contribution grows. Higher tiers
              unlock better rewards and deeper involvement with the team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border p-6 md:p-8 relative ${
                  tier.featured
                    ? "border-primary/40 bg-primary/5"
                    : "border-border/30 glass-card"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background font-display text-[10px] tracking-widest uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${tier.color}15`,
                      border: `1px solid ${tier.color}30`,
                    }}
                  >
                    <tier.icon
                      className="w-5 h-5"
                      style={{ color: tier.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {tier.name}
                    </h3>
                    <p className="text-foreground/50 text-xs">
                      {tier.requirement}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {tier.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-foreground/70 text-sm"
                    >
                      <Check
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        style={{ color: tier.color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── What we look for ───────────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Look For
            </h2>
            <p className="text-foreground/60 max-w-lg mx-auto text-sm">
              We welcome ambassadors from all backgrounds. Here are the roles
              that make the biggest impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 border-border/30"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <role.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground mb-1">
                      {role.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── How It Works ───────────────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center p-6 rounded-xl border border-border/30 bg-background/50"
              >
                <span className="font-display text-3xl font-bold text-primary/15 block mb-2">
                  {s.step}
                </span>
                <h4 className="font-display text-sm font-bold text-foreground mb-2">
                  {s.title}
                </h4>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  {s.desc}
                </p>

                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/30 text-lg">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Requirements ───────────────────────────────────────────── */}
        <div className="mb-24 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Requirements
            </h2>
          </div>

          <div className="glass-card p-6 md:p-8 border-border/30">
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-foreground/70 text-sm"
                >
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Application Form ─────────────────────────────────────── */}
        <div
          id="apply"
          className="rounded-2xl border border-primary/20 p-8 md:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(10,10,14,0.95) 50%, rgba(201,168,76,0.03) 100%)",
          }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            Ready to go? Apply now!
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Application submitted! Our team will review and get back to you within 7 days.");
            }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground text-sm font-display mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-foreground/20 rounded-full px-5 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-foreground text-sm font-display mb-2">
                  Main social media channel <span className="text-primary">*</span>
                </label>
                <input
                  type="url"
                  required
                  className="w-full bg-transparent border border-foreground/20 rounded-full px-5 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground text-sm font-display mb-2">
                  Discord handle <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-foreground/20 rounded-full px-5 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  placeholder="username#0000"
                />
              </div>
              <div>
                <label className="block text-foreground text-sm font-display mb-2">
                  Additional channels <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-foreground/20 rounded-full px-5 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  placeholder="YouTube, TikTok, Telegram, etc."
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground text-sm font-display mb-2">
                  Polygon wallet <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-foreground/20 rounded-full px-5 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  placeholder="0x..."
                />
              </div>
              <div>
                <label className="block text-foreground text-sm font-display mb-2">
                  Referral code <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-foreground/20 rounded-full px-5 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  placeholder="Enter referral code"
                />
                <p className="text-foreground/50 text-xs mt-2 text-right">
                  Read{" "}
                  <a href="#" className="text-primary hover:underline">
                    here
                  </a>{" "}
                  how to get a referral code
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-12 py-3.5 rounded-full transition-colors uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Ambassador;
