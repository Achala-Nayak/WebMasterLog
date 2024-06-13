import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <ul className='footer_categories'>
        <li><Link to='posts/categories/National'>National</Link></li>
        <li><Link to='posts/categories/International'>International</Link></li>
      </ul>
      

    </footer>
  )
}

export default Footer