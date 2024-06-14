import React from 'react'
import Logo from '../images/logo.png'
import {Link} from "react-router-dom"

import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
      <Link to='/' className='nav_logo'>
        <img src="Logo"  alt="Logo"/>     
      </Link>
      <ul className="nav_menu">
        <li><Link to='/profile'>Achala Nayak</Link></li>
        <li><Link to='/create'>Create Post</Link></li>
        <li><Link to='/authors'>Authors</Link></li>
        <li><Link to='/logout'>Log Out</Link></li>
      </ul>

      <button className='nav_toggle-btn'>
        <AiOutlineClose/>
      </button>
      </div>
    </nav>
  )
}

export default Header