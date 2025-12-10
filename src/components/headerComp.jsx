import "./headerStyles.css"
import { useState } from "react"
import { NavLink} from "react-router-dom"
export default function Header(){

    const [isMenuOpen, setMenuOpen] = useState(false)

    // toggles the menu state from open/closed

    function toggleActive(){
        setMenuOpen((prevIsMenuOpen)=>!prevIsMenuOpen)
    }

    return(
    <header>
       
        <div className="header">
            <NavLink className="headerTitle" to="/">
                <p>David Jhondrek</p>
            </NavLink>
            
            <NavLink to="/help" className='header__btn'>Get in touch</NavLink>

            <div className={`hamb-menu ${isMenuOpen ? 'active' : ''}`} onClick={()=>{toggleActive()}}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`off-screen-menu ${isMenuOpen ?`active` : ``}`}>
                <ul>
                    <li><NavLink className={({isActive})=> ` ${isActive ? "my__link navmenu__link" : "navmenu__link"}`}  to="/" onClick={()=>{toggleActive()}}>David Jhondrek</NavLink></li>

                    <li><NavLink className={({isActive})=> ` ${isActive ? "my__link navmenu__link" : "navmenu__link"}`} to="/examples" onClick={()=>{toggleActive()}}>Projects</NavLink></li>

                    <li><NavLink className={({isActive})=> ` ${isActive ? "my__link navmenu__link" : "navmenu__link"}`} to="/help" onClick={()=>{toggleActive()}}>Contact</NavLink></li>
                </ul>
            </nav>

        </div>

        
        
        
    </header>
)
}