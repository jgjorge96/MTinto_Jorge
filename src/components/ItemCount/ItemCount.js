import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

export const ItemCount = () => {
    const [counter, setCounter] = useState(1);

    const increase = () => {
        if(counter<=4){
        setCounter(counter + 1);}
        else {
            alert("Maximo de stock disponible");
        }
    }

    const decrease = () => {
        if(counter>1){
        setCounter(counter - 1);}
        else {
            alert("Sume un producto a la cesta");
        }
    }

    return (
        <div>
            <br/>
            <h3>{counter}</h3>
            <div>
            <Button variant="outline-primary" onClick={decrease}>-</Button>
            <Button variant="outline-primary" onClick={increase}>+</Button>
            </div>
        </div>
    )
}
