
import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (address: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="address" className="block text-lg font-semibold text-gray-700 mb-3">
            🔍 Nhập địa chỉ lô đất cần tra cứu:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Ví dụ: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-lg"
            disabled={isLoading}
          />
        </div>
        
        <button
          type="submit"
          disabled={!address.trim() || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:hover:shadow-lg text-lg"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Đang tra cứu thông tin...
            </div>
          ) : (
            '🚀 Tra cứu thông tin lô đất'
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
