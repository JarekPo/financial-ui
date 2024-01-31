import {financialModelingInstance} from './instances';

export const getTickerCatalog = async () => {
  try {
    const {data, status} = await financialModelingInstance.get('search-ticker', {
      params: {query: 'a', exchange: 'ETF'},
    });
    return [data];
  } catch (error) {
    console.error('Could not fetch data from the Ticker catalog.', error);
    return [];
  }
};
export const getHistoricalPrices = async () => {
  try {
    const {data, status} = await financialModelingInstance.get('historical-price-full/AAPL', {
      params: {from: '2023-11-01', to: '2024-01-31'},
    });
    return data;
  } catch (error) {
    console.error('Could not fetch the historical prices.', error);
    return [];
  }
};
