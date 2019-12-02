import React, { useState, useEffect } from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import './style.css'

const Chart = ({ value_one, value_two, title, labels }) => {
  const [chartData, setChartData] = useState({})
  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          data: [value_one, value_two],
          backgroundColor: ['#4bb1c9', '#993cb1'],
          borderColor: 'transparent',
          defaultFontSize: 40
        }
      ]
    })
  }, [value_one, value_two])

  defaults.global.animation.duration = 1200
  return (
    <div className="chart-container">
      <h2>{title}</h2>
      <div className="chart">
        <Doughnut
          height={200}
          data={chartData}
          options={{
            responsive: true,
            legend: {
              position: 'top',
              labels: {
                fontSize: 16,
                fontFamily: 'Poppins'
              },
              animation: {
                duration: 10000
              }
            },
            plugins: {
              datalabels: {
                formatter: value => {
                  let total = parseInt(value_one) + parseInt(value_two)
                  return Math.round((value * 100) / total) + '%'
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default Chart
