import React from 'react'
import { useContext } from 'react'
import UseFetchPosts from './Components/UseFetchPosts'
import UseHandleSubmit from './Components/UseHandleSubmit'
import { StateContext } from './Contexts/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faTag, faMedal, faClipboard } from '@fortawesome/free-solid-svg-icons';

const SocialFeed = () => {
  const { currentAccount, userImage, newPost, setNewPost } = useContext(StateContext)

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
              </nav>              
      </div>

      <UseFetchPosts />
    </div>
  );
}


export default SocialFeed