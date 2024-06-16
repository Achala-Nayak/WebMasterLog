import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
import { MdEditNote } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const UserProfile = () => {
  const[avatar,setAvatar]=useState('')


  return (
    <section className='profile'>
      <div className='container profile_container'>
        <Link to={`/myposts/asdfg`} className='btn'>My Posts</Link>

        <div className='profile_details'>
          <div className='avatar_wrapper'>
            <div className='profile_avatar'>
              <img src={Avatar} alt=""/>
            </div>
          <form clasName='avatar_form'>
            <input type='file' name='avatar' id='avatar' onChange={e=> setAvatar(e.target.files[0])} accept="png,jpg,jpeg"/>
            <label htmlFor='avatar'><MdEditNote/> </label>        
          </form>
          <button className='profile_avatar-btn'><FaCheck/></button>
          </div>

            <h1></h1>


        </div>
      </div>
    </section>
  )
}

export default UserProfile