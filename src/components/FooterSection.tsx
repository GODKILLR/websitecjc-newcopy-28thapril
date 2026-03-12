import logo from "@/assets/cjc-logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={logo} alt="CJC Race" className="h-14 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate blockchain horse racing experience. Race, earn, and conquer.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Game</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.cjcrace.io/gameinfo" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Game Info</a>
              <a href="https://www.cjcrace.io/download" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Download</a>
              <a href="https://market.cjcrace.io" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Marketplace</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="https://docs.cjcrace.io/cjc-race-white-paper" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">WhitePaper</a>
              <a href="https://www.cjcrace.io/news" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">News & Updates</a>
              <a href="https://www.cjcrace.io/document/Beginners_Guide_EN" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Beginner's Guide</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.cjcrace.io/term/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Terms of Use</a>
              <a href="https://www.cjcrace.io/term/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            Copyright ©2025 Celestial Star Technology - FZCO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
