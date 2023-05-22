import React, { useEffect, useState } from 'react'
import './home.css'
import { useUserDispatch, useUserSelector } from "../../index";
import { logout, deleteUser, updateUser, getUser } from '../../redux/UserActions';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const { user } = useUserSelector((state) => state.user);
  const userData = JSON.parse(localStorage.getItem('user'))
  const dispatch = useUserDispatch();
  const endPoint = useNavigate();
  console.log(user)

  const [userInfo, setUserInfo] = useState({
    id: user ? userData.id : user.id,
    name: user ? userData.name : user.name,
    email: user ? userData.email : user.email,
    gender: user ? userData.gender : user.gender,
    status: user ? userData.status : user.status,
  });

  const [editedUserInfo, setEditedUserInfo] = useState({ ...userInfo });

  const handleLogoutClick = () => {
    localStorage.removeItem('userData');
    logout(dispatch, endPoint)
  }

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // setUserInfo(editedUserInfo);
    updateUser(editedUserInfo, dispatch);
    setIsEditMode(false);
  };

  const handleDeleteClick = () => {
    deleteUser({ id: userInfo.id }, dispatch, endPoint)
  };

  const handleInputChange = (e) => {
    setEditedUserInfo({
      ...editedUserInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // console.log(user)
    getUser(userData.id ,dispatch)

  }
    , [user])


  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome, {user.name}</h1>
        <button onClick={handleLogoutClick}>Logout</button>
      </header>
      <div className="user-info">
      <h2>You'r information's</h2>
        <div className="info-row">
          
          <span>ID:</span>
          {isEditMode ? (
            <input
              type="text"
              name="id"
              value={editedUserInfo.id}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.id}</span>
          )}
        </div>
        <div className="info-row">
          <span>Name:</span>
          {isEditMode ? (
            <input
              type="text"
              name="name"
              value={editedUserInfo.name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>
        <div className="info-row">
          <span>Email:</span>
          {isEditMode ? (
            <input
              type="email"
              name="email"
              value={editedUserInfo.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>
        <div className="info-row">
          <span>Gender:</span>
          {isEditMode ? (
            <input
              type="text"
              name="gender"
              value={editedUserInfo.gender}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.gender}</span>
          )}
        </div>
        <div className="info-row">
          <span>Status:</span>
          {isEditMode ? (
            <input
              type="text"
              name="status"
              value={editedUserInfo.status}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.status}</span>
          )}
        </div>
      </div>
      <div className="actions">
        {isEditMode ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <button className='delete' onClick={handleDeleteClick}>Delete Account</button>
      </div>
    </div>
  )
}
