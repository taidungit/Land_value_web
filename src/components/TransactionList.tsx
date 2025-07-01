
import React from 'react';
import { Transaction } from '../types/LandData';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const formatVND = (amount: number) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} tỷ`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(0)} triệu`;
    }
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 mb-1">
                📍 {transaction.address}
              </h4>
              <p className="text-sm text-gray-600">
                📅 Ngày giao dịch: {formatDate(transaction.date)}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                📏 {transaction.distance}m
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Diện tích</p>
              <p className="font-semibold text-gray-800">{transaction.area} m²</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Tổng giá</p>
              <p className="font-semibold text-green-600">{formatVND(transaction.price)}</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Giá/m²</p>
              <p className="font-semibold text-blue-600">{formatVND(transaction.price_per_sqm)}</p>
            </div>
          </div>
        </div>
      ))}
      
      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg">📭 Chưa có giao dịch nào được ghi nhận</p>
          <p className="text-sm mt-2">Thông tin giao dịch sẽ được cập nhật khi có dữ liệu mới</p>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
