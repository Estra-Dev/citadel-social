import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import {useDispatch, useSelector} from "react-redux"
import { Alert, Spinner } from 'flowbite-react'
import Oauth from '../components/Oauth'

const Login = () => {

  const [details, setDetails] = useState({
    firstname: "",
    password: ""
  })

  const [, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {loading, error: errMessage} = useSelector(state => state.user)

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setDetails({ ...details, [name]: value })
    
    console.log(details)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (details.firstname === "" || details.password === "") {
      
      return dispatch(signInFailure('Please Fill all Spaces'))
    }
    try {
      dispatch(signInStart())
      const res = await axios.post("http://localhost:3200/auth/login", details, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })
      setCookies("access_token", res.data.token)
      window.localStorage.setItem("userID", res.data.userID)
      if (res.status === 201) {
        dispatch(signInSuccess(res.data))
        navigate("/")
      } else {
        dispatch(signInFailure(res.data.message))
        console.log(res.data)
      }
      
    } catch (error) {
      console.log(error)
      dispatch(signInFailure(error))
    }
  }

  return (
    <div className=' w-full flex h-screen items-center justify-center bg-gradient-to-br from-emerald-600/0 to-cyan-400 relative'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdu95dUJGwjTyVeBMo1nEwNLr0GFaFNxiyQ&usqp=CAU" alt="" className=' w-[100%] absolute top-0 left-0 h-full -z-10 object-cover' />
      <div className=' w-[90%] md:w-[40%] lg:w-[30%] rounded-md py-4 px-3 mx-[auto] bg-transparent border-[1px] border-white'>
        <h1 className=' text-center font-bold text-white font-sans'>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className=' flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="firstname" className=' text-[13px] font-semibold text-white'>First Name</label>
            <input type="text" name='firstname' value={details.firstname} onChange={handleChange} placeholder='e.g: Dominique' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className='flex justify-center flex-col gap-1 mb-6'>
            <label htmlFor="password" className=' text-[13px] font-semibold text-white'>Password</label>
            <input type="password" name='password' value={details.password} onChange={handleChange} placeholder='e.g: meEtYOU1234@' className=' w-full p-2 rounded-md bg-transparent border-[1px] border-white/45 text-white outline-none' />
          </div>
          <div className=' flex gap-6'>
            <button className=' hover:bg-cyan-400 hover:text-white transition-colors hover:shadow-sm hover:shadow-white bg-white py-1 px-2 rounded-md text-cyan-400 font-bold' disabled={loading}>
                {loading ? (
                  <>
                    <Spinner size={'sm'} />
                    <span className=' pl-3'>Loading...</span>
                  </>
                ) : "Log In"}
            </button>
            <p className=' py-1 px-2 text-white font-bold'>Or</p>
            <Link to={"/register"}>
              <p className=' py-1 px-2 text-white font-light'>Register</p>
            </Link>
          </div>
          <Oauth />
          
          {
              errMessage && (
                <Alert className=" mt-5" color={'failure'}>
                  {
                    errMessage
                  }
                </Alert>
              )
            }
        </form>
      </div>
    </div>
  )
}

export default Login