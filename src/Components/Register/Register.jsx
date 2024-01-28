import React, {useState} from 'react'
import authService, { AuthService } from '../../appwriteService/auth'
import {useForm} from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/Appslice'
import "../Login/Login.css"
function Register() {
    const [error, setError] = useState("")
    const dispact = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      async function registeruser(data){
        setError("")
        try {
            const user = await authService.CreatAccount(data)
            if(user){
                const userSesion = await authService.currentUser()
                if(userSesion) {
                  dispact(login(userSesion))
                  navigate("/")}
            }
        } catch (error) {
            setError(error)
        }
      }
  return (
    <div className='login-div'>
    <div className='login-form-div'>
        <h2>Register</h2>
      <Link to="/login" >already have a account login</Link>
      <form onSubmit={handleSubmit(registeruser)} >
        {error && <span>{error}</span>}
      <input type="text" placeholder='FullName' {...register("name", {required: true, minLength: 3})} />
      {errors.name && <span>This field is required</span>}
      <input type="email" placeholder='Email' {...register("email", {required: true, minLength: 3, validate: {
                           matchPatern: (value) =>
                              /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(
                                 value
                              ) || "Invalid Email Address",
                        }})} />
                        {errors.email && <span>This field is required</span>}
      <input type="password" placeholder='Password' {...register("password", {required: true, minLength: 8})} />
      {errors.password && <span>This field is required</span>}
      <button type="submit">Register</button>
      </form>
    </div>
    </div>
  )
}

export default Register
