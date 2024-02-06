import React from 'react'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav'
import Activities from './pages/Activities'
import PrivateRoute from './components/PrivateRoute'

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
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App