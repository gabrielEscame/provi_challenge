import React, { useState, useEffect} from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import './style.css'

const Chart = ({ values, title }) => {
  const [chartData, setChartData] = useState({});
  console.log(values);
  useEffect(()=> {
    setChartData({
      labels: ['Loan', 'Tax'],
      datasets:
        [{
          data: values,
          backgroundColor: ['#d2ff2f', '#89CC25'],
          borderColor: 'transparent',
          defaultFontSize: 40
        }]
    })
  }, [values])

  defaults.global.animation.duration = 1200;
  return (
    <div className="chart-container">
        <h2>{title}</h2>
    <div className="chart">
      <Doughnut height={200} data={chartData}
        options={{
          responsive: true,
          legend: {
            position: 'top',
            labels: {
              fontSize: 16,
              fontFamily: 'Poppins',
            },
            animation: {
              duration: 10000
            }
          },
          plugins: {
            datalabels: {
              formatter: (value) => {
                return Math.round((value * 100) / values.reduce((acc, cur) => acc + cur)) + '%'
              }
            }
          }
        }} />
    </div>
    </div>
  )
}

export default Chart