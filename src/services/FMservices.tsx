import {financialModelingInstance} from './instances';

export const getTickerCatalog = () => {
  financialModelingInstance.get('search-ticker', {params: {query: 'a', exchange: 'ETF'}}).then(({data, status}) => {
    return data;
  });
};
export const getHistoricalPrices = () => {
  financialModelingInstance
    .get('historical-price-full/AAPL', {params: {from: '2023-10-10', to: '2023-10-15'}})
    .then(({data, status}) => {
      return data;
    });
};
