import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('/api/data.json');
      setAccounts(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className='connectedAccountsContainer'>
        <h2 className='accountsHeader'>Online Friends</h2>
      {accounts.map((account, index) => (
        <div key={index} className='connectedAccounts'>
        <div className="innerAccountsContainer">
            <button className="newPostImage" 

            style={{
              backgroundImage: `url(${account.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            
            ></button>
            <h2>{account.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accounts;


// CHANGE THIS TO ONLINE FRIENDS RATHER THAN LOGGED ACCOUNTS