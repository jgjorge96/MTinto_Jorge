import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from './logo.svg'   

export const Footer = () => {
    return (
        <footer className='footer'>
                <nav className='footerNav'>
                    <Link to="/"><img src={logo} alt="magito tinto" className='logoFooter2 footerNav'/></Link>
                    <ul>
                        <Link to="/cart" className="links"><li>Nosotros</li></Link>
                        <Link to="/" className="links"><li>Nuestros vinos</li></Link>
                        <Link to="/" className="links"><li>Novedades</li></Link>
                        <Link to="/" className="links"><li>Contacto</li></Link>
                    </ul>
                </nav>
                <div className='logoFooter'><Link to="/landing"><img src={logo} alt="magito tinto"/></Link></div>
                <h4>
                    2021 Magico Tinto | Ploticas de privaciodad | Terminos y condiciones | Beber con moderación. 
                    No se vende a menores de 18 años | Ley de consumo responsable
                </h4>
        </footer>
    )
}
