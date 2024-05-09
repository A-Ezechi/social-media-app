import React from 'react'
import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {

// Holds the current user account state

    const [currentAccount, setCurrentAccount] = useState('')
    const [userIntro, setUserIntro] = useState('');
    const [userCity, setUserCity] = useState('')
    const [userCountry, setUserCountry] = useState('')
    const [accounts, setAccounts] = useState([])
    const [currentAccountId, setCurrentAccountId] = useState(null);

// Used to Fetch the user account data

    const fetchAccounts = async () => {
      try {
          const response = await axios.get('/api/accounts.json');
          const fetchedData = response.data.linkedAccounts[0];
          setCurrentAccountId(fetchedData);
          setCurrentAccount(fetchedData.name);
          setUserIntro(fetchedData.intro);
          setUserCity(fetchedData.City);
          setUserCountry(fetchedData.Country);
      } catch (error) {
          console.error('Failed to fetch account:', error);
      }
    }

// Used to fetch the linked accounts data

    const fetchAccounts2 = async () => {
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

// Used to handle the account change

    const handleAccountChange = (accountId) => {
      const selectedAccount = accounts.find(account => account.id === accountId);
      setCurrentAccount(selectedAccount.name);
      setUserIntro(selectedAccount.intro);
      setUserCity(selectedAccount.City);
      setUserCountry(selectedAccount.Country);
      
      console.log(`Current account: ${currentAccount}`)
  }

// Allows the function to run on page load

  useEffect(() => {
      fetchAccounts()
  }, [])



  return (
    <Context.Provider 
      value = {{ 
        currentAccount, 
        userIntro, 
        userCity, 
        userCountry,
        accounts, 
        handleAccountChange,
        fetchAccounts,
        fetchAccounts2,
        currentAccountId
      }}>
        {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }


// Step 1: Store value of the current accountID in a state variable that can be changed on command with the handleAccountChange function.
// Step 2: Make the userProfile component update based on the current accountID, displaying the linked name, intro, city, and country.
// Step 3: Do the same for the SocialFeed component so you can post from different accounts.