import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({id, name, img, desc, price}) => {
    return (
        <div key={id} className="m-5" style={{width: "18rem"}}>
                        <img src={img} alt={name}/>
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">Precio: ${price}</p>
                            <p className="card-text">{desc}</p>
                            <Link to={`/item/${id}`} className="btn btn-primary">Consultar</Link> 
                        </div>
                        <ItemCount/>
        </div>

    )
}
