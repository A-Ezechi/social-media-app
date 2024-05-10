import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Context } from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faTag, faMedal, faClipboard } from '@fortawesome/free-solid-svg-icons';

const SocialFeed = () => {
  const [newPost, setNewPost] = useState([])
  const [displayPosts, setdisplayPosts] = useState([])
  const { currentAccount } = React.useContext(Context)

// Fetching posts from the server

  const FetchPosts = async () => {

    try{
      const response = await axios.get('/api/posts.json')
      setdisplayPosts(response.data.posts)
    } catch (error) {
      console.log(`Failed to load posts: ${error}`)
    }
  }

// Posting new posts to the server by creating a new post array and updating the displayPosts state

  const handleSubmit = (e) => {
    const post = newPost;
    const updatedPosts = [...displayPosts];
    e.preventDefault();

     if (post.length > 0)
      {updatedPosts.unshift({name: currentAccount, post: post})
        setdisplayPosts(updatedPosts);
        setNewPost('');
      } else { alert('Post cannot be empty!');}

    console.log(`Publishing post: ${post}`);
    console.log(displayPosts);
    console.log(newPost);
  }

// Using the useEffect hook to fetch posts from the server when the component mounts

  useEffect(() => {
    FetchPosts()
  }, [])
  


  return (
    <div className="socialOuterContainer">
      <div className='socialFeed'>
              <div className="newPostContainer">
                  <div className="newPostImage"></div>
                  <div className="newPostText">
                  <form action="">
                      <input type="text" 
                      placeholder= "What's on your mind?"
                      className='newPost'
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      />
                  </form>
                  </div>
              </div>
              <nav className="uploadLinks">
                  <a href="" className='socialLinks'><FontAwesomeIcon icon={faPhotoFilm} style={{color: "#B197FC",}} /> Photos or Video</a>
                  <a href="" className='socialLinks'><FontAwesomeIcon icon={faTag} style={{color: "#ffc800",}} /> Tag Friends</a>
                  <a href="" className='socialLinks'><FontAwesomeIcon icon={faMedal} style={{color: "#ff0026",}} /> Feeling/Activity</a>
                  <a href="" className='socialLinks'><FontAwesomeIcon icon={faClipboard} style={{color: "#0091ff",}} /> LinkedIn</a>
                  <button className="post"
                  onClick={handleSubmit}
                  
                  >Post</button>
              </nav>
      </div>

      <div className="postsFeed">
      {
        displayPosts.map((posts) => (
          <div className="newFeed">
            <h2>{posts.name}</h2>
            <p>{posts.post}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default SocialFeed