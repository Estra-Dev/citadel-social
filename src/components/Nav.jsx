import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie"
import axios from 'axios'
import Logo from './Logo'

const Nav = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const [user, setUser] = useState("")
  const navigate = useNavigate()

  const handleLogut = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/")
  }

  const getProfile = async () => {
    await axios.get("http://localhost:3200/auth/profile", {
      withCredentials: true
    }).then(res => {
      setUser(res.data.firstname)
      console.log(res)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className=' w-full px-[5%] py-[0.7%] flex justify-between item-center shadow-md shadow-slate-500/30 text-slate-700 font-sans font-semibold sticky top-0 bg-white z-50'>
      <div>
        <Logo />
      </div>

      <div className=' flex gap-6 items-center'>
        <Link to={'/citadel_treasure_ministry'}>
          <p>Feed</p>
        </Link>
        <Link>
          <p>Activities</p>
        </Link>
      </div>
      {cookies.access_token && (
        <div className=' flex gap-2 items-center'>
          <p>{user}</p>
          <button onClick={handleLogut}>Log Out</button>
        </div>
      )}
    </div>
  )
}

export default Nav