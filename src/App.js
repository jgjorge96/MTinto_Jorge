import React, { useState}  from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import { CartView } from './components/CartView/CartView';
import { Checkout } from './components/Checkout/Checkout';
import { Landing } from './components/Landing/Landing';
import { Footer } from './components/Footer/Footer';

function App() {

  

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/shop" element= {<ItemListContainer/>} />
          <Route path="/category/:categoryId" element= {<ItemListContainer/>} />
          <Route path="/item/:idVino" element= {<ItemDetailContainer/>} />
          <Route path="/cart" element= {<CartView/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
