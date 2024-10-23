import React from 'react'
import { useEffect, useContext } from 'react'
import { FetchLinkedAccountsContext } from './API/FetchLinkedAccounts'
import UseHandleAccountChange from './Components/UseHandleAccountChange'

const LinkedAccounts = () => {
    const { accounts, fetchAccounts2 } = useContext(FetchLinkedAccountsContext)
    const { handleAccountChange } = UseHandleAccountChange()

    useEffect(() => {
        fetchAccounts2()
    }, [])

    return (
        <div className='linkedAccounts'>
          <h3 className='linkedAccountsHeader'>Linked Accounts</h3>
          {accounts.map((account) => (
            <div className="connectedAccountsOuterContainer1" key={account.id}>
              <div className='connectedAccountsContainer1'>
              <div className="linkedAccountsImg" style={{ 
                    backgroundImage: `url(${account.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%'
                    }}>
                </div>
                <button 
                    className='linkedAccountsName'
                    value={account.id}
                    onClick={() => handleAccountChange(account.id)}
                  >{account.name}
                  </button>
              </div>
            </div>
          ))}     
        </div>
      );
      
}

export default LinkedAccounts