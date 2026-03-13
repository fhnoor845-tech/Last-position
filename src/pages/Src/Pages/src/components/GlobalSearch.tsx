import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Factory, User, Users, HardHat, History, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // یہ ڈیٹا بیس سے لنک ہوگا، ابھی ڈیمو ریکارڈز ہیں
  const allRecords = [
    { id: "w101", name: "علی خان", type: "worker", sub: "بابر جمعدار", advance: "8,500", prevYearDays: "145", status: "working" },
    { id: "k202", name: "چوہدری اکرم", type: "farmer", sub: "سرگودھا", acres: "50", mills: "JDW, RYK" },
    { id: "j303", name: "بابر جمعدار", type: "jamadar", sub: "خان ٹھیکیدار", team: "20 افراد", location: "چک 21" },
    { id: "m404", name: "اتحاد شوگر مل", type: "mill", rate: "485", gate: "open" },
  ];

  const results = query 
    ? allRecords.filter(r => r.name.toLowerCase().includes(query.toLowerCase()) || r.id.includes(query)) 
    : [];

  return (
    <div className="relative w-full max-w-lg mx-auto px-4 mt-2">
      <div className="relative group">
        <Input
          className="pl-12 h-14 font-urdu text-right text-lg shadow-lg border-2 border-green-200 focus:border-green-600 rounded-2xl transition-all"
          placeholder="نام، موبائل یا شناختی کارڈ سے سرچ کریں..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-4 h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
      </div>

      {results.length > 0 && (
        <Card className="absolute z-[100] w-[calc(100%-2rem)] mt-2 shadow-2xl border-green-100 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
          <CardContent className="p-0 max-h-[450px] overflow-y-auto">
            {results.map((r) => (
              <div 
                key={r.id} 
                onClick={() => navigate(`/${r.type}-record/${r.id}`)}
                className="p-4 border-b hover:bg-green-50 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${
                    r.type === 'worker' ? 'bg-orange-100 text-orange-600' : 
                    r.type === 'farmer' ? 'bg-green-100 text-green-600' : 
                    r.type === 'mill' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {r.type === 'worker' && <HardHat className="h-5 w-5" />}
                    {r.type === 'farmer' && <User className="h-5 w-5" />}
                    {r.type === 'mill' && <Factory className="h-5 w-5" />}
                    {r.type === 'jamadar' && <Users className="h-5 w-5" />}
                  </div>
                  
                  <div>
                    <p className="font-bold font-urdu text-slate-900 text-lg">{r.name}</p>
                    <div className="flex items-center gap-2 text-[11px] font-urdu text-slate-500">
                      <span>{r.sub}</span>
                      {r.prevYearDays && (
                        <span className="flex items-center gap-1 text-blue-600 font-bold">
                          <History className="h-3 w-3" /> {r.prevYearDays} دن (2025)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  {r.type === 'worker' && (
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-red-600 font-urdu">ایڈوانس: {r.advance}</p>
                      <p className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full inline-block">حاضر ہے</p>
                    </div>
                  )}
                  {r.type === 'mill' && (
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-blue-700">{r.rate} روپے</p>
                      <p className="text-[10px] text-green-600 font-bold">گیٹ کھلا ہے</p>
                    </div>
                  )}
                  <p className="text-[10px] text-blue-500 underline mt-1 font-urdu">مکمل کھاتہ دیکھیں</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GlobalSearch;
