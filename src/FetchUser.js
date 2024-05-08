import React from 'react'
import { useEffect } from 'react'
import { Context } from './Context'

const FetchUser = () => {
    const { currentAccount, userIntro, userCity, userCountry, fetchAccounts } = React.useContext(Context)

    useEffect(() => {
        fetchAccounts()
    }, [])

  return (
    <div className='profile'>
        <h3 className='profileTitle'>{currentAccount}</h3>
        <p>{userIntro}</p>
    <div className='userInformation'>
        {<p>City: {userCity}</p>}
        {<p>Country: {userCountry}</p>}
    </div>
    </div>
  )
}

export default FetchUser