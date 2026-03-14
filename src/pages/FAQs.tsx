import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const qa = [
    { q: "ریٹ لاک ہونے کے بعد کیا میں اسے بدل سکتا ہوں؟", a: "جی نہیں، ایک بار معاہدہ لاک (Lock) ہونے کے بعد کٹائی کا ریٹ اور ٹرانسپورٹ کے اخراجات تبدیل نہیں کیے جا سکتے۔" },
    { q: "اگر مزدور KPK سے آئے تو ٹرانسپورٹ کون دے گا؟", a: "یہ معاہدے کے وقت طے کیا جاتا ہے۔ اگر TPT کا خانہ کسان نے پر کیا ہے تو یہ رقم کسان کے ذمے ہوگی۔" },
    { q: "لائیو لوکیشن کیوں ضروری ہے؟", a: "تاکہ جمعدار کو کھیت کا درست راستہ مل سکے اور کسان کی زمین کی تصدیق ہو سکے۔" },
    { q: "پیسوں کا حساب کہاں نظر آئے گا؟", a: "تمام حساب کتاب 'حساب کتاب' (Ledger) والے پیج پر ہر وقت لائیو اپڈیٹ ہوتا رہتا ہے۔" }
  ];

  return (
    <div className="p-4 bg-white min-h-screen" dir="rtl">
      <h1 className="text-2xl font-bold font-urdu text-green-800 mb-6 text-center">نور مدد (سوال و جواب)</h1>
      <Accordion type="single" collapsible className="w-full">
        {qa.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-urdu text-right text-sm">{item.q}</AccordionTrigger>
            <AccordionContent className="font-urdu text-slate-600 text-xs leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
