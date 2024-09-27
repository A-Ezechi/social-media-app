import React from 'react'
import Links from './Links'
import Profile from './Profile'
import Accounts from './Accounts'
import SocialFeed from './SocialFeed'

const Content = () => {
  return (
    <div className='Content'>
        <Links />
          <div className="middleContentContainer">
            <Profile />
          
          <div className="innerContent">
            <SocialFeed />
            <Accounts />
          </div>
        </div>
    </div>
  )
}

export default Content