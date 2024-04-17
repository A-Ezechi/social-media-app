import React from 'react'

const SocialFeed = () => {

  return (
    <div className='socialFeed'>
        {/* <div className="newPostOuterContainer"> */}
            <div className="newPostContainer">
                <div className="newPostImage"></div>
                <div className="newPostText">
                <form action="">
                    <input type="text" 
                    placeholder= "What's on your mind?"
                    className='newPost'
                    />
                </form>
                </div>
            </div>
            <nav className="uploadLinks">
                <a href="">Photos or Video</a>
                <a href="">Tag Friends</a>
                <a href="">Feeling/Activity</a>
                <a href="">LinkedIn</a>
                <button className="post">Post</button>
            </nav>
        {/* </div> */}
    </div>
  )
}

export default SocialFeed