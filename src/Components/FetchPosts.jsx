import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StateContext } from '../Contexts/StateContext';

export const useFetchPosts = () => {
  const { setDisplayPosts } = useContext(StateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/posts.json');
        setDisplayPosts(response.data.posts || []);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        window.alert('Failed to fetch posts');
      }
    };

    fetchData();
  }, []);
};