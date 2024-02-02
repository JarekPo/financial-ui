import format from 'date-fns/format';

import {financialModelingInstance} from './instances';

export const getTickerCatalog = async (query: string) => {
  try {
    const {data, status} = await financialModelingInstance.get('search-ticker', {
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
    const {data, status} = await financialModelingInstance.get(`historical-price-full/${selectedProduct}`, {
      params: {from: format(startDate, 'yyyy-MM-dd'), to: format(endDate, 'yyyy-MM-dd')},
    });
    return data;
  } catch (error) {
    console.error('Could not fetch the historical prices.', error);
    return [];
  }
};
