import React, { useState, createContext, useEffect, useContext } from "react";
import { FetchDataContext } from "../API/FetchData";

const StateContext = createContext();

const StateProvider = ({ children }) => {

  const { fetchData } = useContext(FetchDataContext);

  const [search, setSearch] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [displayPosts, setDisplayPosts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [currentAccountId, setCurrentAccountId] = useState({});
  const [userImage, setUserImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const data = useEffect(() => {
    fetchData()},
    []);

    // if (data) {
    //   console.log("Data retrieval successful");
    // } else {
    //   console.log("Data retrieval failed");
    // }

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        accounts,
        setAccounts,
        newPost,
        setNewPost,
        displayPosts,
        setDisplayPosts,
        currentAccount,
        setCurrentAccount,
        userIntro,
        setUserIntro,
        userCity,
        setUserCity,
        userCountry,
        setUserCountry,
        currentAccountId,
        setCurrentAccountId,
        userImage,
        setUserImage,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };