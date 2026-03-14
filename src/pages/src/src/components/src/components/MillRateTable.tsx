import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MillRateTable = () => {
  const navigate = useNavigate();

  // ڈیٹا کو Descending Order (زیادہ سے کم) میں ترتیب دیا گیا ہے
  const millData = [
    { id: 'C', name: 'Unicol (Location C)', rate: 500, status: 'Open' },
    { id: 'B', name: 'Unicol (Location B)', rate: 470, status: 'Open' },
    { id: 'A', name: 'Unicol (Location A)', rate: 450, status: 'Open' },
    { id: 'Gate', name: 'Unicol (Gate Rate)', rate: 400, status: 'Closed' },
  ];

  return (
    <div className="p-4 bg-white rounded-3xl shadow-lg border-t-4 border-blue-900" dir="rtl">
      <h2 className="text-xl font-urdu font-bold mb-4 text-blue-900">یونیکول شوگر ملز (تازہ ترین ریٹس)</h2>
      
      <Table className="border rounded-xl overflow-hidden">
        <TableHeader className="bg-blue-50">
          <TableRow>
            <TableHead className="text-right font-urdu">لوکیشن</TableHead>
            <TableHead className="text-right font-urdu">ریٹ</TableHead>
            <TableHead className="text-center font-urdu">ایکشن</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {millData.map((row) => (
            <TableRow 
              key={row.id} 
              className="cursor-pointer hover:bg-slate-50 transition-colors"
              onClick={() => navigate(`/mill-detail/${row.id}`)} // ری ڈائریکٹ لنک
            >
              <TableCell className="font-urdu font-bold">{row.name}</TableCell>
              <TableCell className="text-green-700 font-bold">{row.rate}</TableCell>
              <TableCell className="text-center">
                <button className="bg-yellow-400 text-[10px] px-3 py-1 rounded-full text-black font-urdu">
                  تفصیل دیکھیں
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <p className="text-[10px] text-slate-400 mt-2 text-center font-urdu">
        * کسی بھی ریٹ پر کلک کر کے GPS لوکیشن اور دوری چیک کریں
      </p>
    </div>
  );
};
