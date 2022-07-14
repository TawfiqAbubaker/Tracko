import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weight progression',
    },
  },
};

export function LineChart(props) {
  const {workoutsData} = props;
  const labels = workoutsData.map((workout) => {
      var options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
      };
      return workout[0].Date.toLocaleDateString("en-US", options);
  });
  const data = {
    labels,
    datasets: [
      {
        label: 'Weight progression',
        data: workoutsData.map((workout) => {
          return workout[0].Weight;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data}/>;
}
