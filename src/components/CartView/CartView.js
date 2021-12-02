import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartView = ({name, price, counter, id}) => {

    const {cart, clearCart, removeFromCart} = useContext(CartContext)

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
                <button className="btn btn-success">Finalizar</button>
            </div>
        </div>
    )
}
