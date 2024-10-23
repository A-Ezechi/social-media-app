import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const FetchDataContext = createContext();

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const DATA_API = '/api/data.json';

    const fetchData = async () => {
        try {
            const results = await axios.get(DATA_API);
            if (!results) {
                window.alert('No results');
            }
            setUsers(results.data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <FetchDataContext.Provider value={{ users, setUsers, fetchData }}>
            {children}
        </FetchDataContext.Provider>
    );
}

export default UsersProvider;