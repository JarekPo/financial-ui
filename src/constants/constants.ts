export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Financial Instruments Analysis',
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
