import { useState } from "react";
import { useContext } from "react";
import { FetchDataContext } from "../API/FetchData";

const UseHandleAccountChange = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const { users } = useContext(FetchDataContext);

  const handleAccountChange = (accountId) => {
    
    if(!accountId) {
      window.alert('Please select an account');
      return;
    }

    const selectedAccount = users.find(account => account.id === accountId);

    console.log("users", selectedAccount)

    if (!selectedAccount) {
      window.alert('Account not found');
      return;
    }

    const accountToUpdate = { ...selectedAccount };

    if (currentAccount !== selectedAccount.name) {
      setCurrentAccount(accountToUpdate);
      console.log("currentAccount", currentAccount)
    } else {
      window.alert('Account is already selected');
      return;
    }
  }

  return { handleAccountChange, currentAccount };
}

export default UseHandleAccountChange;