import React from 'react';

import Paper from '@mui/material/Paper';

import MainChart from '../components/MainChart';

const Home = () => {
  // useEffect(() => {
  //   getTickerCatalog();
  //   getHistoricalPrices();
  // }, []);

  return (
    <>
      <Paper>
        <MainChart />
      </Paper>
    </>
  );
};
export default Home;
