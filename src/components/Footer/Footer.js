import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from './logo.svg'   

export const Footer = () => {
    return (
        <footer className='footer'>
                <nav className='footerNav'>
                    <Link to="/shop"><img src={logo} alt="magito tinto" className='logoFooter2 footerNav'/></Link>
                    <ul>
                        <Link to="/cart" className="links"><li>Nosotros</li></Link>
                        <Link to="/shop" className="links"><li>Nuestros vinos</li></Link>
                        <Link to="/" className="links"><li>Novedades</li></Link>
                        <Link to="/" className="links"><li>Contacto</li></Link>
                    </ul>
                </nav>
        </footer>
    )
}
