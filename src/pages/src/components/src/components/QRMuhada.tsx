import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, QrCode } from "lucide-react";

interface QRMuhadaProps {
  farmerName: string;
  jamadarName: string;
  rate: number;
  raqba: number;
  variety: string;
  transport?: number;
  date: string;
  farmerSign?: string;
  jamadarSign?: string;
}

const QRMuhada = ({
  farmerName, jamadarName, rate, raqba, variety, transport = 0, date, farmerSign, jamadarSign,
}: QRMuhadaProps) => {
  // QR کوڈ کے اندر محفوظ ہونے والا ڈیٹا
  const qrData = JSON.stringify({
    f: farmerName,
    j: jamadarName,
    r: rate,
    a: raqba,
    v: variety,
    t: transport,
    d: date,
    app: "KamadOnline-NoorProject",
  });

  return (
    <Card className="border-blue-300 bg-white shadow-lg">
      <CardHeader className="pb-2 text-center border-b bg-slate-50">
        <CardTitle className="font-urdu text-xl leading-relaxed flex items-center justify-center gap-2 text-blue-900
