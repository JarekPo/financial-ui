import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import DateRangePicker from '../components/DateRangePicker';
import MainChart from '../components/MainChart';
import ProductNameInput from '../components/ProductNameInput';

const Home = () => {
  return (
    <>
      <Paper sx={{margin: 1, padding: 1}}>
        <Grid container spacing={2} direction='row' justifyContent='space-around' alignItems='center'>
          <DateRangePicker />
          <ProductNameInput />
        </Grid>

        <MainChart />
      </Paper>
    </>
  );
};
export default Home;
