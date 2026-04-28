import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import logo from "@/assets/cjc-logo.webp";
import { Download, Check, X } from "lucide-react";

const colors = [
  { name: "Gold Primary", hex: "#C9A84C", textDark: false },
  { name: "Background Dark", hex: "#0A0A0E", textDark: false },
  { name: "Surface", hex: "#13131A", textDark: false },
  { name: "Foreground", hex: "#E8E4D9", textDark: true },
  { name: "Muted", hex: "#8B8570", textDark: true },
];

const dos = [
  "Use the official logo files provided on this page",
  "Maintain clear space around the logo",
  "Use the logo on dark backgrounds for best visibility",
  "Link back to cjcrace.io when using our brand",
];

const donts = [
  "Alter the logo colors, proportions, or orientation",
  "Place the logo on busy or low-contrast backgrounds",
  "Use the logo to imply endorsement without permission",
  "Recreate or approximate the logo using other fonts",
];

const BrandAssets = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Brand
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Brand Assets
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base">
            Official logos, colors, and usage guidelines for CJC Race. Please
            follow these guidelines when representing our brand in media,
            partnerships, or community content.
          </p>
        </div>

        {/* Logo Section */}
        <div className="mb-16">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Logo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dark bg preview */}
            <div className="glass-card p-8 flex flex-col items-center justify-center min-h-[200px]">
              <img
                src={logo}
                alt="CJC Race Logo"
                className="h-20 w-auto mb-4"
                loading="lazy"
                decoding="async"
              />
              <span className="text-foreground/40 text-xs">On dark background</span>
            </div>
            {/* Light bg preview */}
            <div className="rounded-xl border border-border/30 p-8 flex flex-col items-center justify-center min-h-[200px] bg-[#E8E4D9]">
              <img
                src={logo}
                alt="CJC Race Logo"
                className="h-20 w-auto mb-4"
                loading="lazy"
                decoding="async"
              />
              <span className="text-black/40 text-xs">On light background</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-foreground/50 text-sm mb-4">
              Logo files will be available for download soon. Contact us at{" "}
              <a href="mailto:press@cjcrace.io" className="text-primary hover:underline">
                press@cjcrace.io
              </a>{" "}
              for immediate access.
            </p>
          </div>
        </div>

        {/* Brand Colors */}
        <div className="mb-16">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="text-center">
                <div
                  className="w-full aspect-square rounded-xl border border-border/30 mb-3"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="text-foreground text-sm font-display font-bold">
                  {c.name}
                </p>
                <p className="text-foreground/50 text-xs font-mono">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-16">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Do */}
            <div className="glass-card p-6">
              <h3 className="font-display text-sm font-bold text-green-400 mb-4 flex items-center gap-2">
                <Check className="w-4 h-4" /> Do
              </h3>
              <ul className="space-y-3">
                {dos.map((d) => (
                  <li
                    key={d}
                    className="text-foreground/70 text-sm flex items-start gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-green-400/60 mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            {/* Don't */}
            <div className="glass-card p-6">
              <h3 className="font-display text-sm font-bold text-red-400 mb-4 flex items-center gap-2">
                <X className="w-4 h-4" /> Don't
              </h3>
              <ul className="space-y-3">
                {donts.map((d) => (
                  <li
                    key={d}
                    className="text-foreground/70 text-sm flex items-start gap-2"
                  >
                    <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-card p-8 text-center">
          <h3 className="font-display text-lg font-bold text-foreground mb-3">
            Need something specific?
          </h3>
          <p className="text-foreground/60 text-sm mb-4">
            For press kits, partnership materials, or custom brand assets, reach
            out to our team.
          </p>
          <a
            href="mailto:press@cjcrace.io"
            className="inline-block bg-primary hover:bg-primary/90 text-background font-display text-sm tracking-widest px-8 py-3 rounded-lg transition-colors uppercase"
          >
            Contact Press Team
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default BrandAssets;
