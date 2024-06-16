
import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({ postID, category, title, description, authorID, thumbnail }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const shortDesc = description.length > 150 ? description.substr(0, 145) + "....." : description;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "....." : title;

  const handleCategoryClick = (e) => {
    e.preventDefault();
    if (location.pathname === `/posts/categories/${category}`) {
      
      navigate('/');
    } else {
      navigate(`/posts/categories/${category}`);
    }
  }

  return (
    <article className='post'>
      <div className='post_thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post_content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDesc}</p>
        <div className='post_footer'>
          <PostAuthor authorID={authorID} />
          <a href="#" onClick={handleCategoryClick} className='btn category'>{category}</a>
        </div>
      </div>
    </article>
  )
}

export default PostItem