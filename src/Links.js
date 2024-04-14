import React from 'react'

const Links = () => {
    
  return (
    <div className='linksContainer'>
        <nav className="linksNavigation">
            <a href="">&#xf09e; Feed</a>
            <a href="">&#xf075;Chats</a>
            <a href="">Groups</a>
            <a href="">Saved</a>
            <a href="">Store</a>
            <a href="">Jobs</a>
            <a href="">Events</a>
            <button className='editButton'>Edit</button>
        </nav>

        <div className="linksLine"></div>
    </div>
  )
}

export default Links