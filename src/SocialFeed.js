import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SocialFeed = () => {
  const [newPost, setNewPost] = useState([])
  const [displayposts, setdisplayposts] = useState([])

  const FetchPosts = async () => {

    try{
      const response = await axios.get('/api/posts.json')
      setdisplayposts(response.data.posts)
    } catch (error) {
      console.log(`Failed to load posts: ${error}`)
    }
  }

  useEffect(() => {
    FetchPosts()
  }, [])

// First create an empty array to store the posts.
// Then make it so that when the user presses the post button, the new post is added to the array
// In the return, map through the array and display each post in a div
  


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
                      onChange={(e) => setNewPost(e.target.value)}
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
      </div>

      <div className="postsFeed">Post Feed
      {
        displayposts.map((posts) => (
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