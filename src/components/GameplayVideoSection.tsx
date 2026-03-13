import { motion } from "framer-motion";
import { Play, ChevronRight, Zap, Target, Gauge } from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Zap, label: "Manual Control", desc: "Real-time jockey control" },
  { icon: Target, label: "Exit Timing", desc: "Perfect start mechanics" },
  { icon: Gauge, label: "Stamina System", desc: "Strategic energy management" },
];

const GameplayVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Gameplay
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            Experience the Thrill
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Master the track with real-time controls, strategic stamina management, and pulse-pounding multiplayer racing
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <div className="glass-card overflow-hidden rounded-2xl border border-primary/20">
            {/* Video Placeholder / Player */}
            <div className="relative aspect-video bg-gradient-to-br from-card via-card/80 to-background flex items-center justify-center group cursor-pointer"
                 onClick={() => setIsPlaying(!isPlaying)}>
              {/* Animated track lines */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
                    style={{ top: `${20 + i * 15}%` }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                  />
                ))}
              </div>

              {/* Play Button */}
              <motion.div
                className={`w-24 h-24 rounded-full gradient-gold flex items-center justify-center shadow-lg ${isPlaying ? 'scale-90' : 'scale-100'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <div className="w-8 h-8 flex gap-1">
                    <div className="w-3 h-8 bg-primary-foreground rounded-sm" />
                    <div className="w-3 h-8 bg-primary-foreground rounded-sm" />
                  </div>
                ) : (
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                )}
              </motion.div>

              {/* Video Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm text-primary">Official Trailer</p>
                  <p className="text-xs text-foreground/50">2:34 | 4K HD</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground/50">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  12,405 watching
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Video Progress Bar */}
            <div className="h-1 bg-card/40">
              <motion.div
                className="h-full gradient-gold"
                initial={{ width: "0%" }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 cursor-pointer transition-all ${activeFeature === i ? 'border-primary/50 bg-primary/5' : ''}`}
              onClick={() => setActiveFeature(i)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${activeFeature === i ? 'gradient-gold' : 'bg-card/40'}`}>
                  <feature.icon className={`w-6 h-6 ${activeFeature === i ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm tracking-wider text-foreground mb-1">{feature.label}</h3>
                  <p className="text-xs text-foreground/50">{feature.desc}</p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeFeature === i ? 'text-primary rotate-90' : 'text-foreground/30'}`} />
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{ height: activeFeature === i ? "auto" : 0, opacity: activeFeature === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-border/30">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {i === 0 && "Take full control of your jockey during races. Use the whip for speed boosts, manage direction with precision, and time your moves for maximum impact."}
                    {i === 1 && "Master the exit timing minigame. Tap precisely when the pointers overlap to achieve the perfect start and gain an early advantage over competitors."}
                    {i === 2 && "Balance speed and stamina carefully. Higher speeds consume stamina faster, and strategic whip usage can mean the difference between victory and exhaustion."}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.cjcrace.io/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-widest px-8 py-4 rounded-lg hover:opacity-90 transition-opacity uppercase glow-gold"
          >
            <Play className="w-4 h-4" />
            Play Free Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GameplayVideoSection;
