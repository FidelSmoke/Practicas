import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

export default function Graficas({ tipo, data, options }) {

  if (tipo === 'doughnut') {
    return <Doughnut data={data} options={options} height={550} />;
  } else if (tipo === 'line') {
    return <Line data={data} options={options} height={80} />;
  } else if (tipo === 'bar') {
    return <Bar data={data} options={options} height={80} />;
  } else if (tipo === 'bar') {
    return <Bar data={data} options={options} height={80} />;
  } else if (tipo === 'bar') {
    return <Bar data={data} options={options} height={80} />;
  }
  return null;
}