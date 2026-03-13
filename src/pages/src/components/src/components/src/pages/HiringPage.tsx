import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Handshake, ArrowLeft } from "lucide-react";
import SignaturePad from "@/components/SignaturePad";
import QRMuhada from "@/components/QRMuhada";
import HeaderBranding from "@/components/HeaderBranding";

const VARIETIES = [
  "سی پی ایف 246", "سی پی ایف 248", "ایچ ایس ایف 240", "این ایس جی 555",
  "سی پی 77-400", "ایس پی ایف 245", "دیسی", "دیگر",
];

const HiringPage = () => {
  const [farmerName, setFarmerName] = useState("");
  const [jamadarName, setJamadarName] = useState("");
  const [rate, setRate] = useState("");
  const [raqba, setRaqba] = useState("");
  const [variety, setVariety] = useState("");
  const [transport, setTransport] = useState("");
  const [farmerSign, setFarmerSign] = useState("");
  const [jamadarSign, setJamadarSign] = useState("");
  const [generated, setGenerated] = useState(false);

  const today = new Date().toLocaleDateString('ur-PK');
  const canGenerate = farmerName && jamadarName && rate && raqba && farmerSign && jamadarSign;

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <HeaderBranding />
      
      <div className="container pt-4 max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold font-urdu text-blue-900 mb-6 flex items-center gap-2 justify-center">
          <Handshake className="h-7 w-7 text-blue-700" /> ڈیجیٹل معاہدہ فارم
        </h1>

        {!generated ? (
          <div className="space-y-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="bg-blue-50/50 pb-3">
                <CardTitle className="font-urdu text-lg text-blue-800">معاہدے کی تفصیلات درج کریں</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-urdu text-slate-500">کسان کا نام *</label>
                    <Input value={farmerName} onChange={(e) => setFarmerName(e.target.value)} className="font-urdu" placeholder="نام لکھیں" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-urdu text-slate-500">جمعدار کا نام *</label>
                    <Input value={jamadarName} onChange={(e) => setJamadarName(e.target.value)} className="font-urdu" placeholder="نام لکھیں" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-urdu text-slate-500">طے شدہ ریٹ (من) *</label>
                    <Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} dir="ltr" placeholder="0.00" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-urdu text-slate-500">کل رقبہ (ایکڑ) *</label>
                    <Input type="number" value={raqba} onChange={(e) => setRaqba(e.target.value)} dir="ltr" placeholder="0" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-urdu text-slate-500">گنے کی قسم</label>
                  <select 
                    value={variety} 
                    onChange={(e) => setVariety(e.target.value)}
                    className="w-full rounded-md border border-input bg-white px-3 py-2 font-urdu text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">منتخب کریں</option>
                    {VARIETIES.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* دستخط کے پیڈز */}
            <div className="space-y-4">
              <SignaturePad label="کسان کے ڈیجیٹل دستخط" onSave={setFarmerSign} savedSignature={farmerSign} />
              <SignaturePad label="جمعدار کے ڈیجیٹل دستخط" onSave={setJamadarSign} savedSignature={jamadarSign} />
            </div>

            <Button 
              onClick={() => setGenerated(true)} 
              disabled={!canGenerate} 
              className="w-full font-urdu text-lg h-14 bg-blue-700 hover:bg-blue-800 shadow-lg transition-all"
            >
              📄 ڈیجیٹل معاہدہ تیار کریں
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            <QRMuhada
              farmerName={farmerName}
              jamadarName={jamadarName}
              rate={Number(rate)}
              raqba={Number(raqba)}
              variety={variety}
              transport={Number(transport)}
              date={today}
              farmerSign={farmerSign}
              jamadarSign={jamadarSign}
            />
            
            <div className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                onClick={() => setGenerated(false)} 
                className="w-full font-urdu text-slate-600 border-slate-300"
              >
                <ArrowLeft className="h-4 w-4 ml-2" /> معلومات تبدیل کریں
              </Button>
              <Button 
                className="w-full font-urdu bg-green-700 hover:bg-green-800"
                onClick={() => window.print()}
              >
                🖨️ معاہدہ پرنٹ / سیو کریں
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HiringPage;
