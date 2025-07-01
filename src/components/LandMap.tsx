import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// ✅ Sửa lỗi không hiển thị marker trong Vite
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

interface LandMapProps {
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

const TileLayerToggle: React.FC<{ isSatellite: boolean }> = ({ isSatellite }) => {
  useMap(); // Đảm bảo tile layer áp dụng
  return (
    <TileLayer
      attribution='&copy; OpenStreetMap & Esri'
      url={
        isSatellite
          ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      }
    />
  );
};

const LandMap: React.FC<LandMapProps> = ({ location, address }) => {
  const [isSatellite, setIsSatellite] = useState(false);

  // 🟧 Toạ độ mô phỏng polygon (vuông quanh điểm center)
  const polygonCoords: [number, number][] = [
    [location.lat + 0.0004, location.lng - 0.0004],
    [location.lat + 0.0004, location.lng + 0.0004],
    [location.lat - 0.0004, location.lng + 0.0004],
    [location.lat - 0.0004, location.lng - 0.0004],
  ];

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-200">
      <MapContainer
        center={[location.lat, location.lng] as [number, number]}
        zoom={18}
        scrollWheelZoom={false}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayerToggle isSatellite={isSatellite} />

        {/* Marker */}
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            {address}
            <br />
            📍 {location.lat.toFixed(3)}, {location.lng.toFixed(3)}
          </Popup>
        </Marker>

        {/* Polygon */}
        <Polygon
          positions={polygonCoords}
          pathOptions={{ color: 'blue', fillColor: '#3b82f6', fillOpacity: 0.2 }}
        />
      </MapContainer>

      {/* Nút chuyển bản đồ */}
      <button
        onClick={() => setIsSatellite(!isSatellite)}
        className="absolute top-4 right-4 z-[1000] px-3 py-1.5 text-sm bg-white border border-gray-300 rounded shadow hover:bg-gray-100 transition"
      >
        {isSatellite ? '🗺️ Bản đồ thường' : '🛰️ Vệ tinh'}
      </button>

      {/* Mô tả */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-500 text-xl">📍</span>
          <span className="font-semibold text-gray-700">Vị trí:</span>
        </div>
        <p className="text-gray-600 ml-6">{address}</p>
        <p className="text-sm text-gray-500 ml-6 mt-1">
          Tọa độ: {location.lat}°N, {location.lng}°E
        </p>
      </div>
    </div>
  );
};

export default LandMap;
