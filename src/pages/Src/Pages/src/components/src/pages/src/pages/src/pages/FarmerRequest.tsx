import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin, Lock, Truck, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FarmerRequest = () => {
  const { toast } = useToast();
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  
  // ورائٹی اور رقبہ کی سٹیٹ
  const [varieties, setVarieties] = useState([
    { id: 1, type: "منڈھی کماد", name: "HSF-240", acres: "", note: "" },
    { id: 2, type: "فروری کاشت", name: "CP-77400", acres: "", note: "" },
    { id: 3, type: "ستمبر کاشت", name: "US-240", acres: "", note: "" },
  ]);

  const [tptCharges, setTptCharges] = useState(""); // ٹرانسپورٹ لاک
  const [isLocked, setIsLocked] = useState(false); // ہائرنگ لاک

  // لائیو لوکیشن حاصل کرنا
  const getLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  };

  // لائیو فوٹو فنکشن (صرف 3 لازمی)
  const handleCapture = () => {
    if (photos.length >= 3) {
      toast({ title: "صرف 3 لائیو تصاویر لازمی ہیں" });
      return;
    }
    getLiveLocation(); // تصویر کے ساتھ لوکیشن اپڈیٹ
    const dummyPhoto = `https://images.unsplash.com/photo-1594750801160-589f81d830b8?q=80&w=200&h=200&auto=format&fit=crop`; // ڈیمو کے لیے
    setPhotos([...photos, dummyPhoto]);
    toast({ title: `تصویر ${photos.length + 1} لوکیشن کے ساتھ محفوظ ہو گئی` });
  };

  return (
    <div className="min-h-screen bg-green-50 pb-24 p-4" dir="rtl">
      <h1 className="text-2xl font-bold font-urdu text-green-900 mb-6 text-center">مزدور کی درخواست (نور پراجیکٹ)</h1>

      {/* 1. لائیو لوکیشن اور تصاویر */}
      <Card className="mb-4 border-2 border-blue-200">
        <CardContent className="pt-4">
          <h2 className="font-urdu font-bold mb-2 flex items-center gap-2">
            <Camera className="text-blue-600" /> لائیو فصل کی تصاویر (3 لازمی)
          </h2>
          <div className="flex gap-2 mb-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-full h-24 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
                {photos[i] ? <img src={photos[i]} alt="Crop" className="object-cover w-full h-full" /> : <Camera className="text-slate-300" />}
              </div>
            ))}
          </div>
          <Button onClick={handleCapture} className="w-full bg-blue-600 font-urdu">
            <Camera className="ml-2 h-4 w-4" /> لائیو تصویر لیں اور لوکیشن لاک کریں
          </Button>
          {location && (
            <p className="text-[10px] text-center mt-2 text-slate-500 font-mono">
              GPS: {location.lat.toFixed(4)}, {location.lng.toFixed(4)} (ٹیگ ہو گیا)
            </p>
          )}
        </CardContent>
      </Card>

      {/* 2. ورائٹی اور رقبہ کی تفصیل */}
      <Card className="mb-4 border-2 border-green-200">
        <CardContent className="pt-4 space-y-4">
          <h2 className="font-urdu font-bold mb-2 flex items-center gap-2">
            <PlusCircle className="text-green-600" /> کماد کی ورائٹی اور رقبہ
          </h2>
          {varieties.map((v, index) => (
            <div key={v.id} className="p-3 bg-white rounded-lg border border-green-100 shadow-sm space-y-2">
              <p className="font-urdu font-bold text-sm text-green-700">{v.type}: {v.name}</p>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="رقبہ (ایکڑ)" type="number" className="font-urdu" />
                <Input placeholder="وضاحت (گر گیا ہے وغیرہ)" className="
