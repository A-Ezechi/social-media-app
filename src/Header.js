import React from 'react'

const Header = () => {
  return (
    <div className='headerContainer'>
        <h1 className='headerTitle'>ConnectSocial</h1>

        <form action="">
            <button className='searchButton'>&#128269;</button>

            <input type="text"
            id='searchText'
            className='searchBox'
            placeholder='Search for Friends'
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
  )
}

export default Header