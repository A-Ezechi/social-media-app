import { useState, useEffect } from 'react'
import axios from 'axios'

const Header = () => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState('')

    const searchResults = () => {
      console.log(`Searching for ${search}...`)

      users.filter(user => user.name === search)
            .map((user, index) => (
                <div key={index} className='foundAccounts'>
                        <button className="newPostImage">{user.name}</button>
                        <h2>{user.name}</h2>
                </div>
      ))}

    const SearchFriends = async () => {
        try {
            const results = await axios.get('/api/data.json')
            setUsers(results.data.users)
        } catch (error) {
            console.error(error)
        }}

    useEffect(() => {
        SearchFriends()
    }, []);

  return (
    <div className='headerContainer'>
        <h1 className='headerTitle'>ConnectSocial</h1>

        <form action="">
            <button className='searchButton'
            onClick={(e) => {
                e.preventDefault()
                searchResults()
            }}
            >&#128269;</button>

            <input type="text"
            id='searchText'
            className='searchBox'
            placeholder='Search for Friends'
            value={search}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
            />
        </form>

        <nav className="navigation">
            <a href="">Homepage</a>
            <a href="">Timeline</a>
        </nav>

        <div className="notifications">
            <button className='requests'></button>
            <button className='messages'></button>
            <button className='alerts'></button>
        </div>
    </div>
  )}


export default Header