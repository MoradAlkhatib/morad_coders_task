import React from 'react'
import './login.css'

import { login } from '../../redux/UserActions'
import { useUserDispatch, useUserSelector } from '../../index';
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
  const dispatch = useUserDispatch();
  const endPoint = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = e.target.id.value;
    login( { id }, dispatch, endPoint );


  }
  return (
    <div className="login-page">
      <div className="login-card">
      <h2 style={{ textAlign: 'center' }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type = "text"
            placeholder = "Your ID"
            name = "id"
            
          />
         <br/>
          <button type="submit">Log In</button>
        </form>
        <br/>
        <Link to="/signup">
          <p className='link_btn'>Sign Up!</p>
        </Link>
       


       
        

        
      </div>
    </div>
  )
}
