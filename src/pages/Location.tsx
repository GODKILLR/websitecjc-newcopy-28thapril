import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Location = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Where We Are
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Our Location
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            CJC Race is operated by Celestial Star Technology — a company
            registered and headquartered in the UAE Free Zone, one of the
            world's leading jurisdictions for blockchain and digital asset
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Company Info */}
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold mb-6 text-primary">
              Company Details
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { label: "Legal Name", value: "Celestial Star Technology - FZCO" },
                { label: "Registration", value: "UAE Free Zone (FZCO)" },
                { label: "Headquarters", value: "Dubai, United Arab Emirates" },
                { label: "Established", value: "2023" },
                { label: "Business Type", value: "Blockchain Gaming & Digital Assets" },
                { label: "Contact", value: "support@cjcrace.io" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-border/20 pb-4 last:border-0 last:pb-0">
                  <span className="text-xs text-foreground/40 uppercase tracking-wider font-display">
                    {item.label}
                  </span>
                  <span className="text-foreground/80 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why UAE */}
          <div className="flex flex-col gap-4">
            <div className="glass-card p-6">
              <h3 className="font-display font-bold mb-2">Why Dubai?</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Dubai is home to one of the world's most progressive regulatory
                frameworks for blockchain and digital assets. Operating from the
                UAE Free Zone gives CJC Race full legal standing, financial
                transparency, and the ability to serve a global player base.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display font-bold mb-2">Regulated & Transparent</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Unlike anonymous projects, CJC Race is a registered legal entity.
                All payouts, token transactions and NFT trades are traceable
                on-chain and backed by a company with verifiable registration.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display font-bold mb-2">Remote Team, Global Reach</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Our core team is based across the UAE, Asia and Europe — giving
                us 24/7 coverage for our global player community.
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="glass-card p-8 text-center">
          <div className="w-full h-64 rounded-xl bg-card/40 flex items-center justify-center border border-border/20 mb-4">
            <div className="text-center">
              <p className="text-4xl mb-2">🇦🇪</p>
              <p className="font-display text-lg font-bold">Dubai, UAE</p>
              <p className="text-foreground/40 text-sm">Celestial Star Technology - FZCO</p>
            </div>
          </div>
          <a
            href="mailto:support@cjcrace.io"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-display text-xs tracking-widest px-8 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase"
          >
            Get in Touch
          </a>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Location;
