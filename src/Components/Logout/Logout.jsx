import React, { useEffect, useState } from 'react'
import authService from '../../appwriteService/auth'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { logout as storeLogout } from '../../store/Appslice'

function Logout() {
  const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
const dispatch = useDispatch()
    useEffect(()=>{LogoutHandler()},[])

    async function LogoutHandler(){
        try {
            const lt = await authService.logoutUser()
            if(!lt){
              dispatch(storeLogout())
              setLoading(false)
              navigate("/")
            }
        } catch (error) {
            throw error
        }
    }
  return (
    <div>
      {loading && <h2>Logging Out...</h2>}
    </div>
  )
}

export default Logout
