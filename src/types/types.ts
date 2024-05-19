export interface HistoricalData {
  symbol: string;
  historical: [
    {
      adjClose: number;
      change: number;
      changeOverTime: number;
      changePercent: number;
      close: number;
      date: string;
      high: number;
      label: string;
      low: number;
      open: number;
      unadjustedVolume: number;
      volume: number;
      vwap: number;
    },
  ];
}

export interface DatasetMetrics {
  date: string;
  open: number;
  close: number;
  adjClose: number;
  high: number;
  low: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  changeOverTime: number;
  vwap: number;
}

export type ProductMetric =
  | 'date'
  | 'open'
  | 'close'
  | 'adjClose'
  | 'high'
  | 'low'
  | 'volume'
  | 'unadjustedVolume'
  | 'change'
  | 'changePercent'
  | 'changeOverTime'
  | 'vwap';

export interface CountriesData {
  country: string;
  exchange: string;
}

export interface StockSearchData {
  country: string;
  currency: string;
  exchange: string;
  id: number;
  mic_code: string;
  name: string;
  symbol: string;
  type: string;
}
