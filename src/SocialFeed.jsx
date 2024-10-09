import React from 'react'
import { useState, useEffect, useContext } from 'react'
import DeletePost from './Components/DeletePost'
import {useFetchPosts} from './Components/FetchPosts'
import UseHandleSubmit from './Components/UseHandleSubmit'
import { StateContext } from './Contexts/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faTag, faMedal, faClipboard } from '@fortawesome/free-solid-svg-icons';

const SocialFeed = () => {
  const [newPost, setNewPost] = useState([])
  const { displayPosts, setDisplayPosts, currentAccount, userImage } = useContext(StateContext)

// Fetching posts from the server

useFetchPosts(setDisplayPosts)


  return (
    <div className="socialOuterContainer">
      <div className='socialFeed'>
              <div className="newPostContainer">
              <div 
                  className="newPostImage"
                  style={{ 
                    backgroundImage: currentAccount ? `url(${userImage})` : 'url(https://via.placeholder.com/150)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
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
                  <UseHandleSubmit />
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