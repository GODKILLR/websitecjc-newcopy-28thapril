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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
