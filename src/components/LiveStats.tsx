import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Trophy, Wallet, Activity } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    label: "Races Completed",
    value: 48250,
    suffix: "+",
    color: "from-amber-500 to-yellow-600",
  },
  {
    icon: Users,
    label: "Active Players",
    value: 12500,
    suffix: "+",
    color: "from-cyan-500 to-blue-600",
    live: true,
  },
  {
    icon: Wallet,
    label: "NFTs Minted",
    value: 8750,
    suffix: "",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Activity,
    label: "Total Earnings",
    value: 2450000,
    prefix: "$",
    suffix: "",
    color: "from-rose-500 to-red-600",
  },
];

const formatNumber = (num: number, prefix?: string, suffix?: string) => {
  if (num >= 1000000) {
    return `${prefix}${(num / 1000000).toFixed(1)}M${suffix}`;
  }
  if (num >= 1000) {
    return `${prefix}${(num / 1000).toFixed(0)}K${suffix}`;
  }
  return `${prefix}${num}${suffix}`;
};

const AnimatedCounter = ({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (current) => {
          if (ref.current) {
            ref.current.textContent = formatNumber(current, prefix, suffix);
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return <span ref={ref} className="tabular-nums" />;
};

const LiveStats = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">Live Statistics</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 tracking-wide">
            Race Ecosystem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                {stat.live && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-display tracking-wider text-primary uppercase">Live</span>
                  </div>
                )}
              </div>

              <div className="font-display text-2xl md:text-3xl font-bold text-gradient-gold mb-1">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-foreground/60 text-sm font-body">{stat.label}</p>

              {/* Mini progress bar decoration */}
              <div className="mt-4 h-1 bg-card/40 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${stat.color}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
