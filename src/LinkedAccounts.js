import React from 'react'
import { useEffect } from 'react'
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
            <div className="connectedAccountsOuterContainer1" key={account.id}>
              <div className='connectedAccountsContainer1'>
              <div className="linkedAccountsImg" style={{ 
                    backgroundImage: `url(${account.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%'
                    }}>
                </div>
                <button 
                  onClick={() => handleAccountChange(account.id)}
                  className='linkedAccountsName'
                  value={account.id}
                >
                  {account.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      );
      
}

export default LinkedAccounts