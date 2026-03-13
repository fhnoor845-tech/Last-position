import React from 'react';

const HeaderBranding = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-900 text-white shadow-lg">
      {/* Left: 3D Cube (Sized 50% as requested) */}
      <div className="w-12 h-12 relative preserve-3d animate-spin-slow">
        <div className="absolute inset-0 bg-green-600 border border-green-400 opacity-80 flex items-center justify-center text-[8px] font-bold">کسان</div>
        <div className="absolute inset-0 bg-green-700 border border-green-400 opacity-80 transform translate-z-6 flex items-center justify-center text-[8px] font-bold">شوگر مل</div>
      </div>

      {/* Right: Noor Project Logo with Rotating Circle */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-dashed border-blue-400 rounded-full animate-spin-slow"></div>
        <div className="bg-blue-600 rounded-full p-2 shadow-inner z-10">
          <span className="text-[10px] font-bold">Noor Project</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBranding;
