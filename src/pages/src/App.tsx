import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import FarmerDashboard from "./pages/FarmerDashboard";
import JamadarDashboard from "./pages/JamadarDashboard";
import ContractorDashboard from "./pages/ContractorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* سب سے پہلے کھلنے والا صفحہ */}
        <Route path="/" element={<LandingPage />} />
        
        {/* لاگ ان اور رجسٹریشن کا صفحہ */}
        <Route path="/auth" element={<AuthPage />} />
        
        {/* مخصوص ڈیش بورڈز */}
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/jamadar-dashboard" element={<JamadarDashboard />} />
        <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
        
        {/* ہیلپ اور دیگر صفحات */}
        <Route path="/help" element={<NoorHelp />} />
      </Routes>
    </Router>
  );
}

export default App;
