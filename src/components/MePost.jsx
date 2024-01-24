import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import { useCookies } from 'react-cookie'

const MePost = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const [myPost, setMyPost] = useState([])
  
  const getPost = async () => {
    
    await axios.get("http://localhost:3200/mepost", {
      withCredentials: true,
      headers: { Authorization: cookies.access_token }
    }).then((res) => {
      setMyPost(res.data)
      console.log(res.data)
    }).catch((err) => console.log(err))
    
  }
  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      {cookies.access_token && (
        <div>
          {myPost.length > 0 ? myPost.map(post => (
            <Post key={post._id} {...post} />
          )) : <h1 className=' text-center text-gray-700 font-extrabold'>No Post Yet</h1>}
        </div>

      )}
    </div>
  )
}

export default MePost