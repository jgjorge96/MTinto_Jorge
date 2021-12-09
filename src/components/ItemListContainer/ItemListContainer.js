import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, where, query } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemListContainer = ( {greeting}) => {

    const [loading, setLoading]= useState(false)
    const [products, setProductos]= useState ([])
    const {categoryId} = useParams()

   useEffect (() => {
       setLoading(true)
       
       const productsRef = collection(db, 'Products')
       const q = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef

       getDocs(q)
        .then((collection) => {
            const items = collection.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setProductos(items)
        })
        .finally (() => {
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