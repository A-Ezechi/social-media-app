import React from 'react';
import { useState } from 'react';

const FilteredUsers = () => {
    const [search, setSearch]  = useState('');  
    const filteredUsers = users.filter(user => user.name === search.trim());

    if (!filteredUsers){ return null };

    return (
    <div className='filteredResults'>
        {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
                <div key={user.id} className='foundAccounts'>
                    <button className="filteredImage" 
                        style={{backgroundImage: `url(${user.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: '100% 100%'
                        }}
                    ></button>
                    <h2 className='filteredName'>{user.name}</h2>
                </div>
            ))
        ) : (
            <p>No users found</p>
        )}
    </div>
    );
};



export default FilteredUsers;