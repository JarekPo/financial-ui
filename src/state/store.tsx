import subMonths from 'date-fns/subMonths';
import {atom} from 'jotai';

export const startDateAtom = atom(subMonths(new Date(), 3));
export const endDateAtom = atom(new Date());
export const productOptionsAtom = atom([]);
export const selectedProductAtom = atom('AAPL');
