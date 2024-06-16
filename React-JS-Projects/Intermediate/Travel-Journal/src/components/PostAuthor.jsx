import React from 'react'
import { Link } from 'react-router-dom'


const PostAuthor = () => {
  return (
    <Link to={`/posts/users/jdnfknf`} className='post_author'>
        <div className='post_author'>
            <img src="" />
        </div>
        <div className='post-author-details'>
          <h5>By: Harry</h5>
          <small>Now</small> 
        </div>


    </Link>
  )
}

export default PostAuthor