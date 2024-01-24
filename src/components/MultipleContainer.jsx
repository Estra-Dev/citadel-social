import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from './Feed'
import NewPost from './NewPost'
import Friend from '../pages/Friend'

const MultipleContainer = () => {
  return (
    <div className=' w-[50%]'>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/create_post' element={<NewPost />} />
        {/* <Route path='/profile/:id' element={<Friend />} /> */}
      </Routes>
    </div>
  )
}

export default MultipleContainer