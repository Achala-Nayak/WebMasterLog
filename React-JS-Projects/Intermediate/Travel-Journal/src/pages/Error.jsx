import React from 'react'
import {Link} from "react-router-dom"


const Error = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <Link to="/" className='btn primary'>Home</Link>
        <h2>Page Not Available</h2>
      </div>
    </section>
  )
}

export default Error