import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import './CartView.css'
import trash from './trash.svg'

export const CartView = () => {

    const {cart, clearCart, removeFromCart, totalPrice} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                    <h2 className='hh2'>Tu bodega esta vacia</h2>
                    <hr/>
                    <Link to="/shop" className="btn btnConf3">Volver a la tienda</Link>
            </div>
        )
    }
    return (
        <div className="container my-5">
            <h2 className='hh2'>Mi carrito</h2>
            <section>
            {
                cart.map((prod) => (
                    <div className='cardH'>
                        <div key={prod.id} className="m-5 cardImg" style={{width: "18rem"}}>
                            <img src={prod.img} alt={prod.name} className='cardWine'/>
                            <div className="card-body">
                                <h3 className="card-title">{prod.name}</h3>
                                <p className="card-text">{prod.tipo}</p>
                                <h3 className="card-text">${prod.price}</h3>
                                <button className='btn btnTrash' onClick={() => {removeFromCart(prod.id)}}><img src={trash} alt="trash"/></button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </section>
                <hr/>
                <div>
                    <p className='p1'>Total: $ {totalPrice()}</p>
                    <button className="btn btnConf1" onClick={clearCart}>Vaciar carrito</button>
                    <div className=' btn11 btnConf2'><Link to="/checkout" className="btn btn12"> Finalizar compra</Link></div>
                </div>
        </div>  
    )
}
