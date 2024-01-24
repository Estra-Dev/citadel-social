import React from 'react'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Citadel from './components/Citadel'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/citadel_treasure_ministry/*' element={<Citadel />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App