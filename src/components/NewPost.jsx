import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie"


const NewPost = () => {

  const [text, setText] = useState("")
  const [files, setFiles] = useState("")
  const [cookies, ] = useCookies(["access_token"])
  const navigate = useNavigate()

  const createPost = async (ev) => {
    ev.preventDefault()

    const data = new FormData()
    data.set('text', text)
    data.set('file', files[0])
    
    const res = await axios.post("http://localhost:3200/post", data, {
      withCredentials: true,
      headers: {Authorization: cookies.access_token}
    })
    if (res.status === 200) {
      navigate("/")
    }
    console.log(res)
  }

  return (
    <div className=' w-full flex justify-center items-center gap-3 h-screen'>
      <form onSubmit={createPost} className=' bg-white p-6 w-[100%] shadow-sm shadow-slate-300 py-4 px-[2%] rounded-md '>
        <div className=' flex flex-col gap-2 pb-3'>
          <label htmlFor="post">Relate your thoughts in Text Here...</label>
          <input type="text" name="post" value={text} onChange={(ev) => setText(ev.target.value)} placeholder='Type your thoughts' className=' p-3 border-b-2 rounded-md outline-none text-gray-700'/>
        </div>
        <div className=' flex flex-col gap-2 pb-4'>
          <label htmlFor="image">Add an image to your thought</label>
          <input type="file" name="image" onChange={(ev) => setFiles(ev.target.files)} className=' block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300/25 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'/>
        </div>
        <div>
          <button className=' py-2 px-3 rounded-md text-white font-semibold bg-blue-500'>Post</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost