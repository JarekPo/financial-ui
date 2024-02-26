import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const StockNameInput = () => {
  const [stockName, setStockName] = useState('');
  return (
    <>
      <Grid item>
        <TextField
          label='Stock Name'
          size='small'
          sx={{width: 300}}
          value={stockName}
          onChange={(e) => {
            setStockName(e.target.value);
          }}
          placeholder={'Stock Name'}
        />
      </Grid>
    </>
  );
};

export default StockNameInput;
