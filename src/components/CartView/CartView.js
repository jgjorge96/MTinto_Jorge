import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export const CartView = () => {

    const {cart, clearCart, removeFromCart} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                    <h2>Tu bodega esta vacia</h2>
                    <hr/>
                    <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }
    return (
        <div className="container my-5">
            <h2>Cart View</h2>
            <hr/>
            <section>
            {
                cart.map((prod) => (
                    <div>
                        <h3>{prod.name}</h3>
                            <p>Precio: $ {prod.price}</p>
                            <p>Cantidad: {prod.counter}</p>
                            <button className="btn btn-danger" onClick={() => {removeFromCart(prod.id)}}>Quitar</button>
                    </div>
                ))
            }
            </section>
                <hr/>
                <div>
                    <button className="btn btn-danger" onClick={clearCart}>Vaciar</button>
                    <button className="btn btn-success mx-2">Finalizar</button>
                </div>
        </div>  
    )
}
