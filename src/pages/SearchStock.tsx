import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import CountrySelector from '../components/CountrySelector';
import ExchangeSelector from '../components/ExchangeSelector';
import SearchButton from '../components/SearchButton';
import StockNameInput from '../components/StockNameInput';
import SymbolInput from '../components/SymbolInput';

const SearchStock = () => {
  return (
    <>
      <Paper sx={{margin: 1, padding: 2}}>
        <Grid container spacing={2} direction='row' justifyContent='space-around' alignItems='center'>
          <StockNameInput />
          <CountrySelector />
          <ExchangeSelector />
          <SymbolInput />
          <SearchButton />
        </Grid>
      </Paper>
    </>
  );
};
export default SearchStock;
