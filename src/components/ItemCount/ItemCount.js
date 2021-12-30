import React from 'react'
import './ItemCount.css'

export const ItemCount = ({max, setCounter, counter, onAdd}) => {

    const handleDecrease = () => {
        counter > 0 && setCounter(counter - 1)
    }
    const handleIncrease = () => {
        counter < max && setCounter (counter + 1)
    }
    return (
        <div>
            <button className="btn btnStyle btnPos" disabled={counter === 0} onClick={handleDecrease}> - </button>
            <div className='counter'><span>{counter}</span></div>
            <button className="btn btnStyle btnPos2" disabled={counter === max} onClick={handleIncrease}> + </button>
            <div className='btnEdit'><button className="btn my-2 btnAdd" disabled={counter === 0} onClick={onAdd}>Agregar al carrito</button></div>
            <div className='btnPos'></div>
        </div>
    )
}
