import React, {createContext, useState} from 'react'

export const CartContext = createContext()
export const CartProvider = ({children}) => {

        const [cart, setCart] = useState([])

        const addToCart = (item) => {
            setCart( [...cart, item])
        }

        const removeFromCart = (id) => {
            setCart( cart.filter(prod => prod.id !== id))
        }

        const clearCart = () => {
            setCart([])
        }

        const totalCant = () => {
            return cart.reduce((acc, prod) => acc + prod.counter, 0)
        }

        const totalPrice = () => {
            return cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
        }

        const isInCart = (id) => {
            return cart.some ( prod => prod.id === id)
        }

    return (

        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, clearCart, totalCant, isInCart, totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}
