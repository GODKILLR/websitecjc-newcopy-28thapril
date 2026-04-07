import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BookOpen, ChevronRight, Calculator, ChevronLeft, Sparkles, Target, Wind, Sun, Cloud, Umbrella } from "lucide-react";

const steps = [
  {
    title: "Get Your NFTs",
    icon: "🐎",
    content: "Start your racing journey by acquiring Racehorse and Jockey NFTs. Purchase Welcome Packs or browse the Marketplace for rare finds.",
    details: [
      { label: "Racehorse NFT", value: "Required for racing", icon: "🐎" },
      { label: "Jockey NFT", value: "Required for racing", icon: "🏇" },
      { label: "Item NFTs", value: "Up to 4 per race set", icon: "🎋" },
    ],
  },
  {
    title: "Set Up Your Team",
    icon: "⚙️",
    content: "Configure your racing set by matching horse attributes to race conditions. Consider distance, direction, weather, and track type.",
    details: [
      { label: "Speed", value: "Determines min/max speeds", icon: "🚀" },
      { label: "Burst", value: "Acceleration when whipped", icon: "⚡" },
      { label: "Stamina", value: "Depletes during race", icon: "🔋" },
    ],
  },
  {
    title: "Master the Race",
    icon: "🏆",
    content: "Perfect your exit timing, manage stamina strategically, and use items wisely. Control your jockey in real-time for victory!",
    details: [
      { label: "Exit Timing", value: "Tap when pointers overlap", icon: "🎯" },
      { label: "Stamina", value: "Higher speed = faster drain", icon: "🔋" },
      { label: "Balance", value: "Avoid collisions", icon: "⚖️" },
    ],
  },
];

const attributeCalculator = {
  distances: ["Short (800-1200m)", "Medium (1400-1800m)", "Long (2000-3200m)"],
  directions: ["Left", "Right", "Straight"],
  weathers: ["Sunny", "Cloudy", "Rainy"],
  tracks: ["Turf", "Dirt", "Synthetic"],
};

const HowToPlay = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("guide");
  const [selectedAttrs, setSelectedAttrs] = useState({
    distance: 0,
    direction: 0,
    weather: 0,
    track: 0,
  });

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="py-24 relative overflow-hidden" id="how-to-play">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Beginner's Guide
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            How to Play
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Master the art of blockchain horse racing with our step-by-step guide. From acquiring NFTs to winning races.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: "guide", label: "Step-by-Step Guide", icon: BookOpen },
            { id: "calculator", label: "Attribute Calculator", icon: Calculator },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider transition-all ${
                activeTab === tab.id
                  ? "gradient-gold text-primary-foreground"
                  : "glass-card text-foreground/70 hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "guide" && (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card overflow-hidden">
                {/* Progress */}
                <div className="flex items-center gap-2 p-6 border-b border-border/30">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStep(i)}
                      className={`flex-1 h-2 rounded-full transition-all ${
                        i <= currentStep ? "bg-primary" : "bg-card/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-6xl mb-4"
                        >
                          {steps[currentStep].icon}
                        </motion.div>
                        <span className="text-xs text-foreground/50 mb-2 block">
                          Step {currentStep + 1} of {steps.length}
                        </span>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                          {steps[currentStep].title}
                        </h3>
                        <p className="text-foreground/70 max-w-lg mx-auto">
                          {steps[currentStep].content}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {steps[currentStep].details.map((detail, i) => (
                          <motion.div
                            key={detail.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
                          >
                            <div className="text-3xl mb-2">{detail.icon}</div>
                            <p className="font-display text-sm mb-1">{detail.label}</p>
                            <p className="text-xs text-foreground/50">{detail.value}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/30">
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>
                    <div className="flex gap-2">
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentStep(i)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            i === currentStep ? "bg-primary scale-125" : "bg-foreground/20"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-2 px-4 py-2 gradient-gold text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                    >
                      {currentStep === steps.length - 1 ? "Finish" : "Next"}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "calculator" && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card p-8">
                <div className="text-center mb-8">
                  <Calculator className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">Attribute Matcher</h3>
                  <p className="text-sm text-foreground/60 mb-3">Different races reward different horse builds. Use this tool to find which attributes matter most for your next race conditions.</p>
                  <p className="text-sm text-foreground/50"><span className="text-primary font-semibold">How it works:</span> Select your race distance, direction, weather and track type, the tool tells you which horse attributes (Speed, Burst, Stamina) to prioritise when picking or upgrading your horse.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs text-foreground/50 uppercase tracking-wider">Distance</label>
                    <select
                      value={selectedAttrs.distance}
                      onChange={(e) => setSelectedAttrs({ ...selectedAttrs, distance: Number(e.target.value) })}
                      className="w-full bg-card/40 border border-border/50 rounded-lg px-4 py-3 text-sm"
                    >
                      {attributeCalculator.distances.map((d, i) => (
                        <option key={i} value={i}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-foreground/50 uppercase tracking-wider">Direction</label>
                    <select
                      value={selectedAttrs.direction}
                      onChange={(e) => setSelectedAttrs({ ...selectedAttrs, direction: Number(e.target.value) })}
                      className="w-full bg-card/40 border border-border/50 rounded-lg px-4 py-3 text-sm"
                    >
                      {attributeCalculator.directions.map((d, i) => (
                        <option key={i} value={i}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-foreground/50 uppercase tracking-wider">Weather</label>
                    <select
                      value={selectedAttrs.weather}
                      onChange={(e) => setSelectedAttrs({ ...selectedAttrs, weather: Number(e.target.value) })}
                      className="w-full bg-card/40 border border-border/50 rounded-lg px-4 py-3 text-sm"
                    >
                      {attributeCalculator.weathers.map((w, i) => (
                        <option key={i} value={i}>{w}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-foreground/50 uppercase tracking-wider">Track Type</label>
                    <select
                      value={selectedAttrs.track}
                      onChange={(e) => setSelectedAttrs({ ...selectedAttrs, track: Number(e.target.value) })}
                      className="w-full bg-card/40 border border-border/50 rounded-lg px-4 py-3 text-sm"
                    >
                      {attributeCalculator.tracks.map((t, i) => (
                        <option key={i} value={i}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Results */}
                <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-display text-sm">Recommended Horse Attributes</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 glass-card">
                      <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-foreground/50 mb-1">Speed Priority</p>
                      <p className="font-display font-bold">High</p>
                    </div>
                    <div className="text-center p-4 glass-card">
                      <Wind className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-foreground/50 mb-1">Burst Needed</p>
                      <p className="font-display font-bold">{selectedAttrs.distance === 0 ? "Very High" : "Medium"}</p>
                    </div>
                    <div className="text-center p-4 glass-card">
                      <Sun className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-foreground/50 mb-1">Stamina Req.</p>
                      <p className="font-display font-bold">{selectedAttrs.distance === 2 ? "Very High" : selectedAttrs.distance === 1 ? "High" : "Medium"}</p>
                    </div>
                    <div className="text-center p-4 glass-card">
                      <Umbrella className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-foreground/50 mb-1">Weather Match</p>
                      <p className="font-display font-bold">{selectedAttrs.weather === 2 ? "-200 Stamina" : "Perfect"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowToPlay;
