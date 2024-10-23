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
    const [currentAccountId, setCurrentAccountId] = useState({});
    const [userImage, setUserImage] = useState('')

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
          setUserImage(fetchedData.image);
      } catch (error) {
          console.error('Failed to fetch account:', error);
      }
    }
// Used to handle the account change

    const handleAccountChange = (accountId) => {
      const selectedAccount = accounts.find(account => account.id === accountId);
      setCurrentAccount(selectedAccount.name);
      setUserIntro(selectedAccount.intro);
      setUserCity(selectedAccount.City);
      setUserCountry(selectedAccount.Country);
      setUserImage(selectedAccount.image);
      
      if (currentAccount === selectedAccount.name) {
        console.log(`Current account: ${currentAccount}`)
      } else {
        console.error('Failed to change account:', selectedAccount);
      } 
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
        currentAccountId,
        userImage
      }}>
        {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }