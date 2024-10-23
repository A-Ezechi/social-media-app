import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const FetchLinkedAccountsContext = createContext()

const FetchLinkedAccountsProvider = ({children}) => {
  const [accounts, setAccounts] = useState([])
  const API_CALL = '/api/accounts.json'

  const fetchAccounts2 = async () => {
    try {
      const response = await axios.get(API_CALL);

      if (!response) {
        window.alert('No response');
        return;
      }

      const fetchedData = response.data;
  
      if (Array.isArray(fetchedData.linkedAccounts)) {
        setAccounts(fetchedData.linkedAccounts);
      } else {
        console.error('Data fetched is not an array:', fetchedData);
      }
    } catch (error) {
      window.alert('Failed to fetch accounts:', error);
    }
  };

  useEffect(() => {
    fetchAccounts2()
  }, [])

  return (
    <FetchLinkedAccountsContext.Provider value={{ accounts, setAccounts, fetchAccounts2 }}>
      {children}
    </FetchLinkedAccountsContext.Provider>
  )
}

export default FetchLinkedAccountsProvider