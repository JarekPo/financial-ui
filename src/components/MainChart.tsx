import React, {useEffect, useMemo, useState} from 'react';
import {Bar, Line, Scatter} from 'react-chartjs-2';

import LinearProgress from '@mui/material/LinearProgress';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from 'chart.js';
import gradient from 'chartjs-plugin-gradient';
import {useAtom} from 'jotai';

import {chartOptions, ChartType} from '../constants/constants';
import {getHistoricalPrices} from '../services/FMservices';
import {
  chartTypeAtom,
  endDateAtom,
  historicalDataAtom,
  selectedMetricAtom,
  selectedProductAtom,
  startDateAtom,
} from '../state/store';
import {DatasetMetrics, ProductMetric} from '../types/types';
import ChartSettings from './ChartSettings';
import CustomSnackbar, {CustomSnackbarProps} from './CustomSnackbar';

import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale,
  BarElement,
  BarController,
  Filler,
  gradient
);

const MainChart = () => {
  const [historicalData, setHistoricalData] = useAtom(historicalDataAtom);
  const [datasets, setDatasets] = useState<Record<string, string | number>[]>([]);
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);
  const [selectedMetric, setSelectedMetric] = useAtom(selectedMetricAtom);
  const [chartType, setChartType] = useAtom(chartTypeAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<CustomSnackbarProps>({});

  useEffect(() => {
    setFetchError({});
    const fetchHistoricalData = async () => {
      if (endDate && selectedProduct.id) {
        setIsLoading(true);
        try {
          const data = await getHistoricalPrices(selectedProduct.id, startDate, endDate);
          setHistoricalData(data);
          if (Object.keys(data).length === 0) {
            setFetchError({
              open: true,
              severity: 'info',
              message: 'No data available for the selected instrument.',
            });
          }
        } catch (error) {
          setFetchError({
            open: true,
            severity: 'error',
            message: 'Failed to fetch historical data. Refresh page or try again later.',
          });
        }
        setIsLoading(false);
      }
    };
    fetchHistoricalData();
  }, [endDate, selectedProduct]);

  useEffect(() => {
    createDatasets();
  }, [historicalData, selectedMetric]);

  const createDatasets = () => {
    if (historicalData.symbol?.length > 0) {
      const dataset = historicalData.historical.map((set: DatasetMetrics) => {
        return {x: set.date, y: set[selectedMetric as ProductMetric]};
      });

      dataset.sort((a, b) => {
        const dateA = new Date(a.x).getTime();
        const dateB = new Date(b.x).getTime();
        return dateA - dateB;
      });

      setDatasets(dataset);
    } else {
      setDatasets([]);
    }
  };

  const chartData = useMemo(() => {
    return {
      datasets: [
        {
          fill: chartType === ChartType.area ? true : false,
          tension: chartType === ChartType.area ? 0 : 0.3,
          label: datasets.length ? `${selectedProduct.label} - ${selectedMetric}` : 'No data',
          data: datasets,
          borderColor: 'rgba(10, 131, 245, 0.8)',
          backgroundColor: 'rgba(39, 131, 245, 0.5)',
          gradient: {
            backgroundColor: {
              axis: 'y',
              colors: {
                0: 'rgba(204, 228, 255, 0.5)',
                100: 'rgba(39, 131, 245, 0.5)',
              },
            } as const,
          },
        },
      ],
    };
  }, [historicalData, datasets, chartType]);

  return (
    <>
      <ChartSettings />
      {isLoading && <LinearProgress />}
      {(chartType === ChartType.line || chartType === ChartType.area) && (
        <Line data={chartData} options={chartOptions} style={{maxHeight: '66vh'}} />
      )}
      {chartType === ChartType.bar && <Bar data={chartData} options={chartOptions} style={{maxHeight: '66vh'}} />}
      {chartType === ChartType.scatter && (
        <Scatter data={chartData} options={chartOptions} style={{maxHeight: '66vh'}} />
      )}
      {fetchError.open && (
        <CustomSnackbar open={fetchError.open} severity={fetchError.severity} message={fetchError.message} />
      )}
    </>
  );
};

export default MainChart;
