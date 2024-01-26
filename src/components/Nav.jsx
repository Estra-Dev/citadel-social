import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCookies } from "react-cookie"
import axios from 'axios'
import Logo from './Logo'
import { Button, Navbar } from 'flowbite-react'
import { IoMenu } from "react-icons/io5"

const Nav = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const [user, setUser] = useState("")
  const navigate = useNavigate()
  const path = useLocation().pathname

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
    <Navbar className=' w-full px-[5%] md:px-[10%] py-[0.7%] flex justify-between item-center shadow-md shadow-slate-500/30 text-slate-700 font-sans font-semibold sticky top-0 bg-white z-50'>
      <div className=' w-[30%]'>
        <Logo />
      </div>
      {cookies.access_token && (
        <div className=' whitespace-nowrap w-[65%] flex justify-end sm:justify-between items-center'>
          <div className=' flex gap-2 items-center text-sm md:text-lg sm:order-2'>
            
            <Button onClick={handleLogut} gradientDuoTone={"purpleToBlue"} outline>Log Out</Button>
            <Navbar.Toggle className=' text-sm' />
          </div>
          
          <Navbar.Collapse>
            <Navbar.Link active={path==="/citadel_treasure_ministry"} as={"div"}>
              <Link to={'/citadel_treasure_ministry'}>
                <p>Feed</p>
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/citadel_treasure_ministry/activities"} as={"div"}>
              <Link to={"/citadel_treasure_ministry/activities"}>
                <p>Activities</p>
              </Link>
            </Navbar.Link>
            <div className=' inline sm:hidden mt-3'>
              <p>{user}</p>
            </div>
          </Navbar.Collapse>
          <div className=' hidden sm:inline'>
            <p>{user}</p>
          </div>
          {/* <IoMenu className=' md:hidden' /> */}
        </div>
      )}
      
    </Navbar>
  )
}

export default Nav