import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const LinkedAccounts = () => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [accounts, setAccounts] = useState([])

    const fetchAccounts = async () => {
        try {
            const accountsList = await axios.get('/api/accounts.json')
            setAccounts(accountsList.data)
        } catch (error) {
            console.log(`Failed to fetch accounts: ${error}`)
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