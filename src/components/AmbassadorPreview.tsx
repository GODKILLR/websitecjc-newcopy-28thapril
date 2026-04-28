import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Megaphone, Gift, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Megaphone,
    title: "Represent CJC Race",
    desc: "Be the voice of CJC in your region and community.",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    desc: "Earn up to $500/month, merch, and early access to features.",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Join ambassadors worldwide and grow with the ecosystem.",
  },
];

const AmbassadorPreview = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div
          className="rounded-2xl border border-primary/20 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,14,0.95) 40%, rgba(201,168,76,0.04) 100%)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
              Ambassador Program
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
              Become a CJC Ambassador
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Represent CJC Race in your community. Earn exclusive rewards. Get early access. Up to $500 monthly for top tier ambassadors.
            </p>
          </div>

          {/* 3 Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="text-center p-5 rounded-xl border border-border/30 bg-background/50"
              >
                <div
                  className="w-11 h-11 mx-auto mb-3 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground tracking-wide mb-1">
                  {h.title}
                </h4>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/ambassador"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-8 py-3.5 rounded-lg transition-colors uppercase"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AmbassadorPreview;
