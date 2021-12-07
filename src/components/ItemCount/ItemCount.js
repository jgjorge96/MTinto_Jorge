import React from 'react'

export const ItemCount = ({max, setCounter, counter, onAdd}) => {

    const handleDecrease = () => {
        counter > 0 && setCounter(counter - 1)
    }
    const handleIncrease = () => {
        counter < max && setCounter (counter + 1)
    }
    return (
        <div className="my-3">
            <button className="btn btn-outline-primary" disabled={counter === 0} onClick={handleDecrease}> - </button>
            <span className="mx-2">{counter}</span>
            <button className="btn btn-primary" disabled={counter === max} onClick={handleIncrease}> + </button>
            <br/>
            <button className="btn btn-success my-2" disabled={counter === 0} onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}
