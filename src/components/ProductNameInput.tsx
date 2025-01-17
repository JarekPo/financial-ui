import React, {SyntheticEvent, useEffect, useState} from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useAtom} from 'jotai';

import {DEFAULT_QUERY} from '../constants/constants';
import {getTickerCatalog} from '../services/FMservices';
import {isPageLoadingAtom, productOptionsAtom, selectedProductAtom} from '../state/store';
import CustomSnackbar, {CustomSnackbarProps} from './CustomSnackbar';

const ProductNameInput = () => {
  const [catalogProducts, setCatalogProducts] = useAtom(productOptionsAtom);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);
  const [fetchError, setFetchError] = useState<CustomSnackbarProps>({});
  const [isLoading, setIsLoading] = useAtom(isPageLoadingAtom);

  useEffect(() => {
    fetchCatalogData(DEFAULT_QUERY);
  }, []);

  const fetchCatalogData = async (userInput: string) => {
    setIsLoading(true);
    try {
      const data = await getTickerCatalog(userInput);
      const products = data[0].map(
        (product: {name: string; symbol: string; currency: string; exchangeShortName: string}) => {
          return {
            label: `${product.name} (${product.symbol})`,
            id: product.symbol,
            currency: product.currency,
            stockExchange: product.exchangeShortName,
          };
        }
      );
      setCatalogProducts(products);
      if (!selectedProduct.id) {
        setSelectedProduct(products[0]);
      }
    } catch (error) {
      setFetchError({
        open: true,
        severity: 'error',
        message: 'Failed to fetch countries. Refresh page or try again later.',
      });
    }
    setIsLoading(false);
  };

  const handleProductChange = (
    e: SyntheticEvent<Element, Event>,
    value: null | {label: string; id: string; currency: string; stockExchange: string}
  ) => {
    const selectedProduct = {
      id: value?.id || '',
      label: value?.label || '',
      currency: value?.currency || '',
      stockExchange: value?.stockExchange || '',
    };
    setSelectedProduct(selectedProduct);
  };

  const handleProductSearch = (e: {target: {value: string}}) => {
    if (e.target.value.length >= 2) {
      fetchCatalogData(e.target.value);
    }
  };

  return (
    <>
      <Grid item>
        <Autocomplete
          disablePortal
          id='product-autocomplete'
          options={catalogProducts}
          sx={{width: 300}}
          onChange={handleProductChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search Product'
              size='small'
              onChange={handleProductSearch}
              placeholder={'Search by Symbol'}
            />
          )}
        />
      </Grid>
      {fetchError.open && (
        <CustomSnackbar open={fetchError.open} severity={fetchError.severity} message={fetchError.message} />
      )}
    </>
  );
};

export default ProductNameInput;
