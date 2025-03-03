import React from 'react';

import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useAtom} from 'jotai';

import {METRICS} from '../constants/constants';
import {selectedMetricAtom} from '../state/store';

const MetricsSelector = () => {
  const [selectedMetric, setSelectedMetric] = useAtom(selectedMetricAtom);
  const handleChangeMetric = (e: {target: {value: string}}) => {
    setSelectedMetric(e.target.value);
  };
  return (
    <>
      <Grid item xs={10} sm={5} md={4} lg={3}>
        <FormControl>
          <InputLabel id='metrics-select-label'>Metrics</InputLabel>
          <Select
            labelId='metrics-selector'
            id='metrics-selector'
            value={selectedMetric}
            label='Metrics'
            onChange={handleChangeMetric}
            size='small'
            sx={{width: 182}}
          >
            {METRICS.map((metric) => (
              <MenuItem key={metric} value={metric}>
                {metric}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
export default MetricsSelector;
