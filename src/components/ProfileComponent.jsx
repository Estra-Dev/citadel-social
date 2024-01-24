import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Profile from '../pages/Profile'

const ProfileComponent = () => {
  return (
    <div className=' w-[25%]'>
      
      <Routes>
        <Route path='/' element={<Profile />} />
      </Routes>
      
    </div>
  )
}

// className=' w-[25%] mt-2 flex flex-col items-center justify-start'

export default ProfileComponent