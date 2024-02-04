import React, {SyntheticEvent, useEffect} from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useAtom} from 'jotai';

import {DEFAULT_QUERY} from '../constants/constants';
import {getTickerCatalog} from '../services/FMservices';
import {productOptionsAtom, selectedProductAtom} from '../state/store';

const ProductNameInput = () => {
  const [catalogProducts, setCatalogProducts] = useAtom(productOptionsAtom);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);

  useEffect(() => {
    fetchCatalogData(DEFAULT_QUERY);
  }, []);

  const fetchCatalogData = async (userInput: string) => {
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

  return (
    <>
      <Grid item>
        <Autocomplete
          disablePortal
          id='product-autocomplete'
          options={catalogProducts}
          sx={{width: 380}}
          onChange={handleProductChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Product'
              size='small'
              onChange={(e) => fetchCatalogData(e.target.value)}
              placeholder={'Search by Symbol'}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default ProductNameInput;
