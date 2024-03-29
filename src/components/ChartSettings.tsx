import React from 'react';

import Grid from '@mui/material/Grid';

import ChartTypeSelector from './ChartTypeSelector';

const ChartSettings = () => {
  return (
    <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center' margin={0.2}>
      <ChartTypeSelector />
    </Grid>
  );
};

export default ChartSettings;
