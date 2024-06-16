import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'

const authorsData=[
  {id:1,avatar:Avatar1, name:'Harry', posts: 3},
  {id:2,avatar:Avatar2, name:'Jake', posts: 2},
  {id:3,avatar:Avatar3, name:'Lia', posts: 4},
  {id:4,avatar:Avatar4, name:'Amy', posts: 2}
]

const Authors = () => {
  const[authors,setAuthors]=useState(authorsData)


  return (
    <section className='authors'>
      {authors.length > 0? <div className='container auhtors_conatiner'>
        {
          authors.map(({id,avatar,name,posts})=>{
            return<Link key={id} to={`/posts/users/${id}`}>
              <div>
               <img src={avatar} alt={`Image of ${name}`}/>
              </div>
              <div className='author_info'>

              </div>
            </Link>

          })
        }
      </div>: <h2>No Authors Found.</h2> }
    
    
    </section>
  )
}

export default Authors