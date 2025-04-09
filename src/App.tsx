
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupSignup from "./pages/StartupSignup";
import InvestorSignup from "./pages/InvestorSignup";
import StartupDashboard from "./pages/StartupDashboard";
import InvestorSwipe from "./pages/InvestorSwipe";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/startup-signup" element={<StartupSignup />} />
              <Route path="/investor-signup" element={<InvestorSignup />} />
              <Route path="/startup-dashboard" element={<StartupDashboard />} />
              <Route path="/investor-swipe" element={<InvestorSwipe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
