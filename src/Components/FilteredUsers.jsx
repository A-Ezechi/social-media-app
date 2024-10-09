import React, { useState, useContext } from 'react';
import { FetchDataContext } from '../API/FetchData';

const FilteredUsers = () => {
  const [search, setSearch] = useState('');
  const { users } = useContext(FetchDataContext);

  if (!users) return <p>Loading...</p>;

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase().trim()));

  return (
    <div className="userForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="searchText"
          className="searchBox"
          placeholder="Search for Friends"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {search.length > 0 && (
        <div className="filteredResults">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div key={user.id} className="foundAccounts">
                <button className="filteredImage" 
                    style={{backgroundImage: `url(${user.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%'
                    }}
                />
                <h2 className="filteredName">{user.name}</h2>
              </div>
            ))
          ) : (
            <p>No friends found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilteredUsers;