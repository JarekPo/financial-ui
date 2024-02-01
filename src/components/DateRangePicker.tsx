import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePicker {
  startDate: Date;
  endDate: Date;
}
const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Grid item>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        customInput={
          <TextField
            type='text'
            id={'date-range-picker'}
            placeholder={'Time Range'}
            label='Time Range'
            variant='outlined'
            size='small'
          />
        }
      />
    </Grid>
  );
};

export default DateRangePicker;
