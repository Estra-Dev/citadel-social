// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCookies } from "react-cookie"
// import axios from 'axios'
import Logo from './Logo'
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import {useSelector} from "react-redux"

const Nav = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  // const [user, setUser] = useState("")
  const navigate = useNavigate()
  const path = useLocation().pathname
  const {currentUser} = useSelector(state => state.user)

  const handleLogut = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/")
  }

  console.log(currentUser)

  // const getProfile = async () => {
  //   await axios.get("http://localhost:3200/auth/profile", {
  //     withCredentials: true
  //   }).then(res => {
  //     setUser(res.data.firstname)
  //     console.log(res)
  //   })
  // }

  // useEffect(() => {
  //   getProfile()
  // }, [])

  return (
    <Navbar className=' w-full px-[5%] md:px-[10%] py-[0.7%] flex justify-between item-center shadow-md shadow-slate-500/30 text-slate-700 font-sans font-semibold sticky top-0 bg-white z-50'>
      <div className=' w-[30%]'>
        <Logo />
      </div>
      
        <div className=' whitespace-nowrap min-w-[70%] flex justify-end sm:justify-between items-center'>
          <div className=' flex gap-2 items-center text-sm md:text-lg sm:order-2'>
            {
              currentUser ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt='user'
                      img={currentUser.rest.profileImg}
                      rounded
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className=' block text-xs'>@{ currentUser.rest.firstname + " " + currentUser.rest.lastname}</span>
                    <span className=' block text-xs font-medium truncate'>{ currentUser.rest.email}</span>
                  </Dropdown.Header>

                  <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Link>
                    <Dropdown.Item onClick={handleLogut}>
                      Log Out
                    </Dropdown.Item>
                  </Link>
                  
                </Dropdown>
              ): (
                <Button gradientDuoTone={"purpleToBlue"} outline>Log In</Button>
                
              )
            }
            <Navbar.Toggle className=' text-sm' />
          </div>
          
          <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as={"div"}>
              <Link to={'/'}>
                <p>Feed</p>
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/activities"} as={"div"}>
              <Link to={"/activities"}>
                <p>Activities</p>
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
          
        </div>
      
    </Navbar>
  )
}

export default Nav