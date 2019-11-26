import React from 'react';
import './style.css';
import Installment from './components/installments/installments';
import MainInfo from './components/mainInfo/mainInfo';

const App = () => {
  return(
    <div className='container'>
      
      <MainInfo />
      <Installment/>  
    </div>
  );
}

export default App;
