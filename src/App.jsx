import React from 'react'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav'
import Activities from './pages/Activities'

const App = () => {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/register' element={<Activities />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App