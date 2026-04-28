import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Newspaper, Megaphone, Trophy, Sparkles } from "lucide-react";

const featuredPost = {
  category: "Featured",
  title: "Skill-Based Play-to-Earn — How CJC Race Pays Players for Real",
  excerpt:
    "Most blockchain games promise rewards but never pay out. CJC Race is built differently — every race is decided by skill, not luck, and players earn real CJC coins that move on-chain. Here's how it actually works.",
  date: "April 25, 2026",
  readTime: "5 min read",
  image: "/src/assets/gameplay-bg.jpg",
};

const posts = [
  {
    category: "Update",
    icon: Sparkles,
    title: "2026 H1 Roadmap Update",
    excerpt:
      "Our team has completed all 2025 milestones. Here's what's coming in the first half of 2026.",
    date: "April 22, 2026",
    readTime: "3 min",
    color: "#60A5FA",
  },
  {
    category: "Tournament",
    icon: Trophy,
    title: "Championship Stakes Returns with $1,000 Daily Pool",
    excerpt:
      "League members can now compete in Championship Stakes, with $1,000 distributed daily to top performers.",
    date: "April 18, 2026",
    readTime: "2 min",
    color: "#F59E0B",
  },
  {
    category: "Community",
    icon: Megaphone,
    title: "Ambassador Program — Now Open for Applications",
    excerpt:
      "Join a global network of CJC Race ambassadors. Earn up to $500/month, exclusive merch, and direct access to the team.",
    date: "April 15, 2026",
    readTime: "5 min",
    color: "#A78BFA",
  },
  {
    category: "Announcement",
    icon: Newspaper,
    title: "Refer & Earn Program Live",
    excerpt:
      "Invite friends to CJC Race and earn rewards together. Top referrers earn up to $500 in monthly rewards.",
    date: "April 10, 2026",
    readTime: "2 min",
    color: "#10B981",
  },
  {
    category: "Update",
    icon: Sparkles,
    title: "New Game Modes — Practice Mode Released",
    excerpt:
      "Train without risk. Practice Mode is now live for all players to test horse builds and master race mechanics.",
    date: "April 5, 2026",
    readTime: "3 min",
    color: "#EF4444",
  },
  {
    category: "Tournament",
    icon: Trophy,
    title: "Grand Master Cup — March Champions",
    excerpt:
      "Congratulations to last month's Grand Master Cup winners. Check the leaderboard for full results.",
    date: "April 1, 2026",
    readTime: "2 min",
    color: "#EC4899",
  },
];

const categories = ["All", "Announcement", "Update", "Tournament", "Community"];

const News = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            News & Updates
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Latest from CJC Race
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Game updates, tournament results, community spotlights, and
            announcements — all in one place.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg font-display text-xs tracking-wider uppercase transition-colors ${
                i === 0
                  ? "bg-primary text-background"
                  : "border border-border/30 text-foreground/60 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl border border-primary/20 overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="relative min-h-[280px] lg:min-h-0">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block self-start font-display text-[10px] tracking-widest text-primary uppercase px-3 py-1 rounded-full border border-primary/30 mb-4">
              {featuredPost.category}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-foreground/40 text-xs mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {featuredPost.date}
              </span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 self-start font-display text-sm tracking-wider text-primary hover:gap-3 transition-all uppercase"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 border-border/30 rounded-xl hover:border-primary/30 transition-colors group cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                  }}
                >
                  <p.icon className="w-4 h-4" style={{ color: p.color }} />
                </div>
                <span
                  className="font-display text-[10px] tracking-widest uppercase"
                  style={{ color: p.color }}
                >
                  {p.category}
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>

              <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                {p.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/20">
                <span className="text-foreground/40 text-xs flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {p.date}
                </span>
                <span className="text-foreground/40 text-xs">{p.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div
          className="rounded-2xl border border-primary/20 p-10 md:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,14,0.95) 50%, rgba(201,168,76,0.04) 100%)",
          }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Never Miss an Update
          </h2>
          <p className="text-foreground/60 text-sm max-w-md mx-auto mb-6">
            Subscribe to our newsletter for the latest news, game updates, and
            exclusive announcements straight to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed! Welcome to the CJC Race newsletter.");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-6 py-3 rounded-lg transition-colors uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default News;
