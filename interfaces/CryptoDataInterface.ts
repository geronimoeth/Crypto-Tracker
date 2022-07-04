export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: {large: string};
  market_data: {
    price_change_percentage_24h: number;
    current_price: {
      usd: number;
    };
  };
}
