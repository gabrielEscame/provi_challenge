import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';

const MainInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('5c923b0932000029056bce39')
      .then(response => setData([response.data]))
      .catch(err => console.log(err)
      )
  }, [])

  return(
    <div className='mainInfo-card'>
      
    </div>
  )

}

export default MainInfo