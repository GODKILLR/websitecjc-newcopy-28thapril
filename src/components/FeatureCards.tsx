import { motion } from "framer-motion";
import { Trophy, Coins, Swords, BarChart3 } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Coins,
    title: "EARN",
    desc: "Race to earn CJC coins & rewards",
    color: "from-amber-500/20 to-yellow-600/20",
    accentColor: "from-amber-500 to-yellow-600",
    stats: { speed: 85, stamina: 70, luck: 60 },
  },
  {
    icon: Swords,
    title: "NFT RACING",
    desc: "Unique horse & jockey NFTs",
    color: "from-cyan-500/20 to-blue-600/20",
    accentColor: "from-cyan-500 to-blue-600",
    stats: { speed: 75, stamina: 90, luck: 80 },
  },
  {
    icon: Trophy,
    title: "LEAGUES",
    desc: "Competitive league challenges",
    color: "from-emerald-500/20 to-green-600/20",
    accentColor: "from-emerald-500 to-green-600",
    stats: { speed: 95, stamina: 75, luck: 70 },
  },
  {
    icon: BarChart3,
    title: "LEADERBOARD",
    desc: "Climb the global rankings",
    color: "from-rose-500/20 to-red-600/20",
    accentColor: "from-rose-500 to-red-600",
    stats: { speed: 80, stamina: 85, luck: 90 },
  },
];

// Animated horse icon that gallops across the card
const GallopingHorse = ({ color }: { color: string }) => (
  <motion.div
    className="absolute bottom-2 left-2 text-lg"
    initial={{ x: -10, opacity: 0 }}
    whileHover={{ x: 60, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <motion.span
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity }}
      className="inline-block"
    >
      🐴
    </motion.span>
  </motion.div>
);

// Progress bar resembling a race track finish line
const TrackProgress = ({ color }: { color: string }) => (
  <motion.div
    className="absolute bottom-0 left-0 right-0 h-1 bg-card/40 overflow-hidden"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className={`h-full bg-gradient-to-r ${color}`}
      initial={{ width: "0%" }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    {/* Finish line marker */}
    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-full bg-white/50" />
  </motion.div>
);

// Dynamic stats that shuffle on hover
const StatsShuffle = ({ stats, accentColor }: { stats: { speed: number; stamina: number; luck: number }; accentColor: string }) => {
  const [displayStats, setDisplayStats] = useState(stats);

  const handleHover = () => {
    // Slight randomization for dynamic effect
    setDisplayStats({
      speed: Math.min(100, Math.max(0, stats.speed + (Math.random() * 10 - 5))),
      stamina: Math.min(100, Math.max(0, stats.stamina + (Math.random() * 10 - 5))),
      luck: Math.min(100, Math.max(0, stats.luck + (Math.random() * 10 - 5))),
    });
  };

  return (
    <motion.div
      className="absolute inset-0 bg-card/90 backdrop-blur-sm p-4 flex flex-col justify-center gap-2"
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ opacity: 1, scale: 1 }}
      onHoverStart={handleHover}
      transition={{ duration: 0.3 }}
    >
      {Object.entries(displayStats).map(([stat, value]) => (
        <div key={stat} className="flex items-center gap-2">
          <span className="text-[10px] font-display tracking-wider text-foreground/60 uppercase w-16">
            {stat}
          </span>
          <div className="flex-1 h-1.5 bg-card/40 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${accentColor}`}
              initial={{ width: 0 }}
              whileHover={{ width: `${value}%` }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </div>
          <span className="text-[10px] font-display text-primary w-8 text-right">
            {Math.round(value)}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

const FeatureCards = () => {
  return (
    <section className="relative z-10 -mt-24 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 group hover:border-primary/40 transition-all cursor-pointer bg-gradient-to-br ${f.color} relative overflow-hidden sweep-flag`}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Main content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <f.icon className="w-8 h-8 text-primary mb-3" />
                </motion.div>
                <h3 className="font-display text-sm tracking-widest text-primary mb-1 silk-underline inline-block">
                  {f.title}
                </h3>
                <p className="text-foreground/60 text-sm">{f.desc}</p>
              </div>

              {/* Galloping horse on hover */}
              <GallopingHorse color={f.accentColor} />

              {/* Track progress bar */}
              <TrackProgress color={f.accentColor} />

              {/* Stats overlay on hover */}
              <StatsShuffle stats={f.stats} accentColor={f.accentColor} />

              {/* Particle burst on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: (Math.random() - 0.5) * 80,
                      y: (Math.random() - 0.5) * 80,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: j * 0.05,
                    }}
                    style={{
                      left: `${50 + (Math.random() - 0.5) * 60}%`,
                      top: `${50 + (Math.random() - 0.5) * 60}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
