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
    const products = data[0].map((product: {name: string; symbol: string}) => {
      return {
        label: `${product.name} (${product.symbol})`,
        id: product.symbol,
      };
    });
    setCatalogProducts(products);
  };

  const handleProductChange = (e: SyntheticEvent<Element, Event>, value: null | {label: string; id: string}) => {
    const selectedProduct = value?.id || '';
    setSelectedProduct(selectedProduct);
  };

  return (
    <>
      <Grid item>
        <Autocomplete
          disablePortal
          id='product-autocomplete'
          options={catalogProducts}
          sx={{width: 500}}
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
