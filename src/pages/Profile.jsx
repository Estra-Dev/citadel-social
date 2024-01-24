import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MePost from '../components/MePost'

const Profile = () => {

  const [user, setUser] = useState("")
  const [profileImg, setProfileImg] = useState("")
  const [email, setEmail] = useState("")
  

  const getProfile = async () => {
    await axios.get("http://localhost:3200/auth/profile", {
      withCredentials: true}).then(res => {
      setUser(res.data.firstname + " " + res.data.lastname)
      setProfileImg(res.data.profileImg)
      setEmail(res.data.email)
      console.log(res)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className=' w-[100%] mt-2 flex flex-col items-center justify-start'>
      <div className=' w-[95%] rounded-md shadow-md bg-white my-3 px-3 py-4'>
        <div>
          <Link to={"/citadel_treasure_ministry"}>
            <p>My Profile</p>
          </Link>
        </div>
        <h1 className=' font-bold text-2xl text-gray-800'>Personal Infomation</h1>
        <div className=' w-[60%] mx-auto mt-3'>
          <img src={profileImg} alt={profileImg} className=' w-[200px] h-[180px] rounded-full' />
        </div>
        <div className=' mt-2 py-3'>
          <h3 className=' font-semibold text-xl text-gray-700 text-center'>{ user }</h3>
          <p className=' font-[600] text-sm text-gray-700 text-center'>{ email }</p>
          <p className=' font-[600] text-sm text-gray-700 text-center'>Best Qoute</p>
        </div>
        <Link className=' bg-blue-700/95 py-1 px-2 mx-auto block w-[20%] text-center font-semibold text-[13px] rounded-md text-white'>Update</Link>
      </div>
      <div className=' w-[95%] rounded-md shadow-md bg-white mb-3 px-3 py-4'>
        <h2 className=' font-semibold text-xl text-gray-800 mb-2'>Address</h2>
        <div>
          <span className=' flex gap-5 justify-between items-center w-[85%] mb-3'>
            <p>Country</p>
            <Link className=' bg-blue-700/80 py-2 px-3 font-semibold text-[13px] rounded-md text-white'>Set</Link>
          </span>
          <span className=' flex gap-5 justify-between items-center w-[85%] mb-3'>
            <p>State</p>
            <Link className=' bg-blue-700/80 py-2 px-3 font-semibold text-[13px] rounded-md text-white'>Set</Link>
          </span>
          <span className=' flex gap-5 justify-between items-center w-[85%] mb-3'>
            <p>City</p>
            <Link className=' bg-blue-700/80 py-2 px-3 font-semibold text-[13px] rounded-md text-white'>Set</Link>
          </span>
        </div>
      </div>
      <div className=' w-[95%] rounded-md shadow-md bg-white mb-3 px-3 py-4'>
        <h2>Your Post</h2>
        <div className=''>
          <MePost />
        </div>
      </div>
    </div>
  )
}

export default Profile