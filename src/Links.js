import React from 'react'
import LinkedAccounts from './LinkedAccounts'

const Links = () => {
    
  return (
    <div className='linksContainer'>
        <nav className="linksNavigation">
            <a href="" className='links'>&#xf09e; Feed</a>
            <a href="" className='links'>&#xf075;Chats</a>
            <a href="" className='links'>Groups</a>
            <a href="" className='links'>Saved</a>
            <a href="" className='links'>Store</a>
            <a href="" className='links'>Jobs</a>
            <a href="" className='links'>Events</a>
            <button className='editButton'>Edit</button>
        </nav>

        <div className="linksLine"></div>
        <LinkedAccounts />
    </div>

// Could possibly look into adding code to the edit buton so once clicked it will allow you to choose the links you want to remove.
// This will need to be done by adding id's to the links and then removing them from the array of links.
// NOT IMPORTANT FOR NOW
  )
}

export default Links