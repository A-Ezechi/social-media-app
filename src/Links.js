import React from 'react'
import LinkedAccounts from './LinkedAccounts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = () => {
    
  return (
    <div className='linksContainer'>
        <nav className="linksNavigation">
            <a href="" className='links'>&#xf09e; Feed</a>
            <a href="" className='links'>&#xf075;Chats</a>
            <a href="" className='links'><FontAwesomeIcon icon="fa-solid fa-user-group" style={{color: "#74C0FC",}} />Groups</a>
            <a href="" className='links'><FontAwesomeIcon icon="fa-solid fa-bookmark" style={{color: "#74C0FC",}} />Saved</a>
            <a href="" className='links'><FontAwesomeIcon icon="fa-solid fa-store" style={{color: "#74C0FC",}} />Store</a>
            <a href="" className='links'><FontAwesomeIcon icon="fa-solid fa-user-doctor" style={{color: "#74C0FC",}} />Jobs</a>
            <a href="" className='links'><FontAwesomeIcon icon="fa-solid fa-champagne-glasses" />Events</a>
            <button className='editButton'><FontAwesomeIcon icon="fa-solid fa-pen-to-square" />Edit</button>
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