import React from 'react'
import './Landing.css'
import rutini from './rutini.svg'
import american from './american.svg'
import button from './buyButton.svg'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import { Footer } from '../Footer/Footer'

export const Landing = () => {
    return (
        <div>
            <section className='landing'></section>
            <section>
                <h5>RECOMENDADOS</h5>
                <h2>Nuestros favoritos</h2>

                <Link to="/">
                    <img src={rutini} alt='rutini' className='rutini'/>
                    <button className='comprar'><img src={button} alt='comprar ahora' className='buyButton'/></button>
                </Link>
                
                
                <Link to="/">
                    <img src={american} alt='american' className='american'/>
                    <button className='comprar2'><img src={button} alt='comprar ahora' className='buyButton'/></button>
                </Link>
                
            </section>
            {/* <footer>
                <nav className='footerNav'>
                    <Link to="/"><img src={logo} alt="magito tinto" className='logoFooter2 footerNav'/></Link>
                    <ul>
                        <Link to="/cart" className="links"><li>Nosotros</li></Link>
                        <Link to="/" className="links"><li>Nuestros vinos</li></Link>
                        <Link to="/" className="links"><li>Novedades</li></Link>
                        <Link to="/" className="links"><li>Contacto</li></Link>
                    </ul>
                </nav>
                <Link to="/landing"><img src={logo} alt="magito tinto" className='logoFooter'/></Link>
                <h4>
                    2021 Magico Tinto | Ploticas de privaciodad | Terminos y condiciones | Beber con moderación. 
                    No se vende a menores de 18 años | Ley de consumo responsable
                </h4>
            </footer> */}
            <Footer/>
        </div>
    )
}
