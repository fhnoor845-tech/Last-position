import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCube } from "@/components/AnimatedCube"; // آپ کا 3D کیوب

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col font-urdu overflow-hidden">
      {/* 1. لائیو سلائیڈ شو بیک گراؤنڈ */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594750801160-589f81d830b8" 
          className="w-full h-full object-cover opacity-40" 
          alt="Sugar Mills"
        />
        <div className="absolute inset-0 bg-green-900/90"></div> {/* سبز تھیم */}
      </div>

      {/* 2. ہیڈر: لوگو اور کیوب */}
      <div className="relative z-10 flex justify-between items-center p-4">
        <div className="scale-50 transform origin-left">
          <AnimatedCube /> {/* 50% چھوٹا کیوب */}
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white shadow-sm">کماد آن لائن</h1>
          <p className="text-xs text-yellow-400">Noor Project</p>
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-white/50 animate-spin-slow flex items-center justify-center p-1">
          <div className="bg-white/20 rounded-full w-full h-full flex items-center justify-center text-[8px] text-white">Noor Project</div>
        </div>
      </div>

      {/* 3. مین بٹنز (پیلے رنگ میں) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 px-6">
        <h2 className="text-white text-center mb-4 text-xl italic">اعتبار بھی، حساب بھی، لائیو ریٹ بھی</h2>
        
        <Button onClick={() => navigate('/auth?role=farmer')} className="bg-yellow-400 hover:bg-yellow-500 text-black h-16 text-2xl rounded-2xl shadow-xl">
          🌾 میں کسان ہوں
        </Button>
        <Button onClick={() => navigate('/auth?role=labor')} className="bg-yellow-400 hover:bg-yellow-500 text-black h-16 text-2xl rounded-2xl shadow-xl">
          👷 میں مزدور ہوں
        </Button>
      </div>

      {/* 4. ایڈمن نیوز پٹی (ریڈ ٹکر) */}
      <div className="relative z-10 bg-red-600 py-2 border-y border-white/20 mb-20">
        <marquee className="text-white font-bold">📢 مل نمبر 3 تین گھنٹے کے لیے بند ہے --- تازہ ترین ریٹ جاری ---</marquee>
      </div>
    </div>
  );
};

export default LandingPage;
