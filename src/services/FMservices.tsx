import format from 'date-fns/format';

import {financialBackendInstance} from './instances';

export const getTickerCatalog = async (query: string) => {
  try {
    const {data, status} = await financialBackendInstance.get('search-ticker', {
      params: {query: query},
    });
    return [data];
  } catch (error) {
    console.error('Could not fetch data from the Ticker catalog.', error);
    return [];
  }
};

export const getHistoricalPrices = async (selectedProduct: string, startDate: Date, endDate: Date) => {
  try {
    const {data, status} = await financialBackendInstance.get(`historical-price`, {
      params: {
        symbol: selectedProduct,
        date_start: format(startDate, 'yyyy-MM-dd'),
        date_end: format(endDate, 'yyyy-MM-dd'),
      },
    });
    return data;
  } catch (error) {
    console.error('Could not fetch the historical prices.', error);
    return [];
  }
};

export const getCountries = async () => {
  try {
    const {data, status} = await financialBackendInstance.get('country-data');
    return data;
  } catch (error) {
    console.error('Could not fetch the caontries.', error);
    return [];
  }
};

export const getStockSearchResults = async (
  country: string | null,
  exchange: string | null,
  symbol: string | null,
  name: string | null
) => {
  try {
    const {data, status} = await financialBackendInstance.get('stock-search', {
      params: {
        country: country,
        exchange: exchange,
        symbol: symbol,
        name: name,
      },
    });
    return data;
  } catch (error) {
    console.error('Could not fetch the search results.', error);
    return [];
  }
};
