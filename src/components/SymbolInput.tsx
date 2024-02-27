import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useAtom} from 'jotai';

import {stockSerachParamsAtom} from '../state/store';

const SymbolInput = () => {
  const [symbol, setSymbol] = useState('');
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);

  const handleSymbolImput = (e: any) => {
    setSymbol(e.target.value);
    setStockSearchParams({
      ...stockSearchParams,
      symbol: e.target.value,
    });
  };
  return (
    <>
      <Grid item>
        <TextField
          label='Symbol'
          size='small'
          sx={{width: 200}}
          value={symbol}
          onChange={handleSymbolImput}
          placeholder={'Symbol'}
        />
      </Grid>
    </>
  );
};

export default SymbolInput;
