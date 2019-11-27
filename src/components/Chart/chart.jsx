import React, { useState, useEffect} from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import './style.css'

const Chart = ({ tax, loan, title }) => {
  const [chartData, setChartData] = useState({});
  useEffect(()=> {
    setChartData({
      labels: ['Loan', 'Tax'],
      datasets:
        [{
          data: [loan, tax],
          backgroundColor: ['#d2ff2f', '#89CC25'],
          borderColor: 'transparent',
          defaultFontSize: 40
        }]
    })
  }, [loan, tax])
  
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
                let total = parseInt(tax) + parseInt(loan);
                return Math.round((value * 100) / total) + '%'
              }
            }
          }
        }} />
    </div>
    </div>
  )
}

export default Chart