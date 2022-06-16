import { useMatch } from "react-router-dom";
import {  Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => { 
        setMenuOpen(!menuOpen)
        console.log(!menuOpen)
    }

    const match = useMatch("/")
    return ( 

        <div>
        <button className="hamburger" onClick={toggleMenu}>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

        </button>
        
        <nav className={match ? "navbar-home" : "navbar"}
        id={menuOpen ? "nav-open" : "nav-closed"}>
        <Link to="/">
        <img className="logo"
        src={`./images/logo${match ? "3" : "4"}.png`}
        alt="logo" />
        </Link>
        
        <Link className="nav-links" to="/" onClick={() => setMenuOpen(false)}>خانه</Link>
        <Link className="nav-links" to="/yoga" onClick={() => setMenuOpen(false)}>یوگا و مدیتیشن</Link>
        <Link className="nav-links" to="/facial" onClick={() => setMenuOpen(false)}>خدمات پوستی</Link>
        
        
        
        
        
        <div className="icons-div">
        <a href="https://www.instagram.com/noor.skincare.mariya/"><img className="icons" src="./images/instagram.png" alt="" /></a>
        <a href="https://t.me/noor_shojaee"><img className="icons" src="./images/telegramme.png" alt="" /></a>
        </div>

        

        
        </nav>
        </div>
     );
}
 
export default Navbar;