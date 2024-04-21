import React from 'react'
import ProfileName from './ProfileName'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <div className="profileBackground"></div>
      <div className="profileImageContainer">
        <div className="profileImage"></div>
        <ProfileName />    
      </div>
    </div>
  )
}

export default Profile