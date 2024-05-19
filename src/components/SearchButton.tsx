import React, {useState} from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import {useAtom} from 'jotai';

import {getStockSearchResults} from '../services/FMservices';
import {stocksDataAtom, stockSerachParamsAtom} from '../state/store';
import CustomSnackbar, {CustomSnackbarProps} from './CustomSnackbar';

const SearchButton = () => {
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);
  const [stocksData, setStocksData] = useAtom(stocksDataAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<CustomSnackbarProps>({});

  const handleSearchClick = async () => {
    setIsLoading(true);
    try {
      const response = await getStockSearchResults(
        stockSearchParams.country,
        stockSearchParams.exchange,
        stockSearchParams.symbol,
        stockSearchParams.name
      );
      setStocksData(response);
    } catch (error) {
      setFetchError({
        open: true,
        severity: 'error',
        message: 'Failed to fetch results. Refresh page or try again later.',
      });
    }

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
      {fetchError.open && (
        <CustomSnackbar open={fetchError.open} severity={fetchError.severity} message={fetchError.message} />
      )}
    </>
  );
};

export default SearchButton;
