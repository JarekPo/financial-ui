import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useAtom} from 'jotai';

import {stockSerachParamsAtom} from '../state/store';

const StockNameInput = () => {
  const [stockName, setStockName] = useState('');
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);

  const handleStockNameImput = (e: any) => {
    setStockName(e.target.value);
    setStockSearchParams({
      ...stockSearchParams,
      name: e.target.value,
    });
  };
  return (
    <>
      <Grid item>
        <TextField
          label='Stock Name'
          size='small'
          sx={{width: 300}}
          value={stockName}
          onChange={handleStockNameImput}
          placeholder={'Stock Name'}
        />
      </Grid>
    </>
  );
};

export default StockNameInput;
