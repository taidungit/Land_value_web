import React from 'react';
import { LandData } from '../types/LandData';
import TransactionList from './TransactionList';
import PriceTrendChart from './PriceTrendChart';

interface ValueEstimationProps {
  landData: LandData;
}

const ValueEstimation: React.FC<ValueEstimationProps> = ({ landData }) => {
  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatVNDShort = (amount: number) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} tỷ`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(0)} triệu`;
    }
    return formatVND(amount);
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">💰 Ước tính giá trị</h2>
        <p className="text-orange-100">Phân tích thị trường và định giá</p>
      </div>

      {/* Price Estimation */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">💵 Giá trị ước tính</h3>
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Giá trị mỗi mét vuông</p>
              <p className="text-3xl font-bold text-green-600 mb-4">
                {formatVNDShort(landData.estimated_price_per_sqm)}/m²
              </p>
              <div className="border-t border-green-300 pt-4">
                <p className="text-gray-600 mb-2">Tổng giá trị lô đất</p>
                <p className="text-4xl font-bold text-green-700">
                  {formatVNDShort(landData.total_value)}
                </p>
                <p className="text-gray-500 mt-2">
                  ({landData.area} m² × {formatVNDShort(landData.estimated_price_per_sqm)}/m²)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Liquidity Info */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📊 Thông tin thanh khoản</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">⏱️</span>
              <span className="font-semibold text-gray-700">Thời gian bán trung bình:</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 ml-8">
              {landData.liquidity_info.avg_selling_time} ngày
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📈</span>
              <span className="font-semibold text-gray-700">Hoạt động thị trường:</span>
            </div>
            <p className={`text-2xl font-bold ml-8 ${
              landData.liquidity_info.market_activity === 'Rất cao' ? 'text-green-600' :
              landData.liquidity_info.market_activity === 'Cao' ? 'text-blue-600' :
              'text-orange-600'
            }`}>
              {landData.liquidity_info.market_activity}
            </p>
          </div>
        </div>
      </div>

      {/* Price Trend Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📈 Xu hướng giá theo thời gian</h3>
        <PriceTrendChart data={landData.price_trend} />
      </div>




      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🏘️ Giao dịch gần đây</h3>
        <TransactionList transactions={landData.recent_transactions} />
      </div>
    </div>
  );
};

export default ValueEstimation;
