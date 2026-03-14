// مل کی مختلف لوکیشنز اور جی پی ایس ڈیٹا
const locations = [
  { id: 'A', name: 'Main Gate (Mill)', rate: 450, coordinates: '32.0836, 72.6711' },
  { id: 'B', name: 'Zafar More Center', rate: 500, coordinates: '32.1234, 72.5678' },
  { id: 'C', name: 'Sillanwali Center', rate: 480, coordinates: '32.0123, 72.4567' }
];

// کسان کے ڈیش بورڈ پر نیویگیشن بٹن
const LocationCard = ({ loc, userDistance }) => (
  <div className="bg-white p-4 rounded-2xl shadow-md border-l-8 border-blue-900 mb-3">
    <div className="flex justify-between items-start">
      <h3 className="font-urdu font-bold text-lg">{loc.name}</h3>
      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">ریٹ: {loc.rate}</span>
    </div>
    
    <p className="text-sm text-slate-600 mt-2">
      📍 آپ سے فاصلہ: <span className="font-bold text-blue-700">{userDistance} کلومیٹر</span>
    </p>

    <div className="flex gap-2 mt-4">
      <Button 
        onClick={() => window.open(`https://www.google.com/maps?q=${loc.coordinates}`)}
        className="flex-1 bg-blue-600 text-white text-xs h-10"
      >
        گوگل میپس پر دیکھیں
      </Button>
      <Button className="flex-1 bg-yellow-400 text-black text-xs h-10">
        فصل بک کریں
      </Button>
    </div>
  </div>
);
