import React, { useState, useEffect } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../services/api';
import Chart from '../Chart/chart';

const Installment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('5c923b0932000029056bce39')
      .then(response => setData([response.data]))
      .catch(err => console.log(err)
      );
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='installments-main-container'>
      <div className="installments-intallment-container">
        <h1 className='installments-title'>Your installments</h1>
        {
          data.map((e) => (
            e.installments.map((e, idx) =>
              <div data-aos='fade-right' key={idx} className='installments-container'>
                <h2 className='installments-number'>{`${idx + 1}ª installment:`}</h2>
                <div className='installments-main-values'>
                  <h2 className='installments-value'><span className='installments-real-sign'>$ </span>{e.formatedValue.split(' ')[1]}</h2>
                  {
                    ! e.payd ? <h3 className='installments-state-green'>Paid!</h3> : <h3 className='installments-state-grey'>Not paid</h3>
                  }
                </div>
                <p className='installments-date'>{e.dueDate}</p>
              </div>
            )
          ))
        }

      </div>
      <div className="installments-charts-container">
        <Chart title='Percentages' value_two={data === [] ? null : data.map(e => e.totalAmountInTaxes)} value_one={data === [] ? null : data.map(e => e.amountTaken)} labels={['Loan', 'Tax']} />
        <Chart title='Total paid' value_one={data.map(e => e.amountPayd)} value_two={data.map(e => (e.amountTaken + e.totalAmountInTaxes) - e.amountPayd)} labels={['payd', 'Remaining']} />
      </div>
    </div>
  );
}

export default Installment;
