import React from 'react'
import ProfileName from './ProfileName'
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
        <ProfileName />    
      </div>
    </div>
  )
}

export default Profile