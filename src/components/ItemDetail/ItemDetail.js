import React, {useContext, useState} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import './ItemDetail.css'

export const ItemDetail = ({id, name, img, desc, price, stock, tipo, uva, volumen, year, alcohol}) => {

    const {addToCart, isInCart} = useContext(CartContext)

    const [counter, setCounter] = useState(1);

    const handleAdd = () => {
        if (counter > 0) {
            addToCart({id, name, price, img, counter})
        }
    }
    return (
        <div className='container my-5'>
            <img src={img} alt={name} className="detailImg"/>
            <h5 className='h5'>{tipo}</h5>
            <h2 className='h2'>{name}</h2>
            <h3 className='h3'>${price}</h3>
            <p className='p'>{desc}</p>
            <hr className='hr'/>
            <h4 className='h4 uva'>UVAS<br/>{uva}</h4>
            <h4 className='h4 year'>AÑO<br/>{year}</h4>
            <h4 className='h4 alcohol'>CONTENIDO DE ALCOHOL<br/>{alcohol}%</h4>
            <h4 className='h4 volumen'>VOLUMEN<br/>{volumen} ml</h4>
            <hr className='hr2'/>

            {
                !isInCart(id)
                    ? <ItemCount max={stock} counter={counter} setCounter={setCounter} onAdd={handleAdd}/>
                    :   <div>
                            <div><Link to="/" className="btn btnConf">Continuar comprando</Link></div>
                            <div className='btnConf2'><Link to="/cart" className="btn btn12"> Finalizar compra</Link></div>
                        </div>
            }
        </div>
    )
}
