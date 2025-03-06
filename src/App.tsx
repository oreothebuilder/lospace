
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Waitlist from "./pages/Waitlist";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for the window load event to know when everything is loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // If document is already loaded, set loading to false after a delay
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    } else {
      window.addEventListener('load', handleLoad);
      
      // Fallback: if it takes too long, hide the loader after 5 seconds
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/waitlist" element={<Waitlist />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
