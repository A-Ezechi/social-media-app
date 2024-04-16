import React from 'react'
import ProfileName from './ProfileName'
import SocialFeed from './SocialFeed'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <div className="profileBackground"></div>
      <div className="profileImageContainer">
        <div className="profileImage"></div>
        <ProfileName />    
      </div>
      <SocialFeed />
    </div>
  )
}

export default Profile