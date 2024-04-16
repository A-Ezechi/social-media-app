import React from 'react'

const SocialFeed = () => {

  return (
    <div className='socialFeed'>SocialFeed
        <div className="newPostOuterContainer">
            <div className="newPostContainer">
                <div className="newPostImage">Image</div>
                <div className="newPostText">Text</div>
            </div>
            <nav className="uploadLinks">
                <a href="">Photos or Video</a>
                <a href="">Tag Friends</a>
                <a href="">Feeling/Activity</a>
                <a href="">LinkedIn</a>
            </nav>
        </div>
    </div>
  )
}

export default SocialFeed