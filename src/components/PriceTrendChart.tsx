import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PriceTrend } from '../types/LandData';

interface PriceTrendChartProps {
  data: PriceTrend[];
}

const PriceTrendChart: React.FC<PriceTrendChartProps> = ({ data }) => {
  const formatVND = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(0)} tỷ`;
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)} tr`;
    }
    return new Intl.NumberFormat('vi-VN').format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{`Tháng: ${label}`}</p>
          <p className="text-blue-600">
            {`Giá: ${formatVND(payload[0].value)}/m²`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: '#666' }}
              axisLine={{ stroke: '#ddd' }}
            />
            <YAxis 
              tickFormatter={formatVND}
              tick={{ fontSize: 12, fill: '#666' }}
              axisLine={{ stroke: '#ddd' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#1D4ED8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-gray-600">Giá thấp nhất</p>
            <p className="font-semibold text-red-600">
              {formatVND(Math.min(...data.map(d => d.price)))}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Giá cao nhất</p>
            <p className="font-semibold text-green-600">
              {formatVND(Math.max(...data.map(d => d.price)))}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Tăng trưởng</p>
            <p className="font-semibold text-blue-600">
              +{(((data[data.length - 1].price - data[0].price) / data[0].price) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTrendChart;
