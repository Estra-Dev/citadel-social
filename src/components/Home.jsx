import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className=' flex flex-col h-screen items-center justify-center relative w-full bg-gradient-to-br from-emerald-600/0 to-cyan-400'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdu95dUJGwjTyVeBMo1nEwNLr0GFaFNxiyQ&usqp=CAU" alt="" className=' w-[100%] absolute top-0 left-0 h-full -z-10 object-cover' />
      <h1 className=' text-[4.5rem] font-extrabold text-white font-sans'>Welcome</h1>
      <h3 className=' text-[1.3rem] mt-[-20px] pb-6 font-bold text-white font-sans'>To Citadel Of Treasure Ministry</h3>
      <div className=' flex justify-around'>
        <Link to={"/login"}>
          <p className=' py-1 px-2 text-white font-bold'>Log In</p>
        </Link>
        <h1 className=' py-1 px-2 text-white font-light'>|</h1>
        <Link to={'/register'}>
          <p className=' py-1 px-2 text-white font-bold'>Register</p>
        </Link>
      </div>
    </div>
  )
}

export default Auth