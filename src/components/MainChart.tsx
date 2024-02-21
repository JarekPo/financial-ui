import React, {useEffect, useMemo, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

import LinearProgress from '@mui/material/LinearProgress';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from 'chart.js';
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
  BarController
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

  useEffect(() => {
    const fetchHistoricalData = async () => {
      if (endDate && selectedProduct.id) {
        setIsLoading(true);
        const data = await getHistoricalPrices(selectedProduct.id, startDate, endDate);
        setHistoricalData(data);
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
          tension: 0.3,
          label: datasets.length ? `${selectedProduct.label} - ${selectedMetric}` : 'No data',
          data: datasets,
          borderColor: 'rgba(10, 131, 245, 0.8)',
          backgroundColor: 'rgba(39, 131, 245, 0.8)',
        },
      ],
    };
  }, [historicalData, datasets]);

  return (
    <>
      <ChartSettings />
      {isLoading && <LinearProgress />}
      {chartType === ChartType.line && <Line data={chartData} options={chartOptions} style={{maxHeight: '66vh'}} />}
      {chartType === ChartType.bar && <Bar data={chartData} options={chartOptions} style={{maxHeight: '66vh'}} />}
    </>
  );
};

export default MainChart;
