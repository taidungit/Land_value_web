import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import LandInfo from '../components/LandInfo';
import ValueEstimation from '../components/ValueEstimation';
import { LandData } from '../types/LandData';
import { mockLandData } from '../data/mockData';
import TransactionList from '@/components/TransactionList';
import 'leaflet/dist/leaflet.css';

const Index = () => {
  const [landData, setLandData] = useState<LandData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (address: string) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      // Find matching land data or use default
      const foundData = mockLandData.find(data => 
        data.address.toLowerCase().includes(address.toLowerCase())
      ) || mockLandData[0];
      
      setLandData(foundData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🏡 <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Thông tin & Định giá đất
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Tra cứu thông tin chi tiết và ước tính giá trị lô đất
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {!landData ? (
          <div className="max-w-2xl mx-auto">
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
            
            {/* Sample addresses */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                🔍 Địa chỉ mẫu để thử nghiệm:
              </h3>
              <div className="space-y-2">
                {mockLandData.map((data, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(data.address)}
                    className="block w-full text-left p-3 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-all duration-200"
                  >
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      {data.address}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Back button */}
            <div className="mb-6">
              <button
                onClick={() => setLandData(null)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                ← Tìm kiếm khác
              </button>
            </div>

            {/* Two column layout */}
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col h-full self-stretch">
                <LandInfo landData={landData} />
              </div>
              <div className="flex flex-col h-full self-stretch">
                <ValueEstimation landData={landData} />
              </div>
            </div>
                    {/* Recent Transactions */}
      {/* <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🏘️ Giao dịch gần đây</h3>
        <TransactionList transactions={landData.recent_transactions} />
      </div> */}
          </>
          
        )}
         
      </div>

  

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 Thông tin & Định giá đất - Dữ liệu mô phỏng chỉ để tham khảo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
