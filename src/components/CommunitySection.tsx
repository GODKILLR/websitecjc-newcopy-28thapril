import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Users, Trophy, MessageCircle, Twitter, Disc, Heart, Share2, ExternalLink } from "lucide-react";

const recentWinners = [
  { name: "RacingKing", race: "Champion Stakes - 1800m", prize: "12,500 CJC", time: "2m ago", avatar: "👑" },
  { name: "SpeedDemon99", race: "League Challenge - Short", prize: "8,200 CJC", time: "5m ago", avatar: "🐎" },
  { name: "CryptoJockey", race: "Grand Master Cup", prize: "25,000 CJC", time: "8m ago", avatar: "🏇" },
  { name: "ThunderRider", race: "PVP Match #4,832", prize: "3,500 CJC", time: "12m ago", avatar: "⚡" },
  { name: "ChampionStables", race: "CJC Jackpot Trophy", prize: "156,000 CJC", time: "18m ago", avatar: "🏆" },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Tycoon Club Member",
    avatar: "🎮",
    content: "Been playing for 3 months. Earned enough to cover my membership and then some. The racing mechanics are genuinely skill-based!",
    likes: 234,
  },
  {
    name: "Maria Santos",
    role: "League Champion",
    avatar: "🏆",
    content: "Finally a P2E game that rewards actual skill. The exit timing and stamina management creates real depth. Love it!",
    likes: 189,
  },
  {
    name: "James Wilson",
    role: "NFT Collector",
    avatar: "💎",
    content: "The horse breeding and synthesis system is addictive. Just upgraded my N rarity to SR. The grind feels rewarding.",
    likes: 156,
  },
];

const socialStats = [
  { platform: "Discord", icon: Disc, members: "45,000+", color: "text-indigo-400" },
  { platform: "Twitter", icon: Twitter, members: "128,000+", color: "text-sky-400" },
  { platform: "Players", icon: Users, members: "85,000+", color: "text-emerald-400" },
];

const CommunitySection = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % recentWinners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="community">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Community
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            Join the Racing Community
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Connect with thousands of players worldwide. Share strategies, celebrate wins, and compete in exclusive events.
          </p>
        </motion.div>

        {/* Social Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {socialStats.map((stat, i) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} />
              <p className="font-display text-2xl font-bold mb-1">{stat.members}</p>
              <p className="text-xs text-foreground/50">{stat.platform}</p>
            </motion.div>
          ))}
        </div>

        {/* Live Winners Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden mb-12 max-w-3xl mx-auto"
        >
          <div className="p-4 border-b border-border/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-display text-sm">Recent Winners</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-foreground/50">Live</span>
            </div>
          </div>

          <div className="relative h-16 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={tickerIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{recentWinners[tickerIndex].avatar}</div>
                  <div>
                    <p className="font-display text-sm">{recentWinners[tickerIndex].name}</p>
                    <p className="text-xs text-foreground/50">{recentWinners[tickerIndex].race}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-sm text-gradient-gold">{recentWinners[tickerIndex].prize}</p>
                  <p className="text-xs text-foreground/50">{recentWinners[tickerIndex].time}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1 pb-4">
            {recentWinners.map((_, i) => (
              <button
                key={i}
                onClick={() => setTickerIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === tickerIndex ? "bg-primary w-4" : "bg-foreground/20"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-col items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-8 rounded-full transition-all ${i === activeTestimonial ? "bg-primary" : "bg-foreground/20"}`}
                  />
                ))}
              </div>

              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl text-primary/20 mb-4">""</div>

                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                      {testimonials[activeTestimonial].content}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{testimonials[activeTestimonial].avatar}</div>
                        <div>
                          <p className="font-display">{testimonials[activeTestimonial].name}</p>
                          <p className="text-xs text-foreground/50">{testimonials[activeTestimonial].role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm text-foreground/50 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          {testimonials[activeTestimonial].likes}
                        </button>
                        <button className="text-foreground/50 hover:text-foreground transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://discord.gg/cjcrace"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground font-display text-sm tracking-widest px-8 py-4 rounded-lg hover:opacity-90 transition-opacity uppercase flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Join Discord
          </a>
          <a
            href="https://twitter.com/CJCRace"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card text-foreground font-display text-sm tracking-widest px-8 py-4 rounded-lg hover:border-primary/50 transition-colors uppercase flex items-center gap-2"
          >
            <Twitter className="w-4 h-4" />
            Follow Twitter
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
