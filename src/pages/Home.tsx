import React from 'react';

import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import {useAtom} from 'jotai';

import DateRangePicker from '../components/DateRangePicker';
import Disclaimer from '../components/Disclaimer';
import MainChart from '../components/MainChart';
import MetricsSelector from '../components/MetricsSelector';
import ProductNameInput from '../components/ProductNameInput';
import ProductSummaryCard from '../components/ProductSummaryCard';
import {isPageLoadingAtom} from '../state/store';

const Home = () => {
  const [isLoading, setIsLoading] = useAtom(isPageLoadingAtom);

  return (
    <>
      {isLoading && <LinearProgress />}
      <Paper sx={{margin: 1, padding: 2}}>
        <Grid container spacing={2} direction='row' justifyContent='space-around' alignItems='center'>
          <ProductNameInput />
          <MetricsSelector />
          <DateRangePicker />
          <ProductSummaryCard />
        </Grid>

        <MainChart />
      </Paper>
      <Disclaimer />
    </>
  );
};
export default Home;
