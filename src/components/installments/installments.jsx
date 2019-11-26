import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Chart from '../Chart/chart'
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  
  let chartValue = data.map(e => [e.amountTaken, e.totalAmountInTaxes]);
  return (
    <div className='installments-main-container'>
      <div className="installments-intallment-container">
        <h1 className='installments-title'>Your installments</h1>
        {
          data.map((e) => (
            e.installments.map((e, idx) =>
              <div data-aos='fade-right' key={idx} className={e.payd ? 'installments-container-paid' : 'installments-container'}>
                <h2 className='installments-number'>{`${idx + 1}ª installment:`}</h2>
                <div className='installments-main-values'>
                  <h2 className='installments-value'><span className='installments-real-sign'>$ </span>{e.formatedValue.split(' ')[1]}</h2>
                  {
                    e.payd ? <h3 className='installments-state-green'>Paid!</h3> : <h3 className='installments-state-grey'>Not paid</h3>
                  }
                </div>
                <p className='installments-date'>{e.dueDate}</p>
              </div>
            )
          ))
        }

      </div>
        <Chart title='Percentages' values={chartValue} />
    </div>
  );
}

export default Installment;
