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

                <Link to="/shop">
                    <img src={rutini} alt='rutini' className='rutini'/>
                    <button className='comprar'><img src={button} alt='comprar ahora' className='buyButton'/></button>
                </Link>
                
                
                <Link to="/shop">
                    <img src={american} alt='american' className='american'/>
                    <button className='comprar2'><img src={button} alt='comprar ahora' className='buyButton'/></button>
                </Link>
                
            </section>
            {/* <Footer/> */}
        </div>
    )
}
