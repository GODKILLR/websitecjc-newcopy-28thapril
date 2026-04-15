import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the CJC Race platform, website, application, or any related services (collectively, the 'Platform'), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not access or use the Platform.",
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 18 years of age or the legal age of majority in your jurisdiction to use the Platform. By using CJC Race, you represent and warrant that you meet this requirement and that you are not prohibited by applicable laws from participating in blockchain-based gaming.",
  },
  {
    title: "3. Account Registration",
    content:
      "To access certain features of the Platform, you must create an account. You are responsible for maintaining the confidentiality of your account credentials, including your wallet private keys. CJC Race is not responsible for any loss arising from unauthorized access to your account.",
  },
  {
    title: "4. Gameplay Rules",
    content:
      "All races, league challenges, and mini-games are governed by the rules published on the Platform. CJC Race reserves the right to modify gameplay mechanics, race conditions, reward structures, and scoring systems at any time. Manipulation of gameplay through exploits, bots, or other unauthorized methods is strictly prohibited and may result in permanent account suspension.",
  },
  {
    title: "5. Digital Assets & NFTs",
    content:
      "Horses, items, and other in-game assets on CJC Race are represented as digital tokens on the blockchain. Ownership of these tokens is governed by the relevant smart contracts. CJC Race does not guarantee the market value of any digital asset. All purchases of digital assets are final and non-refundable unless otherwise stated.",
  },
  {
    title: "6. CJC Coins & Rewards",
    content:
      "CJC coins earned through gameplay, referrals, or other activities are utility tokens within the Platform. Reward distribution is subject to the rules and conditions published at the time of the relevant event. CJC Race reserves the right to modify reward amounts, distribution schedules, and eligibility criteria. Rewards are not guaranteed and may vary based on platform activity and participation levels.",
  },
  {
    title: "7. Fees & Transactions",
    content:
      "Blockchain transactions may incur network fees (gas fees) that are outside the control of CJC Race. You are solely responsible for any transaction fees associated with your use of the Platform. CJC Race may charge marketplace fees, which will be clearly disclosed before you confirm any transaction.",
  },
  {
    title: "8. Prohibited Conduct",
    content:
      "You agree not to: (a) use the Platform for any unlawful purpose; (b) attempt to exploit, hack, or reverse-engineer any part of the Platform or its smart contracts; (c) use automated scripts, bots, or third-party software to interact with the Platform; (d) engage in market manipulation, wash trading, or fraudulent activity; (e) impersonate another user or entity; (f) harass, abuse, or threaten other users.",
  },
  {
    title: "9. Intellectual Property",
    content:
      "All content, graphics, designs, logos, and software on the Platform are the property of Celestial Star Technology - FZCO or its licensors. You may not copy, reproduce, distribute, or create derivative works without prior written permission, except as expressly permitted under the Brand Assets guidelines.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, CJC Race and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform, including but not limited to loss of profits, data, digital assets, or goodwill. The Platform is provided on an 'as is' and 'as available' basis without warranties of any kind.",
  },
  {
    title: "11. Indemnification",
    content:
      "You agree to indemnify and hold harmless Celestial Star Technology - FZCO, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of the Platform or violation of these Terms.",
  },
  {
    title: "12. Modifications",
    content:
      "CJC Race reserves the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Platform. Your continued use of the Platform after any changes constitutes acceptance of the revised terms.",
  },
  {
    title: "13. Governing Law",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates, as applicable to the Emirate of Dubai. Any disputes shall be resolved through the courts of Dubai, UAE.",
  },
  {
    title: "14. Contact",
    content:
      "If you have questions about these Terms and Conditions, please contact us at support@cjcrace.io.",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Legal
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base">
            Last updated: April 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-foreground mb-3">
                {s.title}
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default TermsAndConditions;
