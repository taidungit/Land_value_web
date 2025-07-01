import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// ✅ Khắc phục lỗi marker không hiển thị trong môi trường Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface LandMapProps {
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  shape?: LatLngExpression[]; // ⬅️ Thêm hình dạng để hiển thị Polygon nếu có
}

const LandMap: React.FC<LandMapProps> = ({ location, address, shape }) => {
  const center: LatLngExpression = [location.lat, location.lng];

  const polygonCoords: LatLngExpression[] =
    shape && shape.length >= 3
      ? shape
      : [
          [location.lat + 0.0002, location.lng + 0.0002],
          [location.lat + 0.0002, location.lng - 0.0002],
          [location.lat - 0.0002, location.lng - 0.0002],
          [location.lat - 0.0002, location.lng + 0.0002],
        ];

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-200">
      <MapContainer
        center={center}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: '300px', width: '100%' }}
      >
        {/* Nền OSM */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* Lớp quy hoạch (nếu cần) */}
        <TileLayer
          url="https://l5cfglaebpobj.vcdn.cloud/tp-ho-chi-minh-2030/{z}/{x}/{y}.png"
          attribution="Bản đồ quy hoạch TP.HCM 2030"
          opacity={0.6}
        />

        <Marker position={center}>
          <Popup>
            <strong>{address}</strong><br />
            📍 {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
          </Popup>
        </Marker>

        <Polygon positions={polygonCoords} pathOptions={{ color: 'blue', weight: 2, fillOpacity: 0.3 }} />
      </MapContainer>

      <div className="p-4 bg-gray-50">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-500 text-xl">📍</span>
          <span className="font-semibold text-gray-700">Vị trí:</span>
        </div>
        <p className="text-gray-600 ml-6">{address}</p>
        <p className="text-sm text-gray-500 ml-6 mt-1">
          Tọa độ: {location.lat}°N, {location.lng}°E
        </p>
        <p className="text-xs text-gray-400 mt-2">* Bản đồ minh họa, không dùng cho mục đích pháp lý.</p>
      </div>
    </div>
  );
};

export default LandMap;
