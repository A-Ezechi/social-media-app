import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const UserInformation = () => {
    const [userCity, setUserCity] = useState('')
    const [userCountry, setUserCountry] = useState('')

    const getUserLocation = async () => {
        try {
            const res = await axios.get('https://ipapi.co/json/')
            setUserCity(res.data.city)
            setUserCountry(res.data.country)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>UserInformation

    </div>
  )
}

export default UserInformation