import React from 'react';

import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useAtom} from 'jotai';

import {ChartType} from '../constants/constants';
import {chartTypeAtom} from '../state/store';

export const ChartTypeSelector = () => {
  const [chartType, setChartType] = useAtom(chartTypeAtom);

  const handleChartTypeSelect = (e: React.MouseEvent<HTMLElement>, selectedType: string) => {
    setChartType(selectedType);
  };

  return (
    <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
      <Grid item>
        <Typography variant='body1'>Chart Type</Typography>
      </Grid>
      <Grid item>
        <ToggleButtonGroup value={chartType} exclusive aria-label='chart type buttons'>
          <ToggleButton value={ChartType.line} onClick={handleChartTypeSelect} aria-label='line chart'>
            <TimelineIcon />
          </ToggleButton>
          <ToggleButton value={ChartType.bar} onClick={handleChartTypeSelect} aria-label='bar chart'>
            <BarChartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default ChartTypeSelector;
