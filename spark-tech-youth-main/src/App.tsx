import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <title>CodeFlux | AI for Professionals & Startups in Nagpur</title>
        <meta name="description" content="CodeFlux is India's best AI startup for non-tech professionals. We provide physical, on-ground AI training for Doctors, Lawyers, and Teachers. Learn smart AI use in Nagpur." />
        <meta property="og:title" content="CodeFlux | AI for Professionals & Startups in Nagpur" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
