import React from 'react';
import {Line} from 'react-chartjs-2';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const chartData = {
  labels,
  datasets: [
    {
      tension: 0.3,
      label: 'Dataset 1',
      data: [
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 4},
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 4},
      ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      tension: 0.3,
      label: 'Dataset 2',
      data: [
        {x: 3, y: 4},
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 4},
        {x: 1, y: 2},
        {x: 2, y: 3},
      ],
      borderColor: 'rgb(0, 99, 132)',
      backgroundColor: 'rgba(0, 99, 132, 0.5)',
    },
  ],
};
console.log(chartData);
const MainChart = () => {
  return (
    <>
      <Line data={chartData} options={chartOptions} style={{maxHeight: '80vh'}} />
    </>
  );
};

export default MainChart;
