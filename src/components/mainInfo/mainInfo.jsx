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

  return (
    <div className='mainInfo-card'>
      <div className="mainInfo-perfil">
        <h1 className='mainInfo-welcome'>
          Hi, Amanda!
      </h1>
        <p className='mainInfo-user-tips'>These are the status of your loan. Swipe down to see your installments</p>
      </div>
      <div className='mainInfo-avatar-icon'>
        <img src="https://media.licdn.com/dms/image/C4D03AQHQQMlA1ykTDg/profile-displayphoto-shrink_800_800/0?e=1580342400&v=beta&t=Tge12iJ-Quq6ZonVNDzOdgJjErI4g0mK0YrApjJRXoA" alt="profile-image" />
      </div>
    </div>
  )

}

export default MainInfo