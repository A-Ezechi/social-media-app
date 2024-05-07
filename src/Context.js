import React from 'react'
import { createContext, useState, useEffect } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [userIntro, setUserIntro] = useState('');
    const [userCity, setUserCity] = useState('')
    const [userCountry, setUserCountry] = useState('')

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

    const handleAccountChange = (e) => {
      e.preventDefault()
      setCurrentAccount(e.target.value)

      console.log(`Current account: ${currentAccount}`)
  }




  useEffect(() => {
      fetchAccounts()
  }, [])



  return (
    <Context.Provider value={{ currentAccount, userIntro, userCity, userCountry }}>
        {children}
    </Context.Provider>
  )
}

export default { ContextProvider, Context }