import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie"
import axios from 'axios'
import Post from './Post'

const Feed = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const [user, setUser] = useState("")
  const [profileImg, setProfileImg] = useState("")

  const [posts, setPosts] = useState([])

  const getProfile = async () => {
    await axios.get("http://localhost:3200/auth/profile", {
      withCredentials: true
    }).then(res => {
      setUser(res.data.firstname)
      setProfileImg(res.data.profileImg)
      console.log(res)
    })
  }

  const getPosts = async () => {
    await axios.get("http://localhost:3200/post", {
      headers: { Authorization: cookies.access_token }
    }).then(res => {
      console.log(res)
      setPosts(res.data)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    getProfile()
    getPosts()
  }, [])

  return (
    
    <div className=' w-full flex flex-col justify-start items-center gap-3'>
      {cookies.access_token && (
        <>
          <div className=' w-full mt-3 flex justify-center items-start'>
            <div className=' w-[85%] bg-white shadow-sm shadow-slate-300 py-4 px-[2%] rounded-md flex justify-start gap-3 items-center'>
              <span className=' w-[10%]'>
                <img src={profileImg} alt="" className=' rounded-full w-[90%] h-11'/>
              </span>
              <Link to={'/citadel_treasure_ministry/create_post'} className=' w-full'>
                <p className=' p-3 text-gray-500 bg-slate-400/15 rounded-full'>Relate your thoughts, <span>{user}</span></p>
              </Link>
            </div>
          </div>
          <div className=' w-[85%]'>
            {posts.length > 0 && posts.map(post => (
              <Post key={post._id} {...post} />

            ))}
          </div>

        </>
      )}
    </div>
  )
}

export default Feed