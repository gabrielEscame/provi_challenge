import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos.css'
import api from '../../services/api'
import Chart from '../Chart'
import './style.css'

const Installment = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('5c923b0932000029056bce39')
      .then(response => setData([response.data]))
      .catch(err => console.log(err))
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className="installments-main-container">
      <div className="installments-section-container">
        <h1 className="installments-title">Your installments</h1>
        {data.map(item =>
          item.installments.map((subItem, idx) => (
            <div data-aos="fade-right" key={idx} className="installments-container">
              <h2 className="installments-number">{`${idx + 1}ª installment:`}</h2>
              <div className="installments-main-values">
                <h2 className="installments-value">
                  <span className="installments-real-sign">$ </span>
                  {subItem.formatedValue.split(' ')[1]}
                </h2>
                {subItem.payd ? (
                  <h3 className="installments-state-green">Paid!</h3>
                ) : (
                  <h3 className="installments-state-grey">Not paid</h3>
                )}
              </div>
              <p className="installments-date">{subItem.dueDate}</p>
            </div>
          ))
        )}
      </div>
      <div className="installments-charts-container">
        <Chart
          title="Percentages"
          value_two={data.map(item => item.totalAmountInTaxes)}
          value_one={data.map(item => item.amountTaken)}
          labels={['Loan', 'Tax']}
        />
        <Chart
          title="Total paid"
          value_one={data.map(item => item.amountPayd)}
          value_two={data.map(item => item.amountTaken + item.totalAmountInTaxes - item.amountPayd)}
          labels={['payd', 'Remaining']}
        />
      </div>
    </div>
  )
}

export default Installment
