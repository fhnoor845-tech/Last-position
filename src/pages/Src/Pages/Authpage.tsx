import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Factory, User, Users, Briefcase, Lock } from "lucide-react";
import HeaderBranding from "@/components/HeaderBranding";

const AuthPage = () => {
  const [role, setRole] = useState("farmer");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // جانی، یہاں ہم رول کے حساب سے ڈیش بورڈ پر بھیجیں گے
    if (role === "mill") navigate("/mill-admin");
    else if (role === "farmer") navigate("/farmer");
    else if (role === "jamadar") navigate("/jamadar");
    else navigate("/contractor");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <HeaderBranding />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-t-4 border-t-blue-700">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold font-urdu text-blue-900">خوش آمدید!</CardTitle>
            <p className="text-sm text-slate-500 font-urdu">نور پراجیکٹ (کماد آن لائن) میں داخل ہوں</p>
          </CardHeader>
          
          <CardContent>
            <div className="mb-6">
              <label className="block text-center mb-3 font-urdu text-slate-700">آپ کون ہیں؟ منتخب کریں</label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: "farmer", label: "کسان", icon: User },
                  { id: "jamadar", label: "جمعدار", icon: Users },
                  { id: "contractor", label: "ٹھیکیدار", icon: Briefcase },
                  { id: "mill", label: "شوگر مل", icon: Factory },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRole(item.id)}
                    className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all ${
                      role === item.id 
                      ? "border-blue-700 bg-blue-50 text-blue-700 shadow-md" 
                      : "border-slate-100 bg-white text-slate-400 hover:border-blue-200"
                    }`}
                  >
                    <item.icon className="h-6 w-6 mb-1" />
                    <span className="text-[10px] font-urdu font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-urdu text-slate-600">
                  {role === "mill" ? "شوگر مل کوڈ / نام" : "موبائل نمبر (11 ہندسے)"}
                </label>
                <div className="relative">
                  <Input 
                    required 
                    className="pl-10 text-right font-urdu" 
                    placeholder={role === "mill" ? "مل کا نام لکھیں" : "03xxxxxxxxx"}
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-urdu text-slate-600">پاسورڈ</label>
                <div className="relative">
                  <Input 
                    type="password" 
                    required 
                    className="pl-10 text-right font-urdu" 
                    placeholder="••••••"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-12 text-lg font-urdu">
                لاگ ان کریں
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500 font-urdu">
                پاسورڈ بھول گئے؟ یا نیا اکاؤنٹ بنانا ہے؟ <br/>
                <a href="https://wa.me/923329704095" className="text-blue-700 font-bold underline">ایڈمن سے رابطہ کریں</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
