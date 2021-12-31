import React, {useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import Swal from 'sweetalert2'
import { Link, Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import {getDoc, doc, updateDoc, addDoc, collection, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore/lite'
import { async, deepCopy } from '@firebase/util'
import './Checkout.css'

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
                    <h2 className='hh2'>Completa con tus datos</h2>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <label className='label1'>Nombre</label>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="inputForm1"
                            type="text"placeholder="Por ej. Emiliano"
                        />
                        {values.nombre.length < 4 && <div className='small1'>Nombre invalido</div>}

                        <label className='label2'>Apellido</label>
                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="inputForm2"
                            type="text"placeholder="Por ej. Perez"
                        />
                        {values.apellido.length < 4 && <div className='small2'>Apellido invalido</div>}

                        <label className='label3'>Email</label>
                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="inputForm3"
                            type="email"placeholder="Por ej. emilianoperez@gmail.com"
                        />
                        {values.email.length < 4 && <div className='small3'>Email invalido</div>}

                        <label className='label4'>Confirma tu email</label>
                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="inputForm4"
                            type="email"placeholder=""
                        />
                        {values.emailConfirm !== values.email && <div className='small4'>Los Emails no coinciden</div>}

                        <div><Link to="/cart" className="btn btnCheck2">Continuar comprando</Link></div>
                        <button type="submit" className="btn btnCheck">Pagar</button>
                    </form>
                </div>
        </>
    )
}
