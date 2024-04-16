import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const ProfileName = () => {
   const [userName, setUserName] = useState('testing');
   const [userIntro, setUserIntro] = useState('testing');

   const fetchProfileName = async () => {
    try {
    const response = await axios.get('/api/data.json');
        setUserName(response.data.users[0].name);
        setUserIntro(response.data.users[0].intro);
    } catch (error) {
       console.error(error);
    }
}
 useEffect(() => {
    fetchProfileName();
}, []);


  return (
    <div className='profileName'>
        {<h1>{userName}</h1>}
        {<p>{userIntro}</p>}
    </div>
  )
}

export default ProfileName;