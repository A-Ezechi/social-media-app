import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchUser = () => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [userIntro, setUserIntro] = useState('testing');
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

    useEffect(() => {
        fetchAccounts()
    }, [])

  return (
    <div className='profileTitle'>
        <h3>{currentAccount}</h3>
        <p>{userIntro}</p>
        <div className='userInformation'>
        {<p>City: {userCity}</p>}
        {<p>Country: {userCountry}</p>}
    </div>
    </div>
  )
}

export default FetchUser