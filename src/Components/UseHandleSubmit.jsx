import React from 'react'
import { useState, useContext } from 'react'
import { StateContext } from '../Contexts/StateContext'

const UseHandleSubmit = () => {
  const [newPost, setNewPost] = useState('')
  const { displayPosts, setDisplayPosts, currentAccount } = useContext(StateContext)

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (newPost.length < 1) {
      alert('Post cannot be empty!');
      return;
    }
  
    const id = displayPosts.length + 1;
    const updatedPosts = [...displayPosts, {
      name: currentAccount,
      post: newPost,
      id: id,
    }];
    
    console.log(updatedPosts);
    setDisplayPosts(updatedPosts);
    setNewPost('');
  }; 

  return (
    <button className="post"
    onClick={handleSubmit}
    >Post</button>
  )
}

export default UseHandleSubmit

