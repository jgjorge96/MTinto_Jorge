import React from 'react'

export const ItemDetail = ({name, img, desc, price}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} className="cardImg"/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>
        </div>
    )
}
