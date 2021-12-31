import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({items}) => {
    return (
        <div>
            <nav className="category">
                    <ul>
                        <Link to="/shop" className="links"><li>Todos</li></Link>
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
        </div>
    )
}
