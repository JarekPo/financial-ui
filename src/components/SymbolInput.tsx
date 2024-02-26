import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const SymbolInput = () => {
  const [symbol, setSymbol] = useState('');
  return (
    <>
      <Grid item>
        <TextField
          label='Symbol'
          size='small'
          sx={{width: 200}}
          value={symbol}
          onChange={(e) => {
            setSymbol(e.target.value);
          }}
          placeholder={'Symbol'}
        />
      </Grid>
    </>
  );
};

export default SymbolInput;
