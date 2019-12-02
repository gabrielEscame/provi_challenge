import React from 'react'
import './style.css'

const MainInfo = () => {
  return (
    <div className="mainInfo-card">
      <div className="mainInfo-perfil">
        <h1 className="mainInfo-welcome">Hi, Amanda!</h1>
        <p className="mainInfo-user-tips">These are the status of your loan. Swipe down to see your installments</p>
      </div>
      <div className="mainInfo-avatar-icon">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHQQMlA1ykTDg/profile-displayphoto-shrink_800_800/0?e=1580342400&v=beta&t=Tge12iJ-Quq6ZonVNDzOdgJjErI4g0mK0YrApjJRXoA"
          alt="profile"
        />
      </div>
    </div>
  )
}

export default MainInfo
