import React from 'react'
import { useContext } from 'react'
import { FetchDataContext } from './API/FetchData'
import UseHandleAccountChange from './Components/UseHandleAccountChange'

const LinkedAccounts = () => {
    const { users } = useContext(FetchDataContext)
    const { handleAccountChange } = UseHandleAccountChange()

    return (
        <div className='linkedAccounts'>
          <h3 className='linkedAccountsHeader'>Linked Accounts</h3>
          {users.map((account) => 
          account.LinkedAccount == 1 ?
          (
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
          ) : null)}     
        </div>
      );
      
}

export default LinkedAccounts