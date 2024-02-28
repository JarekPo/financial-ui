import React, {useState} from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import {useAtom} from 'jotai';

import {getStockSearchResults} from '../services/FMservices';
import {stocksDataAtom, stockSerachParamsAtom} from '../state/store';

const SearchButton = () => {
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);
  const [stocksData, setStocksData] = useAtom(stocksDataAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchClick = async () => {
    setIsLoading(true);
    const response = await getStockSearchResults(
      stockSearchParams.country,
      stockSearchParams.exchange,
      stockSearchParams.symbol,
      stockSearchParams.name
    );
    setStocksData(response);
    setIsLoading(false);
  };
  return (
    <>
      <Grid item>
        <Button
          variant='contained'
          endIcon={!isLoading ? <SearchIcon /> : <CircularProgress size={20} color={'inherit'} />}
          onClick={handleSearchClick}
          disabled={isLoading}
        >
          Search
        </Button>
      </Grid>
    </>
  );
};

export default SearchButton;
