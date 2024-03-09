import React, {MouseEvent} from 'react';

import BarChartIcon from '@mui/icons-material/BarChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
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

  const handleChartTypeSelect = (e: MouseEvent<HTMLElement>, selectedType: string) => {
    setChartType(selectedType);
  };

  return (
    <>
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
          <ToggleButton value={ChartType.scatter} onClick={handleChartTypeSelect} aria-label='scatter chart'>
            <ScatterPlotIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};

export default ChartTypeSelector;
