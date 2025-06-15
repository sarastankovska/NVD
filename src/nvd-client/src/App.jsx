import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Login from './components/login'
import Home from './components/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/protectedRoute'

function App() {

  return (
    <>
       <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/"  element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
    </Routes>
    </>
  )
}

export default App
