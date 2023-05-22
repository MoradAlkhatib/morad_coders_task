import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/signUp/SignUpPage'
import LoginPage from './components/login/LoginPage';
import HomePage from './components/homepage/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
