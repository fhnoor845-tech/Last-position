import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// تمام صفحات یہاں امپورٹ ہو رہے ہیں
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import FarmerDashboard from "./pages/FarmerDashboard";
import JamadarDashboard from "./pages/JamadarDashboard";
import ContractorDashboard from "./pages/ContractorDashboard";
import LaborMarket from "./pages/LaborMarket";
import LaborLedger from "./pages/LaborLedger";
import MillsPage from "./pages/MillsPage";
import AdminDashboard from "./pages/AdminDashboard";
import HiringPage from "./pages/HiringPage"; // آپ کا نیا پیج یہاں امپورٹ ہوا
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/farmer" element={<FarmerDashboard />} />
            <Route path="/jamadar" element={<JamadarDashboard />} />
            <Route path="/contractor" element={<ContractorDashboard />} />
            <Route path="/labor-market" element={<LaborMarket />} />
            <Route path="/ledger" element={<LaborLedger />} />
            <Route path="/mills" element={<MillsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* یہ وہ لائن ہے جو Hiring والے پیج کو چلائے گی */}
            <Route path="/hiring" element={<HiringPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
