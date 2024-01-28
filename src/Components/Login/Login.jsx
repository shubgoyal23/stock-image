import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form"
import authService from "../../appwriteService/auth"
import {useNavigate, Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../../store/Appslice'
import "./Login.css"

function Login() {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

     async function formSubmit(data){
        setError("")
        try {
          console.log(data)
           const user =  await authService.loginUser(data)
           if(user){
            dispatch(login(user))
            navigate("/")
           }
        } catch (error) {
            setError(error)
        }
      }
  return (
    <div className='login-div'>
    <div className='login-form-div'>
      <h2>Login</h2>    
      <Link to="/register" >Don&#39;t have account Create one</Link>
      <form onSubmit={handleSubmit(formSubmit)}> 
      {error && <span>{error}</span>}   
        <input type="email" placeholder='Email' {...register("email", {required: true})} />
        {errors.email && <span>This field is required</span>}
        <input type="password" placeholder='Password' {...register("password", {required: true})} />
        {errors.password && <span>This field is required</span>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
