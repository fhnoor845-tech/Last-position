// ٹھیکیدار کے لیے مخصوص کوڈ کی جھلک
const ContractorDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 pb-20" dir="rtl">
      {/* پروفائل سیکشن - صرف نام اور رینک */}
      <div className="p-6 bg-blue-900 text-white rounded-b-3xl shadow-lg">
        <h1 className="text-xl font-urdu">خوش آمدید، ٹھیکیدار صاحب!</h1>
        <p className="text-sm opacity-80">آپ کے ماتحت کل جمعدار: 8</p>
      </div>

      {/* جمعدار مینیجمنٹ (ٹری پلان) */}
      <div className="p-4 space-y-4">
        <h2 className="font-urdu font-bold flex items-center gap-2">
          <Users className="text-blue-600" /> میرے جمعدار اور ٹیمیں
        </h2>
        
        {/* جمعدار کارڈ */}
        <Card className="border-r-4 border-r-blue-500">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold font-urdu">جمعدار خان محمد</span>
              <Badge>3 ٹیمیں</Badge>
            </div>
            {/* جمعدار کی ٹیموں کی تفصیل */}
            <div className="mr-4 border-r border-slate-200 pr-3 space-y-1">
              <p className="text-xs text-slate-600">● ٹیم الف (12 مزدور)</p>
              <p className="text-xs text-slate-600">● ٹیم ب (10 مزدور)</p>
            </div>
          </CardContent>
        </Card>

        {/* نیا جمعدار شامل کرنے کا بٹن */}
        <Button className="w-full bg-blue-700 font-urdu h-12">
          <Plus className="ml-2" /> نیا جمعدار / ٹیم شامل کریں
        </Button>
      </div>
    </div>
  );
};
