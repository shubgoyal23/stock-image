import { Link } from "react-router-dom"
import "./Contact.css"

export default function Contact(){
    return(
        <div className="contact">
            <h1>contact US</h1>
            <Link to="mailto:Contact@stockimagesearch.online">Contact@stockimagesearch.online</Link>
        </div>
    )
}