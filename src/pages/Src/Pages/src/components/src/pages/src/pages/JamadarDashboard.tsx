import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, Calculator, Truck, Receipt, Plus, Trash2 } from "lucide-react";
import HeaderBranding from "@/components/HeaderBranding";

const JamadarDashboard = () => {
  // مزدوروں کی لسٹ (نام، شناختی کارڈ، عمر، فون)
  const [members, setMembers] = useState([
    { id: 1, name: "گل خان", cnic: "35202-xxxxxxx-1", age: "28", phone: "0300-1112223", advance: 5000 },
    { id: 2, name: "احمد علی", cnic: "35202-xxxxxxx-2", age: "32", phone: "0300-4445556", advance: 2000 },
  ]);

  // فی گاڑی (Gaddi) کے حساب کتاب کی سٹیٹ
  const [weightKg, setWeightKg] = useState(""); // کل وزن کلو میں
  const [ratePerMund, setRatePerMund] = useState("450"); // ریٹ فی من
  const [foodExpense, setFoodExpense] = useState(""); // اس گاڑی پر کھانے کا خرچہ
  const [presentWorkers, setPresentWorkers] = useState(7); // اس گاڑی پر حاضر مزدور

  // حساب کتاب کی منطق (Calculation Logic)
  const totalMunds = Number(weightKg) / 40; // کلو سے من
  const totalIncome = totalMunds * Number(ratePerMund); // کل آمدنی
  const perHeadBeforeDeduction = totalIncome / presentWorkers; // فی مزدور حصہ
  const foodPerHead = Number(foodExpense) / presentWorkers; // فی مزدور کھانے کا خرچہ
  const finalPerHead = perHeadBeforeDeduction - foodPerHead; // صافی بچت فی مزدور

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <HeaderBranding />
      
      <div className="container pt-4 max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold font-urdu text-blue-900 mb-6">جمعدار کنٹرول پینل</h1>

        {/* سیکشن 1: نئی گاڑی کا حساب (Gaddi Ledger) */}
        <Card className="mb-6 border-t-4 border-t-green-600 shadow-lg">
          <CardHeader className="bg-green-50 py-3">
            <CardTitle className="font-urdu text-green-800 flex items-center gap-2">
              <Truck className="h-5 w-5" /> فی گاڑی (گڈی) کا حساب
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4 text-right" dir="rtl">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-urdu">کل وزن (KG)</label>
                <Input type="number" placeholder="14300" value={weightKg} onChange={(e)=>setWeightKg(e.target.value)} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-urdu">ریٹ (فی من)</label>
                <Input type="number" value={ratePerMund} onChange={(e)=>setRatePerMund(e.target.value)} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-urdu">حاضر مزدور</label>
                <Input type="number" value={presentWorkers} onChange={(e)=>setPresentWorkers(Number(e.target.value))} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-urdu">کھانے کا خرچہ</label>
                <Input type="number" placeholder="1500" value={foodExpense} onChange={(e)=>setFoodExpense(e.target.value)} />
              </div>
            </div>

            {/* آٹومیٹک رزلٹ ڈسپلے */}
            <div className="bg-blue-900 text-white p-4 rounded-xl space-y-2 mt-4">
              <div className="flex justify-between border-b border-blue-700 pb-1">
                <span className="font-bold">{totalMunds.toFixed(2)}</span>
                <span className="font-urdu text-sm">کل من:</span>
              </div>
              <div className="flex justify-between border-b border-blue-700 pb-1">
                <span className="font-bold text-yellow-400">{Math.round(totalIncome)}</span>
                <span className="font-urdu text-sm">کل رقم (روپے):</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-green-300">{Math.round(finalPerHead)}</span>
                <span className="font-urdu text-sm">فی مزدور صافی حصہ:</span>
              </div>
              <p className="text-[10px] text-blue-200 text-center font-urdu">
                (کھانا فی بندہ {Math.round(foodPerHead)} روپے کٹ چکا ہے)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* سیکشن 2: مزدوروں کی لسٹ */}
        <div className="flex justify-between items-center mb-4">
          <Button size="sm" className="bg-blue-700 font-urdu"><Plus className="ml-1 h-4 w-4" /> نیا مزدور</Button>
          <h3 className="text-lg font-bold font-urdu flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-700" /> مزدوروں کی لسٹ
          </h3>
        </div>

        <div className="space-y-3">
          {members.map((m) => (
            <Card key={m.id} className="border-r-4 border-r-blue-500">
              <CardContent className="p-3 flex justify-between items-center">
                <div className="text-right">
                  <p className="font-bold font-urdu">{m.name}</p>
                  <p className="text-[10px] text-slate-500">عمر: {m.age} سال | {m.phone}</p>
                  <p className="text-xs font-bold text-red-600 font-urdu mt-1">باقی ایڈوانس: {m.advance} روپے</p>
                </div>
                <div className="bg-slate-100 p-2 rounded-lg">
                  <Calculator className="h-5 w-5 text-slate-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JamadarDashboard;
