import React from 'react';
import LinkedAccounts from './LinkedAccounts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBookmark, faStore, faUserDoctor, faChampagneGlasses, faPenToSquare, faTableList, faComments } from '@fortawesome/free-solid-svg-icons';

const Links = () => {
  return (
    <div className='linksContainer'>
      <nav className="linksNavigation">
        <a href="" className='links'><FontAwesomeIcon icon={faTableList} /> Feed</a>
        <a href="" className='links'><FontAwesomeIcon icon={faComments} /> Chats</a>
        <a href="" className='links'><FontAwesomeIcon icon={faUserGroup} /> Groups</a>
        <a href="" className='links'><FontAwesomeIcon icon={faBookmark} /> Saved</a>
        <a href="" className='links'><FontAwesomeIcon icon={faStore} /> Store</a>
        <a href="" className='links'><FontAwesomeIcon icon={faUserDoctor} /> Jobs</a>
        <a href="" className='links'><FontAwesomeIcon icon={faChampagneGlasses} /> Events</a>
        <button className='editButton'><FontAwesomeIcon icon={faPenToSquare} /> Edit</button>
      </nav>
      <div className="linksLine"></div>
      <LinkedAccounts />
    </div>
  );
}

export default Links;


// Could possibly look into adding code to the edit buton so once clicked it will allow you to choose the links you want to remove.
// This will need to be done by adding id's to the links and then removing them from the array of links.
// NOT IMPORTANT FOR NOW