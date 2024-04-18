import React from 'react'
import ProfileName from './ProfileName'
import SocialFeed from './SocialFeed'
import Accounts from './Accounts'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <div className="profileBackground"></div>
      <div className="profileImageContainer">
        <div className="profileImage"></div>
        <ProfileName />    
      </div>
      <SocialFeed />
      <Accounts />
    </div>
  )
}

export default Profile