import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id, name, img, desc, price, tipo}) => {
    return (
        <div key={id} className="m-5 cardImg" style={{width: "18rem"}}>
                        <img src={img} alt={name} className='cardWine'/>
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{tipo}</p>
                            <h3 className="card-text">${price}</h3>
                            
                            <Link to={`/item/${id}`}><button className="btnCard">Consultar</button></Link> 
                        </div>
        </div>

    )
}
