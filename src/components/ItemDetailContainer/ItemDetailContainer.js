import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { idVino } = useParams()

    useEffect(()=>{

        setLoading(true)
        const docRef = doc(db, 'Products', idVino)
        getDoc (docRef)
            .then   ((doc) => {
                setItem({
                    id:doc.id, 
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idVino])

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