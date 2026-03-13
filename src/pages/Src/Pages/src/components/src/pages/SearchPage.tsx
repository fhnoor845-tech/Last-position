import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, User, Users, Factory, Briefcase, History, CreditCard, ArrowRight } from "lucide-react";
import HeaderBranding from "@/components/HeaderBranding";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // جانی، یہ وہ ڈیٹا ہے جس میں پچھلے سال (2025) کا ریکارڈ بھی شامل ہے
  const masterData = [
    { 
      id: "w1", name: "گل خان", type: "worker", 
      currentBoss: "بابر جمعدار", prevYearDays: "135", 
      prevBoss: "خان ٹھیکیدار", advance: "12,000", status: "active" 
    },
    { 
      id: "k1", name: "چوہدری اسلم", type: "farmer", 
      area: "سرگودھا", acres: "40", mills: ["JDW", "Etihad"] 
    },
    { 
      id: "j1", name: "بابر جمعدار", type: "jamadar", 
      teamSize: "22", currentClient: "چوہدری اسلم", location: "چک 15" 
    },
    { 
      id: "m1", name: "JDW Sugar Mill", type: "mill", 
      rate: "480", status: "open", lastUpdate: "10 mins ago" 
    }
  ];

  const filtered = masterData.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <HeaderBranding />
      
      <div className="container pt-4 max-w-lg mx-auto px-4">
        <div className="relative mb-6">
          <Input 
            className="pl-12 h-14 font-urdu text-right text-lg border-2 border-blue-200 focus:border-blue-600 rounded-xl shadow-lg"
            placeholder="نام یا موبائل نمبر سے تلاش کریں..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 h-6 w-6 text-blue-600" />
        </div>

        <Tabs defaultValue="all" className="w-full" dir="rtl">
          <TabsList className="grid grid-cols-4 mb-4 bg-blue-100 p-1">
            <TabsTrigger value="all" className="font-urdu text-xs">سب</TabsTrigger>
            <TabsTrigger value="worker" className="font-urdu text-xs">مزدور</TabsTrigger>
            <TabsTrigger value="farmer" className="font-urdu text-xs">کسان</TabsTrigger>
            <TabsTrigger value="mill" className="font-urdu text-xs">ملز</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filtered.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden border-r-4 border-r-blue-600 hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate(`/${item.type}-record/${item.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {item.type === 'worker' && <Briefcase className="h-5 w-5 text-blue-600" />}
                        {item.type === 'farmer' && <User className="h-5 w-5 text-green-600" />}
                        {item.type === 'mill' && <Factory className="h-5 w-5 text-red-600" />}
                        {item.type === 'jamadar' && <Users className="h-5 w-5 text-orange-600" />}
                      </div>
                      <div>
                        <h3 className="font-bold font-urdu text-lg">{item.name}</h3>
                        <p className="text-xs text-slate-500 font-urdu">
                          {item.type === 'worker' ? `جمعدار: ${item.currentBoss}` : item.area || 'شوگر مل'}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300" />
                  </div>

                  {/* پچھلے سال کا ریکارڈ اور ایڈوانس (صرف مزدور کے لیے) */}
                  {item.type === 'worker' && (
                    <div className="mt-3 flex gap-2 border-t pt-3">
                      <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                        <p className="text-[10px] font-urdu text-slate-500">پچھلا سیزن (2025)</p>
                        <p className="text-xs font-bold text-blue-700 flex items-center justify-center gap-1">
                          <History className="h-3 w-3" /> {item.prevYearDays} دن
                        </p>
                      </div>
                      <div className="flex-1 bg-red-50 p-2 rounded text-center">
                        <p className="text-[10px] font-urdu text-slate-500">موجودہ ایڈوانس</p>
                        <p className="text-xs font-bold text-red-700 flex items-center justify-center gap-1">
                          <CreditCard className="h-3 w-3" /> {item.advance}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* مل ریٹ سٹیٹس */}
                  {item.type === 'mill' && (
                    <div className="mt-3 flex justify-between items-center border-t pt-3">
                      <span className="text-sm font-bold text-blue-700 font-urdu">ریٹ: {item.rate}</span>
                      <span className={`text-[10px] font-urdu px-2 py-0.5 rounded-full ${item.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {item.status === 'open' ? 'گیٹ کھلا ہے' : 'گیٹ بند ہے'}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchPage;
