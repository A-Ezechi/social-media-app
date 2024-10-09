import { useContext } from 'react'
import { StateContext } from '../Contexts/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeletePost = ({ postId }) => {
  const { displayPosts, setDisplayPosts } = useContext(StateContext)

  const handleDeletePost = () => {
    if (!postId) {
      console.log('No post ID provided')
      return; 
    }

    const confirmed = window.confirm('Are you sure you want to delete this post?');

    if (!confirmed) {
      return
    }

    const updatedPosts = displayPosts.filter((post) => post.id !== postId)
    if (updatedPosts.length !== displayPosts.length) { 
      setDisplayPosts(updatedPosts)
    }
  }

  return (
    <button onClick={handleDeletePost} className='deleteButton'><FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#d80e0e",}} /></button>
  )
}

export default DeletePost