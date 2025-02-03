import React from 'react';
import DatePicker from 'react-datepicker';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useAtom} from 'jotai';

import {endDateAtom, startDateAtom} from '../state/store';

import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePicker {
  startDate: Date;
  endDate: Date;
}
const DateRangePicker = () => {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Grid item xs={10} sm={6} md={4} lg={3}>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat='dd/MMM/yyyy'
        showYearDropdown
        customInput={
          <TextField
            type='text'
            id={'date-range-picker'}
            placeholder={'Time Range'}
            label='Time Range'
            variant='outlined'
            size='small'
            sx={{width: 276}}
          />
        }
      />
    </Grid>
  );
};

export default DateRangePicker;
