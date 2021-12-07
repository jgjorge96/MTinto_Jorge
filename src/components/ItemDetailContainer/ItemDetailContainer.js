import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { DataFunct } from '../../Extras/DataFunct'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { idVino } = useParams()

    useEffect(()=>{

        setLoading(true)

        DataFunct()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(idVino)) )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                 ? <Loader/>
                 : <ItemDetail {...item}/>
            }


        </div>
    )
}