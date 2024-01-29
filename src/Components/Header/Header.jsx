import {  Link, NavLink } from "react-router-dom"
import "./Header.css"
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"


export default function Header(){
    const status = useSelector(state => state.auth.loggedin)
    const [collapsed, setcollapsed] = useState(true)
    return(
        <header className={collapsed? "header": "header coll"}>
            <div className="logo"><Link to="/"><img src="/stock image-logo.png" alt="" /></Link></div>
            <button onClick={() => setcollapsed(prev => !prev)} className="hamburg-btn">{collapsed? <i className="fa-solid fa-bars"></i>: <i className="fa-solid fa-xmark"></i>}</button>
           <div className={collapsed? "hamburg" : "hamburg coll"}>
           <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => `${isActive? "active" : ""}`} onClick={() => setcollapsed(true)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => `${isActive? "active" : ""}`} onClick={() => setcollapsed(true)}>about</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => `${isActive? "active" : ""}`} onClick={() => setcollapsed(true)}>contact</NavLink>
                </li>
                <li>
                    <NavLink to="/favorite" className={({isActive}) => `${isActive? "active" : ""}`} onClick={() => setcollapsed(true)}>Stared</NavLink>
                </li>
            </ul>
            </nav>
            <div className="login-btn-div">
                {!status && <NavLink to="/login" ><button onClick={() => setcollapsed(true)}>Login</button></NavLink>}
                {!status && <NavLink to="/register" ><button onClick={() => setcollapsed(true)}>Register</button></NavLink>}
                {status && <NavLink to="/logout" ><button onClick={() => setcollapsed(true)}>Logout</button></NavLink>} 
            </div>
           </div>
        </header>
    )
}
