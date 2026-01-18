import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Competitions from "./pages/Competitions";
import Live from "./pages/Live";
import Highlights from "./pages/Highlights";
import News from "./pages/News";
import Tickets from "./pages/Tickets";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/live" element={<Live />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/news" element={<News />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
