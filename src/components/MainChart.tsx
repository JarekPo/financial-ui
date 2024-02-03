import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

import {
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

import {chartOptions} from '../constants/constants';
import {getHistoricalPrices} from '../services/FMservices';
import {endDateAtom, historicalDataAtom, selectedMetricAtom, selectedProductAtom, startDateAtom} from '../state/store';
import {DatasetMetrics, ProductMetric} from '../types/types';

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
  TimeSeriesScale
);

const MainChart = () => {
  const [historicalData, setHistoricalData] = useAtom(historicalDataAtom);
  const [datasets, setDatasets] = useState<Record<string, string | number>[]>([]);
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);
  const [selectedMetric, setSelectedMetric] = useAtom(selectedMetricAtom);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      if (endDate) {
        const data = await getHistoricalPrices(selectedProduct.id, startDate, endDate);
        setHistoricalData(data);
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

  const chartData = {
    // labels,
    datasets: [
      {
        tension: 0.3,
        label: datasets.length ? `${historicalData.symbol} ${selectedMetric}` : 'No data',
        data: datasets,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(200, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <Line data={chartData} options={chartOptions} style={{maxHeight: '80vh'}} />
    </>
  );
};

export default MainChart;
