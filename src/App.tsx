import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/login'
import Register from './components/register'
import Home from './components/home'
import './styles/global.css'
import {Route , Routes} from 'react-router-dom'

function App() {
  

  return (
    <Routes>
        <Route
        index
        element = {<LoginForm />}
        />
  
        <Route
        path='register'
        element={<Register />}
        />
        <Route
        path="home"
        element={<Home />}
       />
    </Routes>
  )
}

export default App;
