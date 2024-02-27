import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {useAtom} from 'jotai';

import {getStockSearchResults} from '../services/FMservices';
import {stockSerachParamsAtom} from '../state/store';

const SearchButton = () => {
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);

  const handleSearchClick = async () => {
    const responce = await getStockSearchResults(
      stockSearchParams.country,
      stockSearchParams.exchange,
      stockSearchParams.symbol,
      stockSearchParams.name
    );
  };
  return (
    <>
      <Grid item>
        <Button variant='contained' endIcon={<SearchIcon />} onClick={handleSearchClick}>
          Search
        </Button>
      </Grid>
    </>
  );
};

export default SearchButton;
