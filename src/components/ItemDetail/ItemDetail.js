import React, {useState} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

export const ItemDetail = ({id, name, img, desc, price, stock}) => {

    const [counter, setCounter] = useState(1);
    const [added, setAdded] = useState(false)

    const handleAdd = () => {
        if (counter > 0) {
            console.log ('Producto Agregado', {
            id, name, price, counter
            })
            setAdded (true)
        }
    }
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} className="cardImg"/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>

            {
                !added
                ? <ItemCount max={stock} counter={counter} setCounter={setCounter} onAdd={handleAdd}/>
                : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }
        </div>
    )
}
