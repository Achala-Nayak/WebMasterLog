import React, { useState } from 'react'

const Register = () => {
  const [userData,setUserData]=useState({
    name: '',
    email:'',
    password:'',
    password2:''  
  })

const changeInputHandler=(e)=>{
  setUserData(prevState =>{
    return{...prevState,[e.target.name]: e.target.value}
  })
}

  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign Up</h2>
        <form className='form register_form'>
          <p className='form_error_mess'>Error</p>
          <input type='text' placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type='text' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type='text' placeholder='Confirm Password' name='password2' value={userData.password} onChange={changeInputHandler}/>
          < button type='submit' className='btn primary'>Register</button>
        </form>

      </div>
    </section>
    
  )
}

export default Register