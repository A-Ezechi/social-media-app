import React from 'react'
import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const Context = createContext()

const ContextProvider = ({}) => {

// Holds the current user account state

    const [currentAccount, setCurrentAccount] = useState('')
    const [userIntro, setUserIntro] = useState('');
    const [userCity, setUserCity] = useState('')
    const [userCountry, setUserCountry] = useState('')

// Used to Fetch the user account data

    const fetchAccounts = async () => {
      try {
          const response = await axios.get('/api/accounts.json');
          const fetchedData = response.data.linkedAccounts[0];
          setCurrentAccount(fetchedData.name);
          setUserIntro(fetchedData.intro);
          setUserCity(fetchedData.City);
          setUserCountry(fetchedData.Country);
      } catch (error) {
          console.error('Failed to fetch account:', error);
      }
    }

// Used to handle the account change

    const handleAccountChange = (e) => {
      e.preventDefault()
      setCurrentAccount(e.target.value)
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
        handleAccountChange,
        fetchAccounts 
      }}>
        {}
    </Context.Provider>
  )
}

export { ContextProvider, Context }