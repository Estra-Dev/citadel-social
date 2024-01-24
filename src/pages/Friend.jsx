import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCookies } from "react-cookie"
import Post from '../components/Post'

const Friend = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const [user, setUser] = useState("")
  const [post, setPost] = useState([])
  const [profileImg, setProfileImg] = useState("")
  const {id} = useParams()

  const getFriends = async () => {
    await axios.get(`http://localhost:3200/users/${id}`, {
      headers: {Authorization: cookies.access_token}
    }).then(res => {
      console.log(res)
      setUser(res.data.firstname + " " + res.data.lastname)
      setProfileImg(res.data.profileImg)
    }).catch(err => console.log(err))

    console.log(id)
  }

  const getFriendsPost = async () => {
    await axios.get(`http://localhost:3200/users/friends/${id}`).then(res => {
      console.log(res, post)
      setPost(res.data)
      
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    getFriends()
    getFriendsPost()
  }, [])

  return (
    <div className=' w-[100%] mt-2 flex items-start justify-center gap-5 bg-gray-400/30 relative'>
      <div className=' w-[35%] rounded-md shadow-md bg-white my-3 px-3 py-4 flex flex-col items-center justify-start gap-3 sticky left-0 top-0'>
        <div className=' w-[60%] flex justify-center mt-3'>
          <img src={profileImg} alt={profileImg} className=' w-[200px] h-[180px] rounded-full' />
        </div>
        <h3 className=' font-semibold text-xl text-gray-700'>{ user }</h3>
      </div>
      <div className=' w-[50%] rounded-md shadow-md bg-white my-3 px-3 py-4 flex flex-col items-center justify-start gap-3'>
        {
          post.length > 0 && post.map(single => (
            <Post key={single._id} {...single} />
          ))
        }
      </div>
    </div>
  )
}

export default Friend