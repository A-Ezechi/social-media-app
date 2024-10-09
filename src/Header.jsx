import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments, faPerson } from '@fortawesome/free-solid-svg-icons';
import FilteredUsers from './Components/FilteredUsers';
import { FetchDataContext } from './API/FetchData';


const Header = ({search}) => {

    const { users, fetchData } = React.useContext(FetchDataContext);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='headerContainer'>
            <h1 className='headerTitle'>ConnectSocial</h1>

           <FilteredUsers search={search} users={users} />

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
