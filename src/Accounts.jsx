import { useContext } from 'react';
import { FetchDataContext } from './API/FetchData';

const Accounts = () => {
  const { users } = useContext(FetchDataContext);

  return (
    <div className='connectedAccountsContainer'>
        <h2 className='accountsHeader'>Online Friends</h2>
        {users.map((account, index) => (
        <div key={index} className='connectedAccounts'>
        <div className="innerAccountsContainer">
            <button className="newPostImage" 

            style={{
              backgroundImage: `url(${account.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            
            ></button>
            <h2>{account.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accounts;


// CHANGE THIS TO ONLINE FRIENDS RATHER THAN LOGGED ACCOUNTS