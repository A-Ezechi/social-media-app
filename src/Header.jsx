import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments, faPerson } from '@fortawesome/free-solid-svg-icons';
import { HandleSearch } from './Components/HandleSearch';


const Header = () => {


    return (
        <div className='headerContainer'>
            <h1 className='headerTitle'>ConnectSocial</h1>
            <HandleSearch/>
            <nav className="navigation">
                <a href="">Homepage</a>
                <a href="">Timeline</a>
            </nav>
            <div className="notifications">
                <button className='requests'><FontAwesomeIcon icon={faPerson}/></button>
                <button className='messages'><FontAwesomeIcon icon={faComments} /></button>
                <button className='alerts'><FontAwesomeIcon icon={faBell} /></button>
            </div>
        </div>
    );
}


export default Header;
