import React, {SyntheticEvent, useEffect, useState} from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useAtom} from 'jotai';

import {getCountries} from '../services/FMservices';
import {exchangesAtom, stockSerachParamsAtom} from '../state/store';
import {CountriesData} from '../types/types';

const CountrySelector = () => {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [country, setCountry] = useState<string | null>('');
  const [exchanges, setExchanges] = useAtom(exchangesAtom);
  const [stockSearchParams, setStockSearchParams] = useAtom(stockSerachParamsAtom);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const handleCountryChange = (e: SyntheticEvent<Element, Event>, value: string | null) => {
    setCountry(value);
    setStockSearchParams({
      ...stockSearchParams,
      country: value || '',
      exchange: '',
    });
    const selectedExchange = countries.find((item: CountriesData) => item.country === value);
    if (selectedExchange?.exchange !== undefined) {
      const exchangesList = selectedExchange?.exchange.split(', ');
      setExchanges(exchangesList);
    }
  };
  return (
    <>
      <Grid item>
        <Autocomplete
          disablePortal
          id='country-autocomplete'
          options={countries.map((item: CountriesData) => item.country)}
          value={country}
          sx={{width: 300}}
          onChange={handleCountryChange}
          renderInput={(params) => (
            <TextField {...params} label='Country' size='small' placeholder={'Select Country'} />
          )}
        />
      </Grid>
    </>
  );
};

export default CountrySelector;
