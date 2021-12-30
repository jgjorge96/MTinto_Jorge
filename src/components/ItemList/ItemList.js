import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Item } from '../Item/Item'
import './ItemList.css'
import logo from './logo.svg'

export const ItemList = ({items}) => {
    return (
        <div>
            <nav className="category">
                    <ul>
                        <Link to="/" className="links"><li>Todos</li></Link>
                        <Link to="/category/tinto" className="links"><li>Tinto</li></Link>
                        <Link to="/category/blanco" className="links"><li>Blanco</li></Link>
                        <Link to="/category/rosado" className="links"><li>Rosado</li></Link>
                    </ul>
             </nav>
            <div className="container my-5">
                <Row>
                    {items.map((prod) => <Item key={prod.id} {...prod}/>)}
                </Row>
            </div>
            <footer>
                <nav className='footerNav'>
                    <Link to="/"><img src={logo} alt="magito tinto" className='logoFooter2 footerNav'/></Link>
                    <ul>
                        <Link to="/cart" className="links"><li>Nosotros</li></Link>
                        <Link to="/" className="links"><li>Nuestros vinos</li></Link>
                        <Link to="/" className="links"><li>Novedades</li></Link>
                        <Link to="/" className="links"><li>Contacto</li></Link>
                    </ul>
                </nav>
                <Link to="/landing"><img src={logo} alt="magito tinto" className='logoFooter1'/></Link>
                <h4 className='hh4'>
                    2021 Magico Tinto | Ploticas de privaciodad | Terminos y condiciones | Beber con moderación. 
                    No se vende a menores de 18 años | Ley de consumo responsable
                </h4>
            </footer>
        </div>
    )
}
