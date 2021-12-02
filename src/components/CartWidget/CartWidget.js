import React, {useContext} from 'react'
import { BsBasket2Fill } from "react-icons/bs";
import { CartContext } from '../CartContext/CartContext';

export const CartWidget = () => {

    const {totalCant} = useContext(CartContext)
    return (
        <div>
            <BsBasket2Fill className="cartWidget"/>
            <span>{totalCant()}</span>
        </div>
    )
}