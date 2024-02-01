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

import {getHistoricalPrices} from '../services/FMservices';
import {endDateAtom, selectedProductAtom, startDateAtom} from '../state/store';
import {HistoricalData} from '../types/types';

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

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Financial Data',
    },
  },
};

const MainChart = () => {
  const [historicalData, setHistoricalData] = useState<HistoricalData>({
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
  const [datasets, setDatasets] = useState<Record<string, string | number>[]>([]);
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      if (endDate) {
        const data = await getHistoricalPrices(selectedProduct, startDate, endDate);
        setHistoricalData(data);
      }
    };
    fetchHistoricalData();
  }, [endDate, selectedProduct]);

  useEffect(() => {
    createDatasets();
  }, [historicalData]);

  const createDatasets = () => {
    if (historicalData.symbol?.length > 0) {
      const dataset = historicalData.historical.map((set: {date: string; open: number}) => {
        return {x: set.date, y: set.open};
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
        label: `${historicalData.symbol} Open`,
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
