import { motion } from "framer-motion";
import { Share2, Users, Gift } from "lucide-react";

const steps = [
  {
    icon: Share2,
    step: "01",
    title: "Share Your Link",
    desc: "Get your unique referral link from the dashboard and share it with friends.",
  },
  {
    icon: Users,
    step: "02",
    title: "Friends Join & Race",
    desc: "They sign up using your link and complete their first race.",
  },
  {
    icon: Gift,
    step: "03",
    title: "Both Earn Rewards",
    desc: "You earn CJC coins for every active referral. Top referrers earn up to $500/month.",
  },
];

const ReferAndEarn = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main card */}
        <div
          className="rounded-2xl border border-primary/20 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(10,10,14,0.95) 50%, rgba(201,168,76,0.04) 100%)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
              Refer & Earn
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
              Invite Friends, Earn Rewards
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Share your referral link with friends. When they sign up and race, you both earn CJC
              coins. Top referrers earn up to $500 in rewards monthly.
            </p>
          </div>

          {/* 3-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="relative text-center p-6 rounded-xl border border-border/30 bg-background/50"
              >
                {/* Step number */}
                <span className="absolute top-3 left-4 font-display text-[10px] tracking-widest text-primary/40">
                  {s.step}
                </span>
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground tracking-wide mb-2">
                  {s.title}
                </h4>
                <p className="text-foreground/60 text-xs leading-relaxed">{s.desc}</p>

                {/* Connector arrow (hidden on last and on mobile) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/30 text-lg">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.cjcrace.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-8 py-3.5 rounded-lg transition-colors uppercase"
            >
              Get Your Referral Link
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReferAndEarn;
