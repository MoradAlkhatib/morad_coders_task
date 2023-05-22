import React from 'react'
import './signUp.css'
import { signup } from '../../redux/UserActions';
import { useUserDispatch } from '../../index';
import { Link, useNavigate } from "react-router-dom";


export default function SignUpPage() {


  const dispatch = useUserDispatch();
  const endPoint = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value
    const status = 'active';
    signup({ name, email, gender, status }, dispatch, endPoint)
  };


  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name='name'


        />
        <input
          type="email"
          placeholder="Email"
          name='email'

        />
        <select name='gender'>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit" >Sign Up</button>
        <br/><br/>
        <Link to="/">
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  )
}
