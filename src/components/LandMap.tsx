import React from 'react';

interface LandMapProps {
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

const LandMap: React.FC<LandMapProps> = ({ location, address }) => {
  return (
    <div className="relative">
      {/* Placeholder map */}
      <div className="w-full h-64 sm:h-72 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border-2 border-gray-200 relative overflow-hidden">
        {/* Mock map background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-300"></div>
            ))}
          </div>
        </div>
        
        {/* Center marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45"></div>
          </div>
        </div>

        {/* Mock roads */}
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gray-400 opacity-50"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gray-400 opacity-50"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-400 opacity-50"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gray-400 opacity-50"></div>

        {/* Coordinates overlay */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-2 rounded-lg shadow-md">
          <p className="text-xs text-gray-600">
            📍 {location.lat.toFixed(3)}, {location.lng.toFixed(3)}
          </p>
        </div>
      </div>

      {/* Map info */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-500 text-xl">📍</span>
          <span className="font-semibold text-gray-700">Vị trí:</span>
        </div>
        <p className="text-gray-600 ml-6">{address}</p>
        <p className="text-sm text-gray-500 ml-6 mt-1">
          Tọa độ: {location.lat}°N, {location.lng}°E
        </p>
      </div>

      {/* Mock satellite view toggle */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md">
        <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          🛰️ Vệ tinh
        </button>
      </div>
    </div>
  );
};

export default LandMap;
