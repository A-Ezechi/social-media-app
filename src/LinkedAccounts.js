import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const LinkedAccounts = () => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [accounts, setAccounts] = useState([])

    const fetchAccounts = async () => {
        try {
          const response = await axios.get('/api/accounts.json');
          const fetchedData = response.data;
      
          if (Array.isArray(fetchedData.linkedAccounts)) {
            setAccounts(fetchedData.linkedAccounts);
          } else {
            console.error('Data fetched is not an array:', fetchedData);
          }
        } catch (error) {
          console.error('Failed to fetch accounts:', error);
        }
      };
      

    const handleAccountChange = (e) => {
        e.preventDefault()
        setCurrentAccount(e.target.value)

        console.log(`Current account: ${currentAccount}`)
    }

    useEffect(() => {
        fetchAccounts()
    }, [])

    useEffect(() => {
        console.log(`Current account: ${currentAccount}`);
      }, [currentAccount]);


  return (
    <div className='linkedAccounts'>
        {accounts.map((account) => (
            <div className='connectedAccounts' key={account.id}>
                <button onClick={handleAccountChange}>{account.name}</button>
            </div>
        
        ))} 
    </div>
  )
}

export default LinkedAccounts