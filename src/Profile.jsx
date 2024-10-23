import React from 'react'
import FetchUser from './FetchUser'
import { Context } from './Context'

const Profile = () => {
  const {userImage} = React.useContext(Context)

  return (
    <div className='profileContainer'>
      <div className="profileBackground"></div>
      <div className="profileImageContainer">
        <div className="profileImage" 
          style={{ 
            backgroundImage: `url(${userImage})`,
            backgroundPosition: 'center',
            backgroundSize: '100% 100%'
            }}
        ></div>
        <div className='profileName'>
          <FetchUser />
        </div>  
      </div>
    </div>
  )
}

export default Profile