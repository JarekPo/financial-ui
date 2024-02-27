import subMonths from 'date-fns/subMonths';
import {atom} from 'jotai';

import {Theme} from '../constants/constants';

export const startDateAtom = atom(subMonths(new Date(), 3));
export const endDateAtom = atom(new Date());
export const productOptionsAtom = atom([]);
export const selectedProductAtom = atom({
  id: '',
  label: '',
  currency: '',
  stockExchange: '',
});
export const selectedMetricAtom = atom('close');
export const historicalDataAtom = atom({
  symbol: '',
  historical: [
    {
      adjClose: 0,
      change: 0,
      changeOverTime: 0,
      changePercent: 0,
      close: 0,
      date: '',
      high: 0,
      label: '',
      low: 0,
      open: 0,
      unadjustedVolume: 0,
      volume: 0,
      vwap: 0,
    },
  ],
});
export const chartTypeAtom = atom('line');
export const themeAtom = atom(localStorage.getItem('theme') === Theme.dark ? Theme.dark : Theme.light);
export const exchangesAtom = atom(['']);
export const stockSerachParamsAtom = atom({
  country: '',
  exchange: '',
  symbol: '',
  name: '',
});
