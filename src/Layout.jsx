import { Outlet } from "react-router-dom";
import {Header, Footer} from "./Components/index"
import { useDispatch } from 'react-redux'
import { login, logout } from "../src/store/Appslice";
import { useEffect, useState } from "react";
import authService from "./appwriteService/auth";

export default function Layout(){
    const [loading, setLoading] = useState(true)
   const dispatch = useDispatch()
   useEffect(()=>{
    authService.currentUser()
    .then(userData => {
      console.log(userData)
       if(userData){
          dispatch(login({userData}))
       }else{
          dispatch(logout())
       }
    })
    .catch((e) => console.log("there is ", e))
    .finally(() => setLoading(false))
          
       
 },[])
    return loading? null : (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}