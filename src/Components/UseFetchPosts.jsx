import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchPosts = () => {
  const [displayPosts, setDisplayPosts] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/posts.json');
        if (response.data.posts) setDisplayPosts(response.data.posts);
      } 
      
      catch (error) {
        console.error('Failed to fetch posts:', error);
        window.alert('Failed to fetch posts');
      };
    };
    
    useEffect(() => {
        fetchData();
      }, [])

    return (
      <div className="postsFeed">
        {displayPosts.length > 0 ? (
          displayPosts.map((posts) => (
            <div className="newFeed" key={posts.id}>
              <h2>{posts.name}</h2>
              <p>{posts.post}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    )
  }

export default useFetchPosts;
