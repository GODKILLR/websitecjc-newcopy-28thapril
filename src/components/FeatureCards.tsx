import { motion } from "framer-motion";
import { Trophy, Coins, Swords, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "EARN",
    desc: "Race to earn CJC coins & rewards",
    color: "from-amber-500/20 to-yellow-600/20",
  },
  {
    icon: Swords,
    title: "NFT RACING",
    desc: "Unique horse & jockey NFTs",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    icon: Trophy,
    title: "LEAGUES",
    desc: "Competitive league challenges",
    color: "from-emerald-500/20 to-green-600/20",
  },
  {
    icon: BarChart3,
    title: "LEADERBOARD",
    desc: "Climb the global rankings",
    color: "from-rose-500/20 to-red-600/20",
  },
];

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
              className={`glass-card p-6 group hover:border-primary/40 transition-all cursor-pointer bg-gradient-to-br ${f.color}`}
            >
              <f.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-sm tracking-widest text-primary mb-1">{f.title}</h3>
              <p className="text-foreground/60 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
