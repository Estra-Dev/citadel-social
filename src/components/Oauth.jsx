import { Button } from 'flowbite-react'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
  const dispatch = useDispatch()
  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider)
      console.log(resultFromGoogle)

      // const data = new FormData()
      // data.set('firstname', resultFromGoogle._tokenResponse.firstName)
      // data.set('lastname', resultFromGoogle._tokenResponse.lastName)
      // data.set('email', resultFromGoogle.user.email)
      // data.set('profileImg', resultFromGoogle.user.photoURL)

      const res = await axios.post("http://localhost:3200/auth/google", {
        firstname: resultFromGoogle._tokenResponse.firstName,
        lastname: resultFromGoogle._tokenResponse.lastName,
        email: resultFromGoogle.user.email,
        profileImg: resultFromGoogle.user.photoURL
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })

      if (res.status === 201) {
        dispatch(signInSuccess(res.data))
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button type='button' gradientDuoTone={'purpleToPink'} outline onClick={handleGoogleClick}>
      <FcGoogle className='w-6 h-6 mr-2' />
      Continue With Google
    </Button>
  )
}

export default Oauth