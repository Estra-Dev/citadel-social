import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import Citadel from './Citadel'

const Auth = () => {

  const {currentUser} = useSelector(state => state.user)

  return (
    <>
      {
        !currentUser ? (
          <div className=' flex flex-col h-screen items-center justify-center relative w-full bg-gradient-to-br from-emerald-600/0 to-cyan-400'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdu95dUJGwjTyVeBMo1nEwNLr0GFaFNxiyQ&usqp=CAU" alt="" className=' w-[100%] absolute top-0 left-0 h-full -z-[10] object-cover' />
            <h1 className=' text-[4.5rem] font-extrabold text-white font-sans'>Welcome</h1>
            <h3 className=' text-[1.3rem] mt-[-20px] pb-6 font-bold text-white font-sans'>To Citadel Of Treasure Ministry</h3>
            <div className=' flex justify-evenly w-[20%]'>
              <Link to={"/login"}>
                <Button className=' py-1 px-2 text-white font-bold border-[1px]' gradientDuoTone={"purpleToBlue"}>Log In</Button>
              </Link>
              {/* <h1 className=' py-1 px-2 text-white font-light'>|</h1> */}
              <Link to={'/register'}>
                <Button className=' py-1 px-2 text-white font-bold border-[1px]' gradientDuoTone={"purpleToBlue"}>Register</Button>
              </Link>
            </div>
          </div>
        
        ) : (
            <Citadel />
        )
      }
    
    </>
  )
}

export default Auth