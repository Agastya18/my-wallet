import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const SignIn = () => {

  const [password,setPass]= useState("")
  const [email,setEmail]= useState("")

  const navigate = useNavigate()
  const handleSubmit = async(e:any) =>{
    e.preventDefault()
    console.log(email
      ,password)

      if(  !password || !email ){
        alert("All fields are required")
        return}

   const res= await axios.post("http://localhost:3000/signin", {email, password},{
    withCredentials: true
   })

    console.log(res.data)
    navigate("/transfer")



    



  }
  return (
    <div>
      

    <div className="flex h-screen w-screen items-center overflow-hidden px-2">
{/* Login */}
<div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
  <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
  <div className="mx-auto mb-2 space-y-3">
    <h1 className="text-center text-3xl font-bold text-gray-700">Sign In</h1>
    <p className="text-gray-500">Sign in to access your account</p>
  </div>
  <div>
    
  </div>
  <div>
    <div className="relative mt-2 w-full">
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
       
        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor="email"
        className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
      >
        {" "}
        Enter Your Email{" "}
      </label>
    </div>
  </div>
  <div>
    <div className="relative mt-2 w-full">
      <input
        type="text"
        id="password"
        value={password}
        onChange={(e)=>setPass(e.target.value)}
        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor="password"
        className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
      >
        {" "}
        Enter Your Password
      </label>
    </div>
  </div>
  <div className="flex w-full items-center">
    <button onClick={(e)=>handleSubmit(e)} className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
      SignIn
    </button>
   
  </div>
  
  <p className="text-center text-gray-600">
    Don't have an account?
    <a
      href="/signup"
      className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
    >
      Sign up
    </a>
  </p>
</div>
{/* /Login */}
</div>

  </div>
  )
}

export default SignIn