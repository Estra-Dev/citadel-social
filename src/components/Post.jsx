import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = ({ text, image, createdAt, author, _id }) => {

  return (
    <div className=' rounded-md py-4 bg-white mb-3'>
      <div className=' px-[2%] flex justify-start items-center gap-2 py-2 w-full'>
        <span className=' w-[70px] h-[70px] relative rounded-full overflow-hidden bg-[]'>
          <img src={author.profileImg} alt="" className=' w-[100%] absolute top-0 object-cover'/>
          {/* <h1>{ author.firstname }</h1> */}
        </span>
        <div className=' text-gray-500'>
          <Link to={`/citadel_treasure_ministry/friend/${author._id}`}>
            <h2 className=' text-[14px] font-bold'>{author.firstname + author.lastname}</h2>
          </Link>
          <time className=' text-[12px] font-normal -mt-2'>{createdAt}</time>
        </div>
      </div>
      <div className=' px-[2%] flex justify-start items-center gap-2 py-2 text-gray-900/65 pb-2'>
        <p className=' text-[15px] font-semibold'>{ text }</p>
      </div>
      <div>
        <img src={image} alt="" className=' w-full' />
      </div>
    </div>
  )
}

export default Post