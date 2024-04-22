import { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

// Fetches the users from the API

    const fetchUsers = async () => {
        try {
            const results = await axios.get('/api/data.json');
            setUsers(results.data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

// Searches for the users in the API and returns nothing if the search is empty

    const searchResults = () => {
        console.log(`Searching for ${search}...`);
        if (!search.trim()) {
            return null;
        }

// Filters the users based on the search input and returns the users that match the search

        const filteredUsers = users.filter(user => user.name === search.trim());
        return (
            <div className='filteredResults'>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <div key={user.id} className='foundAccounts'>
                            <button className="filteredImage">{user.name}</button>
                            <h2 className='filteredName'>{user.name}</h2>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        );
    };

// Fetches the users when the page loads

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='headerContainer'>
            <h1 className='headerTitle'>ConnectSocial</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <button
                    className='searchButton'
                    onClick={() => {
                        fetchUsers();
                        searchResults();
                    }}
                >
                    &#128269;
                </button>
                <input
                    type="text"
                    id='searchText'
                    className='searchBox'
                    placeholder='Search for Friends'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <nav className="navigation">
                <a href="">Homepage</a>
                <a href="">Timeline</a>
            </nav>
            <div className="notifications">
                <button className='requests'></button>
                <button className='messages'></button>
                <button className='alerts'></button>
            </div>
            {searchResults()}
        </div>
    );
};

export default Header;
