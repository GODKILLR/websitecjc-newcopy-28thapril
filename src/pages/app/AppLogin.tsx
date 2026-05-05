import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Wallet, ChevronRight } from "lucide-react";
import logo from "@/assets/cjc-logo.webp";
import heroBg from "@/assets/gameplay-bg.webp";

const AppLogin = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/70" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center mb-10">
            <img src={logo} alt="CJC Race" className="h-16 w-auto" />
          </Link>

          {/* Card */}
          <div className="rounded-2xl border border-border/30 bg-card/60 backdrop-blur-md p-8 md:p-10">
            {/* Demo banner */}
            <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 mb-6 text-center">
              <p className="text-primary font-display text-[10px] tracking-[0.2em] uppercase mb-1">
                Demo Mode
              </p>
              <p className="text-foreground/70 text-xs">
                Credentials pre-filled. Just click <span className="text-primary font-bold">Sign In</span> to enter the app.
              </p>
            </div>

            <div className="text-center mb-8">
              <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-2 block">
                Welcome Back
              </span>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Sign in to CJC Race
              </h1>
              <p className="text-foreground/50 text-sm mt-2">
                Race, earn, and manage your stable.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/app/home";
              }}
              className="space-y-4"
            >
              {/* Email */}
              <div>
                <label className="block text-foreground/60 text-xs font-display tracking-wider uppercase mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <input
                    type="email"
                    required
                    defaultValue="demo@cjcrace.io"
                    placeholder="you@cjcrace.io"
                    className="w-full bg-background/50 border border-border/40 rounded-lg pl-10 pr-4 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-foreground/60 text-xs font-display tracking-wider uppercase">
                    Password
                  </label>
                  <a href="#" className="text-primary text-xs hover:underline">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <input
                    type="password"
                    required
                    defaultValue="demopassword"
                    placeholder="Your password"
                    className="w-full bg-background/50 border border-border/40 rounded-lg pl-10 pr-4 py-3 text-foreground text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-foreground/30"
                  />
                </div>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 gradient-gold text-primary-foreground font-display text-sm tracking-widest py-3.5 rounded-lg hover:opacity-90 transition-opacity uppercase mt-6"
              >
                Sign In <ChevronRight className="w-4 h-4" />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border/30" />
              <span className="text-foreground/40 text-xs font-display tracking-widest uppercase">Or</span>
              <div className="flex-1 h-px bg-border/30" />
            </div>

            {/* Wallet connect */}
            <button className="w-full flex items-center justify-center gap-2 border border-primary/40 text-primary font-display text-sm tracking-wider py-3 rounded-lg hover:bg-primary/10 transition-colors uppercase">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>

            {/* Sign up */}
            <p className="text-center text-foreground/50 text-sm mt-6">
              New to CJC Race?{" "}
              <a href="#" className="text-primary hover:underline font-display tracking-wider uppercase text-xs">
                Create Account
              </a>
            </p>
          </div>

          {/* Footer link */}
          <p className="text-center mt-6 text-foreground/40 text-xs">
            <Link to="/" className="hover:text-primary transition-colors">← Back to website</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AppLogin;
