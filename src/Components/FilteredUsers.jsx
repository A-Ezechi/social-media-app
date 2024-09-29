import React from 'react';
import { useState, createContext } from 'react';
import { FetchDataContext } from '../API/FetchData';
import { HandleSearch } from './HandleSearch';

export const FilteredDataContext = createContext();

const FilteredUsersProvider = ({ children }) => {
    const [search, setSearch] = useState('');
  
    const FilteredUsers = () => {
      const { users } = React.useContext(FetchDataContext);
      const filteredUsers = users.filter(user => user.name === search.trim());
      
      console.log('filteredUsers', filteredUsers);
  
      return (
        <div className='filteredResults'>
          {
            filteredUsers.map(user => (
              <div key={user.id} className='foundAccounts'>
                <button className="filteredImage" 
                    style={{backgroundImage: `url(${user.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%'
                    }}
                ></button>
                <h2 className='filteredName'>{user.name}</h2>
                <HandleSearch setSearch={setSearch} />
              </div>
            ))
          }
          
          {filteredUsers.length === 0 && <p>No users found</p>}
        </div>
      );
    };
  
    return (
      <FilteredDataContext.Provider value={{ FilteredUsers, search, setSearch }}>
        {children}
      </FilteredDataContext.Provider>
    );
  };
  
  export default FilteredUsersProvider;