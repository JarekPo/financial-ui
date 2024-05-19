import format from 'date-fns/format';

import {HistoricalData, StockSearchData} from '../types/types';
import {financialBackendInstance} from './instances';

export const getTickerCatalog = async (query: string) => {
  try {
    const {data, status} = await financialBackendInstance.get('search-ticker', {
      params: {query: query},
    });
    if (!data) {
      throw new Error('No data returned.');
    }
    return [data];
  } catch (error) {
    console.error('Could not fetch data from the Ticker catalog.', error);
    throw error;
  }
};

export const getHistoricalPrices = async (
  selectedProduct: string,
  startDate: Date,
  endDate: Date
): Promise<HistoricalData> => {
  try {
    const {data, status} = await financialBackendInstance.get(`historical-price`, {
      params: {
        symbol: selectedProduct,
        date_start: format(startDate, 'yyyy-MM-dd'),
        date_end: format(endDate, 'yyyy-MM-dd'),
      },
    });
    if (!data) {
      throw new Error('No data returned.');
    }
    return data;
  } catch (error) {
    console.error('Could not fetch the historical prices.', error);
    throw error;
  }
};

export const getCountries = async () => {
  try {
    const {data, status} = await financialBackendInstance.get('country-data');
    if (!data) {
      throw new Error('No data returned.');
    }
    return data;
  } catch (error) {
    console.error('Could not fetch the countries.', error);
    throw error;
  }
};

export const getStockSearchResults = async (
  country: string | null,
  exchange: string | null,
  symbol: string | null,
  name: string | null
): Promise<StockSearchData[]> => {
  try {
    const {data, status} = await financialBackendInstance.get('stock-search', {
      params: {
        country: country,
        exchange: exchange,
        symbol: symbol,
        name: name,
      },
    });
    if (!data) {
      throw new Error('No data returned.');
    }
    return data;
  } catch (error) {
    console.error('Could not fetch the search results.', error);
    throw error;
  }
};
