import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Spinner } from 'flowbite-react';

const Registration = () => {

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const [profileImg, setProfileImg] = useState("")
  const [errMessage, setErrMessage] = useState(null)
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setDetails({ ...details, [name]: value.trim() })
    
    console.log(details)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    setLoader(true)
    setErrMessage(null)
    if (details.firstname === "" || details.lastname === "" || details.email === "" || details.password === "") {
      setLoader(false)
      return setErrMessage("Please Fill all Spaces")
    }

    const data = new FormData()
    data.set('firstname', details.firstname)
    data.set('lastname', details.lastname)
    data.set('email', details.email)
    data.set('password', details.password)
    data.set('profileImg', profileImg[0])

    try {
      
      const res = await axios.post("http://localhost:3200/auth/register", data )
      console.log(res)
      if (res.status === 201) {
        setLoader(false)
        navigate("/login")
      } else if (res.success === false) {
        setErrMessage(res.message)
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
      setErrMessage(error.message)
    }
  }

  return (
    <div className=' w-full min-h-screen py-2 flex items-center bg-gradient-to-br from-emerald-600/0 to-cyan-400 relative'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdu95dUJGwjTyVeBMo1nEwNLr0GFaFNxiyQ&usqp=CAU" alt="" className=' w-[100%] absolute top-0 left-0 h-full -z-10 object-cover' />
      <div className=' rounded-md w-[90%] md:w-[80%] py-4 mx-[auto] flex flex-col md:flex-row items-center justify-evenly gap-4 mb-1 bg-transparent border-[1px] border-white'>
        <div className=' w-[90%] md:w-[40%] flex flex-col md:flex-row justify-around items-center md:items-start'>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgMEBQcCCAH/xAA8EAACAQIEAwYDBAcJAAAAAAABAgMEEQAFEiEGMVETIkFhcZEHFKEjQoHwFTI0UnLB0RYkM0VTgpKy4f/EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAyEQACAQMDAQYFBAEFAAAAAAAAAQIDESEEEjFBBRNRYXHwIjKBodEUQpGxIxUzUsHh/9oADAMBAAIRAxEAPwDkmKlgwAGAAwAS0tNUVizNSU806woXlaKMsI1AvdiOQ2PPESlGNtztclK5dGRZmUqGNKUFPGksmt1U6XGpbXPeuoLWFzYHFO+hjPIWZ6PDubj5rTQSOKRWacoytoCs6E7H96N+X7pPLE97DGeQsUamlqKV1Srp5oGYBlWaMoSDyIv4eeLpp8EEOAAwAGAAwAGAAwAWaGgrMxlaGgpnqJVQuUS19IsPHzIH44pUqwpq83ZEqLlhDAmV0mUZrTwVkUdXS5jT9nDWVCaUjkYW1qobcKWUEtY7NyIxk76dam5RdnF5S8F0vbr5eQzaouz6jLJXUubK1I5Bq5qLsKuFaV6l4pdQtZIrbKVnABOxZTuDtnp0Zwd0sJ3XTH18cfcs2maklDnNXBUNT8JZo5emWnVJWhEcujUY3YOdSsC5ItysBvfZ0KMlbPW/Uo2FRRVkJroqjhvNqeGrLXqXijmeMM7s5XQxsdNRULsL2t4na1tqTk/ftIizfBl0MFLn3Gucy5jJFIiwtDR08ochTIttaRTd5bMwFiAup9rAYcntpqxXqZGe8HQNDW5jk5+XpoW1CGVyy6CLqAT3g2he0N/9RVG4OJjVyosLCZPDJTzyQTo0c0TFJI2FijDmCOuHp3V0QR4ADAAYALGX0wrKyGnedKeN2AeeT9WJfFj5fm454pVnsg5JX8vHyLRV3YZVySooKuaShjBaGLs6uhqZAHkVgNIXTckybEKO8rFeYsTiVeNZKMurw0uq9fDi/DV/QY47co6Fl3AseZSQVvFcRAUBosvMgdwSF1GWRQNRLAsVAAuzc7nGKeshpU4xefdrLPHHpYuoOebHRcpoqShpkgoaWKnhXkkSBR9MRT1sqjwUmrF+aqipow87pGvLU7AD646UdU4x+KIpQcngzavNS8ClIHAkNlYkWt12OM8tZGrPakaIUGnli5xDSZbmVOYq6CF3AOln2Km1tiCCp8wRiHtTvF2fl+Oo/Y38yuI1VJUZX20NTWs9I7mT5xwWalkAYozKAdYDMzXsSGbUb6RhsXvXGf7/AB7RnqUtvDwUM4y+l4geWCCJYHRYxltlEawI1v2hjawkY/Zg9/e5G+JjUdLL+vn6enXoLtc55LG8MrxSrpkjYo6nwYGxHvjemmroWeMAASALnYYkB54cyyqy2nZTWtRVNRT9vNTzAxFowCyuki3NwOa6W32ZbWxxdVXhWl8u5J2TWc8NNPHo7rydzVTi4rk6VwVBBTUv6TcvIkhvl8MiqFgTSFLqBy1m5G/dUgCwJGE1NRHSQd18b5/H58epaNGVZ3/aacVUaiqLsx3P0x5WpUlOpukdOVJQp2GqhCmJbdMer7IjBxOJWvchSitJrkjgaqk3eZkv/tHkLfS+OxKld5SuR3mLJuxn51RSqVYzXivci1iDy8PDyxy9XpVCqqhs0tRcWyKOcBULHViI44NbyKk9T9owa5W1v6fnph6e1+QiSvhGL+lWyOmkpxUVENGzazHRtpcnmYg/3FJ3L7tZdI5Ww/u+9d7Z8/7t19DHOOzjgyOJaKumQZvNlK5dTyaUEK6yUWwC6ttKC1lA7pNuR3OGUJwX+NSu/d/X36C5J82F/GkoTUawNWQLVyGKnMiiWRU1lVvubeO3his3JQbgrvoSrXyP1LEtfOYIZ4EiqapEUU9ajiaILdnCXYBgFIuojK90g+GORTW2S3JuyzeLVn4Xxh+blf7mm252XV+Pv/o6RTfbzaUOlVAChdgAMcarSlVqOTZ2HanCyRZWgkibVG4kHnscZqmjfTJR11JWasaFJmgpVIn7oUXJPgMW02oq6eVomSrpt+Ykhz1HBnXWVuNCk6b25k/nwGO3/qNSMN0uRP6OXBn5lnYkpWDm98ROvKqrM00tMoO4h5xmskrGOFbk+JxNKMmviY2o0uBfmE0X27lpezOpiDsgHjjdCKSwjHKTuE9DNJXxnLgbykPAU5qRuvsQLdBfD0k1ZiZcF2v7XPcs0zSvOvY3VaBVmKyFbhbN2kpbVZWZjH4+V8EWqFTGM9cY+y9EtxXMkc19eeOyZwxADN8PiEz2WdrDsqRyDbkSyLf2JwjUpum0h+mxUTOoZHmAJZu7cm1udscGUNrO1iaN01hC3uBhFROxVUkLlfnM0VSYq3v07Kd1SwvzGk+PgMR3CnDfHle8glslYycz4nEMSRUTrK5Ua2LbDbw6nF1ppVX8eEugx1FHjLKUmdtLTgSyW2/VvvjaqaTEueMlSOZpxde7GDz5D3OHwhZmec7otSvAIGW+sFT3U2HueZxtXGDM+S3wTN8tLRrVKgEIUEKSdvDc+gxeCs8lKmVZHivqamNpjl8OY1cDV1S0awU6uIyk7iMhpNQBFttAAHS+OdXjB1pbml6vo1ni33IjfaupzCpRkqpkdXVlkYMsv66m/JvPrjrRacU0IfOSLEkDn8KqVK3iCrgcgf3CRwD97S6G3tilRXixlN2khwk1UM1O42gaZlc8/DbHJqxTaZ1KcmkyWuzdI4yAyhh4FsIqQsPhMROI89q5KiKJXRI1ux1SKBfw3v67YfpdNGzl4i9TWs0jClzGmjJMlQ8p5hIVt6d5uXscbY6e/QyyrpPBWkz5x+zQxx2+8/2je529gMNVCKFOvc0MnrpqyUNJMzP1cknFXS28Ap7h1yDKp86rYqKBxdxdnvsijmSLb4bGD6lZT2q57gjmp9aFNEgVTpK7gkAgHnvuL77G4wzakSnuVypkwopabVV16ioaeWenhl0Ow1OW1Rq8JZb7HuFuuONrJVO9eyOOG1f72kk/qkVpqNsv3/AhVjl6yoclmLSuxLEkm5PMmxJ87DHXhiKXkZ3yQYsQaPD2ayZLnFNXx7iNrSL+8h2YexwMkcM0r546iaGqZpKYntaYk6RsA1/PYi3/ALjI6aaaRtjPhsW8+rhVdymqHTu3Zrb33wmlTcXeauNnLdH4XYV6QstYjG2rVuzAH8d+eOi/lwYI/PkmraEx6HgDtDIbRm9y2wPQX525DlyxWM0211JlTaV+hVqIJachZo3jYi+lxY29MXTTFywPPwmyalz6TOaGoOioemVaWYxlhDJquG9O6AfGxPgDiSFJo6b8JMvzTL87zOmzik7GSGPswT946gbjqCLG4xCG1WnFWMnimkfLKqsiWVEkmlRYJJWAF5NgTfo2o+i4pUnsi5eBenL/AB2MTMqpKDKO0TV8otIqwrRAtEWIKIxu1grMp3eK53AY44lODqVdvW+b8+LWFyk+kvVIu3aN/fv6HOQLAAeGO8ZAxABgAZMmzBK+kXLMwdi0ZBpm2ubCwTfoOXUbdMUlHqhsJ2wyCTLadqkxzSuq7EOFtp+u3tijjJcIZdPkrQZTl8EkgrZwpB7kgu/aea7afe/PEt1HwQlBPJVnielQLBNIJG1DSi6RzsOXlbFo023kq5JLBiOjFjcYdtFNIaPh/nc/DWew1yb07WSpQrqDR3B5XG4IBBuNxirwxsKSkrH1Hls9LmyU2aUchaJ4+6dJXV0O4B2uffAmnwIlFxdmcm+OeV0yVSV1ZnXZvLGFpMtSn1aio7zs2rbna9v54GCORipnWmemWVhBIyu8YOzEXsT6XPvimyO7dbJa+LEWLEFrL6WGrnEU9fTUQPKSoD6fdVNvxxWcnFXSuSPeUfCibNoRNScTZTPEfvUoMwH1GOfV7SVPEoP6k7bmlmvw9yPhvLqH9JOayqnmeN6iarNHTpZXe5IDFdl0jnc9MIp9oVq85bMJdLXfh5EtWJpY+Fo6toJ8ir554pewRkrdRZfsQHJ1rzMyWvva564O91ko3VRJWvx6+T8C6ceqN6iyvJHyWOsy/KJNE8QkEDtISA33barXvtYH8bDGOWq1Kq7J1P6/BoUY7bpFaTKMlES9tw32h1WuqkqdtrG/idvTF+/1EnisV2w6xPP9m+GGMaT8LFGdgursiBqP48sLeq1dm4172J2Q6xJaTJMjyiv+ZyzJIJGTk0cZlKeY1EgH67+uCOt1Tj8VSz87fglxjwlg1puJc2kQKYa6Aq3daKJSSLeOoW/PPDv1tdcVYv8Agp3UOsWJ3FnBjZ9V/PnNKg1r2Ej1VpBp8FUCwUDy23xNLtea/wBxX9MEy0q/aKGZ8FHLF1VeeZbFfkJSyE+g3Jxupdod78tOQmVLby0LEyJHIVjlWZR99AQD/wAgD9MdBNtZwJJ8tSgeoH6UqKmGnHP5aESO3pdgB67+mIm5JfCs+YHQ+H+MOBuFwJMoyOvnqgLGqqNBlP4k930AAxzq2k1NfE5pLwRZNI0Kr4zU8ikRZHMRe9pJ1t/1OM8exrO7n9v/AEtvMTNvixmtXCUoKZKOTUD2uoSG3SxXGmHZWnjyr/z+Q7yXQwn4/wCKH/zVx6RIP5Yf+g03/BB3s/EifjbiV7Fs3mNjcd1dj7Yt+i0y/YiO8n4gONuJdSsc2mLLyJVTb6Yj9DprW2IO8n4ky/EDideeZlv4okP8sUfZukf7F9ye9qeJuU3xSqFhRKvLFmcKA0gm06j1tbGeXZFB/Lj+fyXWomiwPibRt/iZZUL/AAOp/phD7GfSf2GLVeKMPN8w4PzUvN8pW0VU25kgjXvHzW9j9D5410aOso43qS87ipypyzawpzLGshEEjSR+DMmkn1Fzb3x0Fe2RR+6B1OJIDQOpwAGgdTgANA6nAAaB1OAA0DqcABoHU4ADQOpwAGgdTgANA6nAAdmPPAAaB1OAD//Z" alt="" className=' w-[40%] rounded-full' />
          <div className=" w-[90%] md:w-[50%]">
            <h1 className=' font-bold text-white text-left font-sans text-4xl'>Register</h1>
            <h1 className=' font-extrabold bg-gradient-to-r from-purple-700 via-blue-600 to-pink-600 p-2 rounded-md text-white  text-2xl font-sans'>ctm Social</h1>
            <p className=' pt-3 text-white font-semibold text-sm'>This Social App is for Member, intending Workers and all Workers of Citadel Of Treasure Ministry Worldwide...</p>
          </div>
        </div>
        <div>  
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
              <button className=' hover:bg-cyan-400 hover:text-white transition-colors hover:shadow-sm hover:shadow-white bg-white py-1 px-2 rounded-md text-cyan-400 font-bold' disabled={loader}>
                {loader ? (
                  <>
                    <Spinner size={'sm'} />
                    <span className=' pl-3'>Loading...</span>
                  </>
                ) : "Register"}
              </button>
              <p className=' py-1 px-2 text-white font-bold'>Or</p>
              <Link to={"/login"}>
                <p className=' py-1 px-2 text-white font-light'>Log In</p>
              </Link>
            </div>
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
    </div>
  )
}

export default Registration