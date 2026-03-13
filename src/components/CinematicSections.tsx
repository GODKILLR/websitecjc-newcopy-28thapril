import { motion } from "framer-motion";
import adventureBanner from "@/assets/adventure-banner.jpg";
import nftBanner from "@/assets/nft-banner.jpg";
import leagueBanner from "@/assets/league-banner.jpg";

const sections = [
  {
    tag: "GAMEPLAY",
    title: "The Thrill of the Track",
    desc: "Race against real players to earn CJC coins, badges and other rewards. Control your Jockey in-game, match attributes, and use in-game props to secure victory.",
    img: adventureBanner,
    cta: { label: "Learn More", href: "https://www.cjcrace.io/gameinfo" },
  },
  {
    tag: "NFT COLLECTION",
    title: "Own Unique Racehorses",
    desc: "Racehorse, Jockey and Item NFTs possess unique attributes and abilities. Upgrade, synthesize and customize your collection to dominate the track.",
    img: nftBanner,
    cta: { label: "Browse NFTs", href: "https://market.cjcrace.io" },
    reverse: true,
  },
  {
    tag: "LEAGUE",
    title: "Compete in League Challenges",
    desc: "League Challenges are exclusive to members and offer competitive gameplay across short, medium, and long distances. Rise through the ranks.",
    img: leagueBanner,
    cta: { label: "Join League", href: "https://www.cjcrace.io/gameinfo" },
  },
];

const CinematicSections = () => {
  return (
    <section id="game-info" className="py-10">
      {sections.map((s, i) => (
        <div key={s.tag} className="relative mb-2">
          {/* Full-width image */}
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            {s.reverse && (
              <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-transparent" />
            )}
          </div>

          {/* Text overlay */}
          <div className={`absolute inset-0 flex items-center ${s.reverse ? "justify-end" : "justify-start"}`}>
            <motion.div
              initial={{ opacity: 0, x: s.reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`container max-w-lg ${s.reverse ? "text-right mr-8 md:mr-24" : "ml-8 md:ml-24"}`}
            >
              <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">{s.tag}</span>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 tracking-wide">
                {s.title}
              </h2>
              <p className="text-foreground/70 text-base md:text-lg mb-6 leading-relaxed">{s.desc}</p>
              <a
                href={s.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glass-card px-6 py-3 font-display text-sm tracking-widest text-primary border-primary/40 hover:bg-primary/10 transition-colors uppercase"
              >
                {s.cta.label}
              </a>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CinematicSections;
