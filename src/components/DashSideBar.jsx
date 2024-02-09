import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react'
import { HiUser } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const DashSideBar = () => {
  const location = useLocation()
  const [tab, setTab] = useState("")
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabfromUrl = urlParams.get('tab')
    if (tabfromUrl) {
      setTab(tabfromUrl)
    }
    console.log(tabfromUrl)
  }, [location.search])
  return (
    <Sidebar className=' w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={'/dashboard?tab=profile'}>
            <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={"User"} labelColor='dark' as='div'>
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={FiLogOut} className="cursor-pointer">
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSideBar