import {GridColDef} from '@mui/x-data-grid';

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,

      text: 'Price Evolution of Financial Instruments',
      font: {
        size: 13,
      },
    },
  },
};

export const DEFAULT_QUERY = 'aa';
export const METRICS = [
  'open',
  'close',
  'adjClose',
  'high',
  'low',
  'volume',
  'unadjustedVolume',
  'change',
  'changePercent',
  'changeOverTime',
  'vwap',
];

export enum ChartType {
  bar = 'bar',
  line = 'line',
}

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export const stocksTablecolumns: GridColDef[] = [
  {field: 'name', headerName: 'Name', width: 300},
  {field: 'symbol', headerName: 'Symbol', width: 130},
  {field: 'type', headerName: 'Type', width: 130},
  {field: 'currency', headerName: 'Currency', width: 130},
  {field: 'exchange', headerName: 'Exchange', width: 130},
  {field: 'country', headerName: 'Country', width: 130},
];
