import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <div className="navBar">
            
            <Link to="/" style={{color: "#212529"}}><h1>Magico Tinto</h1></Link>
            <nav>
                <ul>
                    
                    <Link to="/category/tinto" className="links"><li>Tintos</li></Link>
                    <Link to="/category/blanco" className="links"><li>Blancos</li></Link>
                    <Link to="/category/rosado" className="links"><li>Rosados</li></Link>
                 </ul>
             </nav>
        </div>
    )
}