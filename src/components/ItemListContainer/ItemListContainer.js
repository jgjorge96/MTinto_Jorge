import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { DataFunct } from '../../Extras/DataFunct'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = ( {greeting}) => {

    const [loading, setLoading]= useState(false)
    const [products, setProductos]= useState ([])
    const {categoryId} = useParams()

   useEffect (() => {
       setLoading(true)
       DataFunct()
       .then((resp)=>{
           if(!categoryId) {
            setProductos(resp)
           } else {
               setProductos ( resp.filter( prod => prod.category === categoryId))
           }
           
       })
       .catch((error) => {
            console.log(error)
       })
       .finally(()=>{
           setLoading(false)
       })
   }, [categoryId])

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <ItemList items={products}/>
            }
        </>
    )
}