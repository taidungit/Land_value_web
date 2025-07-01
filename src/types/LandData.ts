
export interface LandData {
  address: string;
  lot_number: string;
  area: number;
  shape: string;
  door_orientation: string;
  land_type: string;
  legal_status: string;
  location: {
    lat: number;
    lng: number;
  };
  estimated_price_per_sqm: number;
  total_value: number;
  road_width: number;
  can_expand: boolean;
  max_rooms: number;
  nearby_facilities: string[];
  recent_transactions: Transaction[];
  price_trend: PriceTrend[];
  liquidity_info: {
    avg_selling_time: number;
    market_activity: string;
  };
}

export interface Transaction {
  id: string;
  address: string;
  date: string;
  area: number;
  price: number;
  price_per_sqm: number;
  distance: number;
}

export interface PriceTrend {
  month: string;
  price: number;
}
