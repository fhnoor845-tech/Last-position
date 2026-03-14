// کسان کی منتخب کردہ ملز کا ڈیٹا
const MySelectedMills = [
  { 
    name: "Unicol Sugar Mills (Sial More)",
    district: "Sargodha",
    locations: [
      { id: 'C', name: 'Location C (Max Rate)', rate: 500 },
      { id: 'B', name: 'Location B', rate: 470 },
      { id: 'A', name: 'Location A', rate: 450 },
      { id: 'Gate', name: 'Gate Rate', rate: 400 }
    ]
  }
];

// پروفائل میں ریٹ ویجٹ (Rate Widget)
const ProfileRateWidget = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="font-urdu font-bold text-lg text-blue-900 border-r-4 border-yellow-400 pr-2">
        میری منتخب کردہ ملز اور ریٹس
      </h2>
      
      {MySelectedMills.map((mill, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100">
          <div className="bg-blue-900 p-3 text-white flex justify-between items-center">
            <span className="font-urdu font-bold">{mill.name}</span>
            <span className="text-[10px] bg-blue-700 px-2 py-1 rounded">{mill.district}</span>
          </div>
          
          <div className="p-2">
            <table className="w-full text-sm font-urdu">
              <thead>
                <tr className="text-slate-500 border-b">
                  <th className="text-right py-2">لوکیشن</th>
                  <th className="text-left py-2">ریٹ (من)</th>
                </tr>
              </thead>
              <tbody>
                {mill.locations.map((loc) => (
                  <tr key={loc.id} className="border-b last:border-0 hover:bg-yellow-50">
                    <td className="py-2 text-blue-800 font-bold">{loc.name}</td>
                    <td className="py-2 text-left text-green-700 font-black">{loc.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
