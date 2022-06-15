import { useMatch } from "react-router-dom";
import {  Link } from "react-router-dom";

const Navbar = () => {
    const match = useMatch("/")
    return ( 
        
        <nav className={match ? "navbar-home" : "navbar"}>
        <Link to="/">
        <img className="logo"
        src={`./images/logo${match ? "3" : "4"}.png`}
        alt="logo" />
        </Link>
        
        <Link className="nav-links" to="/">خانه</Link>
        <Link className="nav-links" to="/yoga">یوگا و مدیتیشن</Link>
        <Link className="nav-links" to="/facial">خدمات پوستی</Link>
        
        
        
        
        
        <div className="icons-div">
        <a href="https://www.instagram.com/noor.skincare.mariya/"><img className="icons" src="./images/instagram.png" alt="" /></a>
        <a href="https://t.me/noor_shojaee"><img className="icons" src="./images/telegramme.png" alt="" /></a>
        </div>

        

        
        </nav>
     );
}
 
export default Navbar;