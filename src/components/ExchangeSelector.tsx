import React, {useEffect, useState} from 'react';

import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useAtom} from 'jotai';

import {exchangesAtom, stockSerachParamsAtom} from '../state/store';

const ExchangeSelector = () => {
  const [exchanges, setExchanges] = useAtom(exchangesAtom);
  const [exchange, setExchange] = useState('');
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);

  useEffect(() => {
    setExchange(exchanges[0]);
    setStockSearchParams({
      ...stockSearchParams,
      exchange: exchanges[0],
    });
  }, [exchanges]);

  const handleChangeExchange = (e: {target: {value: string}}) => {
    setExchange(e.target.value);
    setStockSearchParams({
      ...stockSearchParams,
      exchange: e.target.value,
    });
  };

  return (
    <>
      <Grid item>
        <FormControl>
          <InputLabel id='exchange-select-label'>Exchange</InputLabel>
          <Select
            labelId='exchange-selector'
            id='exchange-selector'
            value={exchange}
            label='Exchange'
            onChange={handleChangeExchange}
            size='small'
            sx={{width: 200}}
          >
            {exchanges.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default ExchangeSelector;
