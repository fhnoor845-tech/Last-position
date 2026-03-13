import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { LogIn, UserPlus, Eye, MessageCircle } from "lucide-react";
import CascadingAddress from "@/components/CascadingAddress";

type UserType = "farmer" | "jamadar" | "contractor";

const roles = [
  { type: "farmer", label: "میں کسان ہوں", emoji: "🌾" },
  { type: "jamadar", label: "میں جمعدار ہوں", emoji: "👷" },
  { type: "contractor", label: "میں ٹھیکیدار ہوں", emoji: "📋" },
];

const ADMIN_WHATSAPP = "923329704095";

const formatPhone = (val: string) => val.replace(/\D/g, "").slice(0, 11);
const formatCnic = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 13);
  if (digits.length <= 5) return digits;
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
};

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "signup" | "demo">("login");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [area, setArea] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserType>("farmer");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const getAuthEmail = (ph: string) => `${ph.replace(/\D/g, "")}@kamad.pk`;
  const getCleanPhone = (ph: string) => ph.replace(/\D/g, "");
  const getCleanCnic = (cn: string) => cn.replace(/\D/g, "");

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ 
      email: getAuthEmail(phone), 
      password 
    });
    setLoading(false);
    if (error) {
      toast({ title: "لاگ ان ناکام", description: error.message, variant: "destructive" });
    } else {
      navigate("/");
    }
  };

  const handleSignup = async () => {
    const cleanPhone = getCleanPhone(phone);
    const cleanCnic = getCleanCnic(cnic);
    if (cleanPhone.length !== 11) { toast({ title: "موبائل نمبر غلط ہے", variant: "destructive" }); return; }
    if (cleanCnic.length !== 13) { toast({ title: "CNIC غلط ہے", variant: "destructive" }); return; }
    if (!acceptedTerms) { toast({ title: "شرائط قبول کریں", variant: "destructive" }); return; }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: getAuthEmail(phone),
      password,
      options: { data: { name, phone: cleanPhone, user_type: selectedRole, cnic: cleanCnic } },
    });

    if (error) {
      toast({ title: "رجسٹریشن ناکام", description: error.message, variant: "destructive" });
    } else if (data.user) {
      await supabase.from("profiles").update({ name, phone: cleanPhone, user_type: selectedRole, area }).eq("id", data.user.id);
      navigate("/profile");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-green-50 to-blue-50">
      <Card className="w-full max-w-md shadow-xl border-t-4 border-primary">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-urdu">
            {mode === "login" ? "🔑 لاگ ان" : mode === "signup" ? "📝 نیا اکاؤنٹ" : "👁️ ڈیمو"}
          </CardTitle>
          <p className="text-sm text-muted-foreground font-urdu">Noor Project — کماد آن لائن</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {mode === "signup" && (
            <>
              <div className="grid grid-cols-3 gap-2">
                {roles.map((r) => (
                  <button key={r.type} onClick={() => setSelectedRole(r.type as UserType)}
                    className={`p-2 rounded-lg border-2 flex flex-col items-center ${selectedRole === r.type ? "border-primary bg-primary/10" : "border-border"}`}>
                    <span className="text-xl">{r.emoji}</span>
                    <span className="text-[10px] font-urdu">{r.label}</span>
                  </button>
                ))}
              </div>
              <Input placeholder="نام" value={name} onChange={(e) => setName(e.target.value)} className="font-urdu" />
              <Input placeholder="CNIC نمبر" value={cnic} onChange={(e) => setCnic(formatCnic(e.target.value))} dir="ltr" />
              <CascadingAddress area={area} setArea={setArea} />
            </>
          )}
          <Input placeholder="موبائل نمبر" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} dir="ltr" />
          <Input type="password" placeholder="پاسورڈ" value={password} onChange={(e) => setPassword(e.target.value)} dir="ltr" />
          
          <Button onClick={mode === "login" ? handleLogin : handleSignup} className="w-full font-urdu" disabled={loading}>
            {mode === "login" ? "لاگ ان" : "رجسٹر کریں"}
          </Button>

          <div className="flex justify-between text-xs font-urdu text-primary">
            <button onClick={() => setMode(mode === "login" ? "signup" : "login")}>
              {mode === "login" ? "نیا اکاؤنٹ بنائیں" : "لاگ ان کریں"}
            </button>
            <button onClick={() => window.open(`https://wa.me/${ADMIN_WHATSAPP}`)}>پاسورڈ بھول گئے؟</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
