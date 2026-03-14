import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";

const NoorHelp = () => {
  const ADMIN_WHATSAPP = "923329704095";

  return (
    <div className="p-6 text-center space-y-6" dir="rtl">
      <div className="flex justify-center"><ShieldCheck className="h-16 w-16 text-green-600" /></div>
      <h2 className="text-2xl font-bold font-urdu">نور پراجیکٹ ہیلپ ڈیسک</h2>
      <p className="font-urdu text-slate-500">کسی بھی قسم کی ہیرا پھیری یا تکنیکی خرابی کی صورت میں ہم سے رابطہ کریں۔</p>
      
      <div className="space-y-3 pt-4">
        <a href={`https://wa.me/${ADMIN_WHATSAPP}`} target="_blank">
          <Button className="w-full bg-green-600 h-12 text-lg font-urdu">
            <MessageCircle className="ml-2" /> واٹس ایپ پر بات کریں
          </Button>
        </a>
        <a href={`tel:+${ADMIN_WHATSAPP}`}>
          <Button variant="outline" className="w-full h-12 text-lg font-urdu border-green-600 text-green-700">
            <PhoneCall className="ml-2" /> ڈائریکٹ کال کریں
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NoorHelp;
