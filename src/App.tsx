import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Team from "./pages/Team.tsx";
import Careers from "./pages/Careers.tsx";
import Location from "./pages/Location.tsx";
import Audit from "./pages/Audit.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import RiskDisclaimer from "./pages/RiskDisclaimer.tsx";
import BrandAssets from "./pages/BrandAssets.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import GameModes from "./pages/GameModes.tsx";
import Ambassador from "./pages/Ambassador.tsx";
import DownloadPage from "./pages/Download.tsx";
import News from "./pages/News.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import MarketplaceHub from "./pages/MarketplaceHub.tsx";
import NFTGuide from "./pages/NFTGuide.tsx";
import AppLogin from "./pages/app/AppLogin.tsx";
import AppHome from "./pages/app/AppHome.tsx";
import AppMarket from "./pages/app/AppMarket.tsx";
import AppDashboard from "./pages/app/AppDashboard.tsx";
import AppWallet from "./pages/app/AppWallet.tsx";
import AppTycoon from "./pages/app/AppTycoon.tsx";
import AppRecords from "./pages/app/AppRecords.tsx";
import AppSettings from "./pages/app/AppSettings.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/location" element={<Location />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
          <Route path="/brand-assets" element={<BrandAssets />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/game-modes" element={<GameModes />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/marketplace" element={<MarketplaceHub />} />
          <Route path="/shop" element={<Marketplace />} />
          <Route path="/nfts" element={<NFTGuide />} />
          <Route path="/app/login" element={<AppLogin />} />
          <Route path="/app/home" element={<AppHome />} />
          <Route path="/app/market" element={<AppMarket />} />
          <Route path="/app/dashboard" element={<AppDashboard />} />
          <Route path="/app/wallet" element={<AppWallet />} />
          <Route path="/app/tycoon" element={<AppTycoon />} />
          <Route path="/app/records" element={<AppRecords />} />
          <Route path="/app/settings" element={<AppSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
