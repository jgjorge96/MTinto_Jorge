import React, {useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import {getDoc, doc, updateDoc, addDoc, collection, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore/lite'
import { async, deepCopy } from '@firebase/util'

export const Checkout = () => {

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if (values.nombre.length < 4) {
            Swal.fire({
                icon: 'error', 
                title:'Nombre Invalido'
            })
            return
        }
        if (values.apellido.length < 4) {
            Swal.fire({
                icon: 'error', 
                title:'Apellido Invalido'
            })
            return
        }
        if (values.email.length < 7) {
            Swal.fire({
                icon: 'error', 
                title:'Email Invalido'
            })
            return
        }
        if (values.emailConfirm !== values.email) {
            Swal.fire({
                icon: 'error', 
                title:'Los emails no coinciden'
            })
            return
        }

        const order = {
            buyer: {...values},
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const orderRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))
        const outOfStock = []
        const products =  await getDocs(q)

        products.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.counter) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.counter
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(orderRef, order)
            .then((res) => {
                batch.commit()
                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido procesada',
                    text:`Su numero de orden es: ${res.id}`
                })
                clearCart()
            })
        } else {
            Swal.fire({
                icon:'error',
                title:'Sin stock de los productos siguientes:',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }
  
    }

    return (
        <>
                {cart.length === 0 && <Navigate to="/"/>}
                <div className="container my-5">
                    <h2>Completa con tus datos</h2>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control my-2"
                            type="text"placeholder="nombre"
                        />
                        {values.nombre.length < 4 && <small>Nombre invalido</small>}

                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control my-2"
                            type="text"placeholder="apellido"
                        />
                        {values.apellido.length < 4 && <small>Apellido invalido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="email"placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email invalido</small>}

                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="form-control my-2"
                            type="email"placeholder="Repita email"
                        />
                        {values.emailConfirm !== values.email && <small>Los Emails no coinciden</small>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
        </>
    )
}
