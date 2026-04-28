import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Trophy, Medal, Clock, Crown, ChevronRight, Flame, Star } from "lucide-react";

// Mock leaderboard data
const mockLeaderboard = {
  season: 3,
  seasonName: "Spring Sprint 2025",
  daysRemaining: 12,
  totalRaces: 45231,
  totalPrize: 1250000,
  players: [
    { rank: 1, name: "RacingKing", points: 45280, wins: 342, avatar: "👑", streak: 12, change: "up" },
    { rank: 2, name: "SpeedDemon99", points: 42150, wins: 298, avatar: "🐎", streak: 8, change: "same" },
    { rank: 3, name: "CryptoJockey", points: 39890, wins: 276, avatar: "🏇", streak: 5, change: "up" },
    { rank: 4, name: "ThunderRider", points: 37560, wins: 254, avatar: "⚡", streak: 0, change: "down" },
    { rank: 5, name: "ChampionStables", points: 36200, wins: 241, avatar: "🏆", streak: 3, change: "up" },
    { rank: 6, name: "NeonGallop", points: 34890, wins: 228, avatar: "✨", streak: 2, change: "up" },
    { rank: 7, name: "VelvetHooves", points: 33540, wins: 215, avatar: "🌟", streak: 1, change: "down" },
    { rank: 8, name: "DigitalDerby", points: 32100, wins: 198, avatar: "💎", streak: 0, change: "same" },
  ],
  rewards: [
    { rank: "1st", reward: "500,000 CJC", prize: "50,000 Diamonds", badge: "🏆" },
    { rank: "2nd", reward: "250,000 CJC", prize: "25,000 Diamonds", badge: "🥈" },
    { rank: "3rd", reward: "100,000 CJC", prize: "10,000 Diamonds", badge: "🥉" },
    { rank: "4-10", reward: "50,000 CJC", prize: "5,000 Diamonds", badge: "⭐" },
    { rank: "11-50", reward: "25,000 CJC", prize: "2,500 Diamonds", badge: "💎" },
    { rank: "51-100", reward: "10,000 CJC", prize: "1,000 Diamonds", badge: "🎯" },
  ],
};

const personalStats = {
  rank: 47,
  points: 18540,
  wins: 98,
  nextRank: 46,
  pointsToNext: 320,
};

const LeaderboardSection = () => {
  const [activeTab, setActiveTab] = useState("rankings");
  const [countdown, setCountdown] = useState({ days: 12, hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="leaderboard">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            League Challenges
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            Climb the Ranks
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
            Compete in League Challenges across Short, Medium, and Long distances. Earn points, climb the leaderboard, and claim seasonal rewards.
          </p>

          {/* Season Info */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="glass-card px-6 py-3 flex items-center gap-3">
              <Trophy className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-foreground/50">Current Season</p>
                <p className="font-display text-sm">{mockLeaderboard.seasonName}</p>
              </div>
            </div>
            <div className="glass-card px-6 py-3 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-foreground/50">Time Remaining</p>
                <p className="font-display text-sm">{countdown.days}d {countdown.hours}h {countdown.minutes}m</p>
              </div>
            </div>
            <div className="glass-card px-6 py-3 flex items-center gap-3">
              <Medal className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-foreground/50">Total Prize Pool</p>
                <p className="font-display text-sm text-gradient-gold">{(mockLeaderboard.totalPrize / 1000000).toFixed(2)}M CJC</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {["rankings", "rewards", "my-position"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-display text-sm tracking-wider transition-all ${
                activeTab === tab
                  ? "gradient-gold text-primary-foreground"
                  : "glass-card text-foreground/70 hover:text-foreground"
              }`}
            >
              {tab === "rankings" && "Rankings"}
              {tab === "rewards" && "Season Rewards"}
              {tab === "my-position" && "My Position"}
            </button>
          ))}
        </div>

        {/* Rankings */}
        {activeTab === "rankings" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border/30 text-xs text-foreground/50 uppercase tracking-wider">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-5">Player</div>
                <div className="col-span-3 text-right">Points</div>
                <div className="col-span-2 text-right">Wins</div>
                <div className="col-span-1"></div>
              </div>

              {/* Players */}
              <div className="divide-y divide-border/30">
                {mockLeaderboard.players.map((player, i) => (
                  <motion.div
                    key={player.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-card/40 transition-colors cursor-pointer group ${
                      player.rank <= 3 ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="col-span-1 text-center">
                      {player.rank === 1 && <Crown className="w-5 h-5 text-amber-400 mx-auto" />}
                      {player.rank === 2 && <Medal className="w-5 h-5 text-slate-400 mx-auto" />}
                      {player.rank === 3 && <Medal className="w-5 h-5 text-amber-600 mx-auto" />}
                      {player.rank > 3 && <span className="font-display text-foreground/50">{player.rank}</span>}
                    </div>
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-card/60 flex items-center justify-center text-lg">
                        {player.avatar}
                      </div>
                      <div>
                        <p className="font-display text-sm">{player.name}</p>
                        {player.streak > 0 && (
                          <div className="flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-500" />
                            <span className="text-xs text-orange-500">{player.streak} win streak</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-3 text-right font-display text-primary">
                      {player.points.toLocaleString()}
                    </div>
                    <div className="col-span-2 text-right text-sm text-foreground/60">
                      {player.wins}
                    </div>
                    <div className="col-span-1 text-right">
                      <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Rewards */}
        {activeTab === "rewards" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              {mockLeaderboard.rewards.map((reward, i) => (
                <motion.div
                  key={reward.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex items-center gap-4"
                >
                  <div className="text-3xl">{reward.badge}</div>
                  <div className="flex-1">
                    <p className="font-display text-lg">{reward.rank} Place</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground/70">{reward.reward}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Medal className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground/70">{reward.prize}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* My Position — wallet gated, feature coming soon */}
        {activeTab === "my-position" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="glass-card p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Connect Your Wallet to See Your Position
              </h3>
              <p className="text-foreground/60 text-sm max-w-sm mx-auto mb-6">
                Personal rank tracking requires a connected wallet. This feature is coming soon.
              </p>
              <span className="inline-block font-display text-xs tracking-widest text-primary uppercase px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                Feature Coming Soon
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LeaderboardSection;
