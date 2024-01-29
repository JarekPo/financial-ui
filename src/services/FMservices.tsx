import {financialModelingInstance} from './instances';

export const getTickerCatalog = () => {
  try {
    financialModelingInstance.get('search-ticker', {params: {query: 'a', exchange: 'ETF'}}).then(({data, status}) => {
      return data;
    });
  } catch (error) {
    console.error('Could not fetch data from the Ticker catalog.', error);
  }
};
export const getHistoricalPrices = () => {
  try {
    financialModelingInstance
      .get('historical-price-full/AAPL', {params: {from: '2023-10-10', to: '2023-10-15'}})
      .then(({data, status}) => {
        return data;
      });
  } catch (error) {
    console.error('Could not fetch the historical prices.', error);
  }
};
