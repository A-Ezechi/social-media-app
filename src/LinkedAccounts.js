import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Context } from './Context'

const LinkedAccounts = () => {
    const { accounts, handleAccountChange, fetchAccounts2 } = React.useContext(Context)

    useEffect(() => {
        fetchAccounts2()
    }, [])

  return (
    <div className='linkedAccounts'>
        <h3 className='linkedAccountsHeader'>Linked Accounts</h3>
        {accounts.map((account) => (
            <div className="connectedAccountsOuterContainer1">
                <div className='connectedAccountsContainer1' key={account.id}>
                    <div className="linkedAccountsImg"></div>
                    <button 
                    onClick={handleAccountChange}
                    className='linkedAccountsName'
                    value={account.id}
                    >{account.name}
                    </button>
                </div>
            </div>
        
        ))} 
    </div>
  )
}

export default LinkedAccounts