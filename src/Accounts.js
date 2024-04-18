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
      {accounts.map((account, index) => (
        <div key={index} className='connectedAccounts'>
          <button className="newPostImage">{account.name}</button>
          <h2>{account.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Accounts;