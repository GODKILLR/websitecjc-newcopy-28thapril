import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import {
  Monitor,
  Apple,
  Smartphone,
  Cpu,
  HardDrive,
  MemoryStick,
  Wifi,
  Check,
  ChevronRight,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import heroImg from "@/assets/gameplay-bg.jpg";

/* ── Platform data ───────────────────────────────────────────────────────── */
const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    tag: "PC",
    version: "v2.4.1",
    size: "1.8 GB",
    link: "https://www.cjcrace.io/download",
    color: "#60A5FA",
    requirements: [
      "Windows 10/11 (64-bit)",
      "Intel i5 / AMD Ryzen 5 or better",
      "8 GB RAM",
      "4 GB storage",
      "DirectX 11 compatible GPU",
    ],
  },
  {
    name: "macOS",
    icon: Apple,
    tag: "Mac",
    version: "v2.4.1",
    size: "2.0 GB",
    link: "https://www.cjcrace.io/download",
    color: "#A78BFA",
    requirements: [
      "macOS 12 Monterey or later",
      "Apple M1 chip or Intel i5",
      "8 GB RAM",
      "4 GB storage",
      "Metal compatible GPU",
    ],
  },
  {
    name: "iOS",
    icon: Smartphone,
    tag: "iPhone / iPad",
    version: "v2.4.0",
    size: "850 MB",
    link: "https://apps.apple.com/app/cjc-race",
    color: "#F59E0B",
    requirements: [
      "iOS 16 or later",
      "iPhone 12 or newer",
      "iPad (9th gen) or newer",
      "2 GB free storage",
      "Stable internet connection",
    ],
  },
  {
    name: "Android",
    icon: Smartphone,
    tag: "Phone / Tablet",
    version: "v2.4.0",
    size: "780 MB",
    link: "https://play.google.com/store/apps/details?id=io.cjcrace",
    color: "#10B981",
    requirements: [
      "Android 11 or later",
      "Snapdragon 720G / equivalent",
      "4 GB RAM",
      "2 GB free storage",
      "Stable internet connection",
    ],
  },
];

const features = [
  {
    icon: Zap,
    title: "Cross-Platform Play",
    desc: "Race against players on any device. Your account syncs seamlessly across all platforms.",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    desc: "All downloads are digitally signed. Your assets and wallet are protected with end-to-end encryption.",
  },
  {
    icon: Globe,
    title: "Global Servers",
    desc: "Low-latency servers across Asia, Europe, and Americas for smooth real-time racing.",
  },
];

const steps = [
  { step: "1", title: "Download", desc: "Choose your platform and download the client" },
  { step: "2", title: "Install", desc: "Run the installer and follow the setup wizard" },
  { step: "3", title: "Register", desc: "Sign up with your email to create your account" },
  { step: "4", title: "Race", desc: "Jump into your first race and start earning" },
];

const Download = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={heroImg}
          alt="CJC Race"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Get Started
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Download <span className="text-gradient-gold">CJC Race</span>
            </h1>
            <p className="text-foreground/60 text-base md:text-lg max-w-lg mx-auto">
              Available on PC, Mac, iOS, and Android. Choose your platform and
              start racing in minutes.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="container py-16">
        {/* ── Platform Cards ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card border-border/30 rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${p.color}12`,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    <p.icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {p.name}
                    </h3>
                    <p className="text-foreground/40 text-xs">{p.tag}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-5">
                  <span>{p.version}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/20" />
                  <span>{p.size}</span>
                </div>

                {/* Download button */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-wider py-3 rounded-lg hover:opacity-90 transition-opacity uppercase"
                >
                  Download
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Requirements */}
              <div className="border-t border-border/20 p-6 pt-4">
                <p className="text-[10px] font-display tracking-widest text-foreground/30 uppercase mb-3">
                  System Requirements
                </p>
                <ul className="space-y-2">
                  {p.requirements.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-foreground/60 text-xs"
                    >
                      <Check
                        className="w-3 h-3 mt-0.5 shrink-0"
                        style={{ color: p.color }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── How to Get Started ──────────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Up and Running in 4 Steps
            </h2>
            <p className="text-foreground/50 text-sm">
              From download to your first race — it takes less than 10 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center p-6 rounded-xl border border-border/30 bg-card/20"
              >
                <span className="font-display text-4xl font-bold text-primary/10 block mb-2">
                  {s.step}
                </span>
                <h4 className="font-display text-sm font-bold text-foreground mb-2">
                  {s.title}
                </h4>
                <p className="text-foreground/50 text-xs leading-relaxed">
                  {s.desc}
                </p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/30 text-lg">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Features Row ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 border-border/30 flex items-start gap-4"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-foreground mb-1">
                  {f.title}
                </h4>
                <p className="text-foreground/50 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "Is CJC Race free to download?",
                a: "Yes, CJC Race is free to download and install on all platforms. You need NFT horses to race competitively, which can be purchased from the marketplace.",
              },
              {
                q: "Can I use the same account across devices?",
                a: "Absolutely. Your account is linked to your wallet. Log in on any platform and your horses, items, and progress are all there.",
              },
              {
                q: "What internet speed do I need?",
                a: "A stable connection of 5 Mbps or higher is recommended for smooth real-time racing. Lower speeds may result in lag during multiplayer races.",
              },
              {
                q: "How do I update the game?",
                a: "The game checks for updates automatically on launch. On mobile, updates are pushed through the App Store or Google Play.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="glass-card p-5 border-border/30 rounded-xl"
              >
                <h4 className="font-display text-sm font-bold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Download;
