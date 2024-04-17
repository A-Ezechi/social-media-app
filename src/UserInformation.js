import { useState } from 'react'
import React from 'react'
import axios from 'axios'

const UserInformation = () => {
    const [userCity, setUserCity] = useState('')
    const [userCountry, setUserCountry] = useState('')

    const getUserLocation = async () => {
        try {
            const results = await axios.get('/api/data.json')
            setUserCity(results.data.users[0].City)
            setUserCountry(results.data.users[0].Country)
        } catch (error) {
            console.log(error)
        }
    }

    getUserLocation()

  return (
    <div className='userInformation'>
        {<p>City: {userCity}</p>}
        {<p>Country: {userCountry}</p>}
    </div>
  )
}

export default UserInformation