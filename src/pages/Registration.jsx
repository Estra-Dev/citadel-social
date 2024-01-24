import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const [profileImg, setProfileImg] = useState("")

  const navigate = useNavigate()

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setDetails({ ...details, [name]: value })
    
    console.log(details)
  }

  const handleSubmit = async (ev) => {

    const data = new FormData()
    data.set('firstname', details.firstname)
    data.set('lastname', details.lastname)
    data.set('email', details.email)
    data.set('password', details.password)
    data.set('profileImg', profileImg[0])

    ev.preventDefault()
    const res = await axios.post("http://localhost:3200/auth/register", data )
    console.log(res)
    if (res.status === 201) {
      navigate("/login")
    }
  }

  return (
    <div className=' w-full flex h-screen items-center justify-center bg-gradient-to-br from-emerald-600/0 to-cyan-400 relative'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdu95dUJGwjTyVeBMo1nEwNLr0GFaFNxiyQ&usqp=CAU" alt="" className=' w-[100%] absolute top-0 left-0 h-full -z-10 object-cover' />
      <div className=' w-[90%] md:w-[40%] lg:w-[30%] rounded-md py-4 px-3 mx-[auto] bg-cyan-400 mb-1 bg-transparent border-[1px] border-white'>
        <h1 className=' text-center font-bold text-white font-sans'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className=' flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="firstname" className=' text-[13px] font-semibold text-white'>First Name</label>
            <input type="text" name='firstname' value={details.firstname} onChange={handleChange} placeholder='e.g: Dominique' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className='flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="lastname" className=' text-[13px] font-semibold text-white'>Last Name</label>
            <input type="text" name='lastname' value={details.lastname} onChange={handleChange} placeholder='e.g: Dominiquez' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className='flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="email" className=' text-[13px] font-semibold text-white'>Email</label>
            <input type="email" name='email' value={details.email} onChange={handleChange} placeholder='e.g: someone@something.com' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className='flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="password" className=' text-[13px] font-semibold text-white'>Password</label>
            <input type="password" name='password' value={details.password} onChange={handleChange} placeholder='e.g: meEtYOU1234@' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className='flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="img" className=' text-[13px] font-semibold text-white'>Profile</label>
            <input type="file" name='profileImg' onChange={(ev) => setProfileImg(ev.target.files)} placeholder='Your image' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className=' flex gap-6'>
            <button className=' hover:bg-cyan-400 hover:text-white transition-colors hover:shadow-sm hover:shadow-white bg-white py-1 px-2 rounded-md text-cyan-400 font-bold'>Register</button>
            <p className=' py-1 px-2 text-white font-bold'>Or</p>
            <Link to={"/login"}>
              <p className=' py-1 px-2 text-white font-light'>Log In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration