import {StockSearchData} from '../types/types';

export const isTableEmpty = (stockData: StockSearchData[]) => {
  return Object.values(stockData[0]).every((value) => value === '' || value === 0);
};
