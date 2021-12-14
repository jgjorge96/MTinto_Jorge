import React, {useContext, useState} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export const ItemDetail = ({id, name, img, desc, price, stock}) => {

    const {addToCart, isInCart} = useContext(CartContext)

    const [counter, setCounter] = useState(1);

    const handleAdd = () => {
        if (counter > 0) {
            addToCart({id, name, price, img, counter})
        }
    }
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} className="cardImg"/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>

            {
                !isInCart(id)
                    ? <ItemCount max={stock} counter={counter} setCounter={setCounter} onAdd={handleAdd}/>
                    :   <div>
                            <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                            <Link to="/cart" className="btn btn-primary mx-2"> Continuar compra</Link>
                        </div>
            }
        </div>
    )
}
