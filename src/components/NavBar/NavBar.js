import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
import logo from './blackLogo.svg'
import './NavBar.css'

export const NavBar = () => {

    return (
        <div className="navBar">
            <hr/>
            <Link to="/"><img src={logo} alt="magito tinto" className='logoHeader headerNav'/></Link>
            <nav>
                <ul>
                    <Link to="/" className="links"><li>Home</li></Link>
                    <Link to="/shop" className="links"><li>Shop</li></Link>
                    <Link to="/" className="links"><li>Nosotros</li></Link>
                    <Link to="/" className="links"><li>Contacto</li></Link>
                 </ul>
             </nav>
             <CartWidget/>
        </div>
    )
}