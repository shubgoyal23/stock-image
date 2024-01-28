import {  Link, NavLink } from "react-router-dom"
import "./Header.css"
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"


export default function Header(){
    const status = useSelector(state => state.auth.loggedin)
    const [collapsed, setcollapsed] = useState(true)
    useEffect(()=>{
        setcollapsed(true)
    },[status])
    return(
        <header className={collapsed? "header": "header coll"}>
            <div className="logo"><Link to="#"><img src="/stock image-logo.png" alt="" /></Link></div>
            <button onClick={() => setcollapsed(prev => !prev)} className="hamburg-btn">{collapsed? <i className="fa-solid fa-bars"></i>: <i className="fa-solid fa-xmark"></i>}</button>
           <div className={collapsed? "hamburg" : "hamburg coll"}>
           <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => `${isActive? "active" : ""}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => `${isActive? "active" : ""}`}>about</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => `${isActive? "active" : ""}`}>contact</NavLink>
                </li>
                <li>
                    <NavLink to="/apikey" className={({isActive}) => `${isActive? "active" : ""}`}>ApiKey</NavLink>
                </li>
            </ul>
            </nav>
            <div className="login-btn-div">
                {!status && <NavLink to="/login" ><button>Login</button></NavLink>}
                {!status && <NavLink to="/register" ><button>Register</button></NavLink>}
                {status && <NavLink to="/logout" ><button>Logout</button></NavLink>} 
            </div>
           </div>
        </header>
    )
}
