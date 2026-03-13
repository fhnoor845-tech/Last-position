import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Factory, Power, BellRing } from "lucide-react";
import HeaderBranding from "@/components/HeaderBranding";

const MillDashboard = () => {
  const [rate, setRate] = useState("450");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <HeaderBranding />
      <div className="container pt-4 max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold font-urdu text-blue-900 mb-6 flex items-center gap-2">
          <Factory className="h-7 w-7 text-blue-700" /> شوگر مل کنٹرول پینل
        </h1>

        <Card className="mb-6 border-2 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="font-urdu text-blue-800">آج کا ریٹ اور سٹیٹس</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-center justify-between">
              <label className="font-urdu text-lg">مل کا سٹیٹس:</label>
              <Button 
                variant={isOpen ? "default" : "destructive"}
                onClick={() => setIsOpen(!isOpen)}
                className="w-32 font-urdu"
              >
                <Power className="ml-2 h-4 w-4" /> {isOpen ? "کھلی ہے" : "بند ہے"}
              </Button>
            </div>

            <div className="space-y-2">
              <label className="font-urdu text-lg">موجودہ ریٹ (فی من):</label>
              <div className="flex gap-2">
                <Input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(e.target.value)} 
                  className="text-2xl font-bold text-center"
                />
                <Button className="font-urdu bg-green-700">اپڈیٹ کریں</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-urdu flex items-center gap-2">
              <BellRing className="h-5 w-5 text-orange-500" /> کسانوں کے لیے پیغام
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea 
              className="w-full p-3 border rounded-md font-urdu text-right"
              placeholder="یہاں اہم خبر لکھیں..."
              rows={3}
            ></textarea>
            <Button className="w-full mt-3 font-urdu">پیغام بھیجیں</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MillDashboard;
