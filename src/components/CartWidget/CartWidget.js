import React, {useContext} from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../CartContext/CartContext';
import {Link} from 'react-router-dom'
import './CartWidget.css'

export const CartWidget = () => {

    const {totalCant,cart} = useContext(CartContext)
    return (
        <div className={cart.length === 0 ? 'hidden' : 'cartWidget'}>
            <Link to="/cart" className="widgetLink">
                <FiShoppingCart/>
                <span>{totalCant()}</span>
            </Link>
        </div>
    )
}