import React from 'react'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import MeetWith from './MeetWith'
import MultipleContainer from './MultipleContainer'
import ProfileComponent from './ProfileComponent'
import Friend from '../pages/Friend'

const Citadel = () => {
  return (
    <div className=' w-full bg-white h-screen overflow-y-auto'>
      <Nav />
      <Routes>
        <Route path='*' element={
          <div className=' bg-slate-300/30 flex justify-center'>
            <ProfileComponent />
            <MultipleContainer />
            <MeetWith />
          </div>
         } />
        <Route path='/friend/:id' element={ <Friend /> } />
      </Routes>
      
    </div>
  )
}

export default Citadel