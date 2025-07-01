import React from 'react';
import { LandData } from '../types/LandData';
import LandMap from './LandMap';

interface LandInfoProps {
  landData: LandData;
}

const LandInfo: React.FC<LandInfoProps> = ({ landData }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num);
  };

  const getShapeIcon = (shape: string) => {
    switch (shape) {
      case 'rectangle': return '⬜';
      case 'square': return '🔲';
      case 'irregular': return '🔷';
      default: return '📐';
    }
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">🧱 Thông tin lô đất</h2>
        <p className="text-blue-100">{landData.address}</p>
      </div>

      {/* Basic Info */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 min-h-[351px] flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Thông tin cơ bản</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Diện tích:</span>
              <span className="text-blue-600 font-semibold">{formatNumber(landData.area)} m²</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Số thửa đất:</span>
              <span className="text-blue-600 font-semibold">{landData.lot_number}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Hình dạng:</span>
              <span className="text-blue-600 font-semibold">{getShapeIcon(landData.shape)} {landData.shape}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Hướng cửa chính:</span>
              <span className="text-blue-600 font-semibold">🧭 {landData.door_orientation}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Loại đất:</span>
              <span className="text-blue-600 font-semibold">{landData.land_type}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Tình trạng pháp lý:</span>
              <span className={`font-semibold ${
                landData.legal_status.includes('đầy đủ') ? 'text-green-600' : 'text-orange-600'
              }`}>
                {landData.legal_status.includes('đầy đủ') ? '✅' : '⏳'} {landData.legal_status}
              </span>
            </div>
          </div>
        </div>
      </div>
 

      {/* Map */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🗺️ Vị trí lô đất</h3>
        <LandMap location={landData.location} address={landData.address} />
      </div>

      {/* Inferred Info */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🔍 Thông tin suy diễn</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🏗️</span>
              <span className="font-semibold text-gray-700">Khả năng mở rộng:</span>
            </div>
            <p className="text-gray-600 ml-8">
              {landData.can_expand ? 
                '✅ Có thể mở rộng (nở hậu)' : 
                '❌ Không thể mở rộng'
              }
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-gray-700">Chia tối đa:</span>
            </div>
            <p className="text-gray-600 ml-8">
              {landData.max_rooms} phòng (dựa trên diện tích {formatNumber(landData.area)} m²)
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🛣️</span>
              <span className="font-semibold text-gray-700">Đường trước nhà:</span>
            </div>
            <p className="text-gray-600 ml-8">
              Rộng {landData.road_width}m {landData.road_width >= 8 ? '(Đường lớn)' : '(Ngõ nhỏ)'}
            </p>
          </div>
        </div>
      </div>

      {/* Nearby Facilities */}
      {/* <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🏢 Tiện ích xung quanh</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {landData.nearby_facilities.map((facility, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">
                {facility.includes('Trường') ? '🏫' :
                 facility.includes('Bệnh viện') ? '🏥' :
                 facility.includes('Chợ') ? '🏪' :
                 facility.includes('Ngân hàng') ? '🏦' :
                 facility.includes('Sân bay') ? '✈️' :
                 facility.includes('Siêu thị') ? '🛒' :
                 facility.includes('Công viên') ? '🌳' :
                 facility.includes('Nhà thờ') ? '⛪' : '📍'}
              </span>
              <span className="text-gray-700">{facility}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default LandInfo;
