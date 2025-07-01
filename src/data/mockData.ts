
import { LandData } from '../types/LandData';

export const mockLandData: LandData[] = [
  {
    address: "123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM",
    lot_number: "234",
    area: 85.5,
    shape: "rectangle",
    door_orientation: "Đông Nam",
    land_type: "Đất ở đô thị",
    legal_status: "Sổ đỏ đầy đủ",
    location: {
      lat: 10.758,
      lng: 106.682
    },
    estimated_price_per_sqm: 120000000,
    total_value: 10260000000,
    road_width: 8,
    can_expand: true,
    max_rooms: 6,
    nearby_facilities: ["Trường tiểu học An Lạc", "Bệnh viện Quận 5", "Chợ An Đông", "Ngân hàng Vietcombank"],
    recent_transactions: [
      {
        id: "1",
        address: "125 Nguyễn Văn Cừ, Q5",
        date: "2024-06-15",
        area: 80,
        price: 9600000000,
        price_per_sqm: 120000000,
        distance: 50
      },
      {
        id: "2",
        address: "119 Nguyễn Văn Cừ, Q5",
        date: "2024-05-28",
        area: 90,
        price: 10350000000,
        price_per_sqm: 115000000,
        distance: 100
      },
      {
        id: "3",
        address: "127 Nguyễn Văn Cừ, Q5",
        date: "2024-05-10",
        area: 75,
        price: 8625000000,
        price_per_sqm: 115000000,
        distance: 80
      }
    ],
    price_trend: [
      { month: "T1/2024", price: 105000000 },
      { month: "T2/2024", price: 108000000 },
      { month: "T3/2024", price: 112000000 },
      { month: "T4/2024", price: 115000000 },
      { month: "T5/2024", price: 118000000 },
      { month: "T6/2024", price: 120000000 }
    ],
    liquidity_info: {
      avg_selling_time: 45,
      market_activity: "Cao"
    }
  },
  {
    address: "456 Đường Lê Văn Sỹ, Quận Tân Bình, TP.HCM",
    lot_number: "567",
    area: 120.8,
    shape: "irregular",
    door_orientation: "Tây Nam",
    land_type: "Đất ở đô thị",
    legal_status: "Sổ đỏ đầy đủ",
    location: {
      lat: 10.799,
      lng: 106.664
    },
    estimated_price_per_sqm: 95000000,
    total_value: 11476000000,
    road_width: 12,
    can_expand: false,
    max_rooms: 8,
    nearby_facilities: ["Sân bay Tân Sơn Nhất", "Trường THPT Gia Định", "Bệnh viện Tân Bình", "Siêu thị Coopmart"],
    recent_transactions: [
      {
        id: "4",
        address: "458 Lê Văn Sỹ, Tân Bình",
        date: "2024-06-20",
        area: 115,
        price: 10925000000,
        price_per_sqm: 95000000,
        distance: 60
      },
      {
        id: "5",
        address: "452 Lê Văn Sỹ, Tân Bình",
        date: "2024-06-05",
        area: 130,
        price: 11700000000,
        price_per_sqm: 90000000,
        distance: 120
      }
    ],
    price_trend: [
      { month: "T1/2024", price: 85000000 },
      { month: "T2/2024", price: 88000000 },
      { month: "T3/2024", price: 90000000 },
      { month: "T4/2024", price: 92000000 },
      { month: "T5/2024", price: 94000000 },
      { month: "T6/2024", price: 95000000 }
    ],
    liquidity_info: {
      avg_selling_time: 35,
      market_activity: "Rất cao"
    }
  },
  {
    address: "789 Đường Võ Văn Tần, Quận 3, TP.HCM",
    lot_number: "890",
    area: 65.2,
    shape: "square",
    door_orientation: "Bắc",
    land_type: "Đất ở đô thị",
    legal_status: "Đang chờ cấp sổ đỏ",
    location: {
      lat: 10.776,
      lng: 106.691
    },
    estimated_price_per_sqm: 180000000,
    total_value: 11736000000,
    road_width: 6,
    can_expand: true,
    max_rooms: 4,
    nearby_facilities: ["Công viên Tao Đàn", "Trường ĐH Khoa học Tự nhiên", "Bệnh viện Chợ Rẫy", "Nhà thờ Đức Bà"],
    recent_transactions: [
      {
        id: "6",
        address: "785 Võ Văn Tần, Q3",
        date: "2024-06-12",
        area: 70,
        price: 12600000000,
        price_per_sqm: 180000000,
        distance: 40
      },
      {
        id: "7",
        address: "791 Võ Văn Tần, Q3",
        date: "2024-05-25",
        area: 60,
        price: 10200000000,
        price_per_sqm: 170000000,
        distance: 30
      }
    ],
    price_trend: [
      { month: "T1/2024", price: 160000000 },
      { month: "T2/2024", price: 165000000 },
      { month: "T3/2024", price: 170000000 },
      { month: "T4/2024", price: 175000000 },
      { month: "T5/2024", price: 178000000 },
      { month: "T6/2024", price: 180000000 }
    ],
    liquidity_info: {
      avg_selling_time: 60,
      market_activity: "Trung bình"
    }
  }
];
