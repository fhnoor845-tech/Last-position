import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck, Users, Search, CheckCircle, XCircle, Factory,
  Ban, User, MapPin
} from "lucide-react";
import HeaderBranding from "@/components/HeaderBranding";

interface UserProfile {
  id: string;
  name: string;
  phone: string | null;
  user_type: string;
  area: string | null;
  is_verified: boolean;
  is_blacklisted: boolean;
  cnic_front_url: string | null;
  selfie_url: string | null;
  created_at: string;
}

const userTypeLabels: Record<string, string> = {
  farmer: "🌾 کسان", jamadar: "👷 جمعدار", contractor: "📋 ٹھیکیدار", admin: "⚙️ ایڈمن",
};

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"users" | "mills" | "search">("users");
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [mills, setMills] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);

  useEffect(() => {
    loadUsers();
    loadMills();
  }, []);

  const loadUsers = async () => {
    const { data } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
    if (data) setUsers(data as UserProfile[]);
  };

  const loadMills = async () => {
    const { data } = await supabase.from("sugar_mill_rates").select("*").order("rate", { ascending: false });
    if (data) setMills(data);
  };

  const toggleVerify = async (userId: string, current: boolean) => {
    await supabase.from("profiles").update({ is_verified: !current }).eq("id", userId);
    toast({ title: !current ? "✅ تصدیق ہو گئی" : "تصدیق ہٹا دی گئی" });
    loadUsers();
  };

  const toggleBlacklist = async (userId: string, current: boolean) => {
    await supabase.from("profiles").update({ is_blacklisted: !current }).eq("id", userId);
    toast({ title: !current ? "🚫 بلیک لسٹ کر دیا" : "بلیک لسٹ سے ہٹایا" });
    loadUsers();
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    const cleanSearch = searchQuery.trim();
    const { data } = await supabase.from("profiles")
      .select("*")
      .or(`name.ilike.%${cleanSearch}%,phone.ilike.%${cleanSearch}%`)
      .limit(10);
    if (data) setSearchResults(data as UserProfile[]);
  };

  const pendingVerification = users.filter((u) => !u.is_verified && u.cnic_front_url);

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      <HeaderBranding />
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold font-urdu text-green-900 mb-6 flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" /> ایڈمن پینل (نور پروجیکٹ)
        </h1>

        <div className="flex gap-2 mb-6">
          <Button onClick={() => setActiveTab("users")} variant={activeTab === "users" ? "default" : "outline"} className="flex-1 font-urdu">
            صارفین {pendingVerification.length > 0 && <Badge className="ml-1 bg-
