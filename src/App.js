import React, { useState}  from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import { CartView } from './components/CartView/CartView';

function App() {

  

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/category/:categoryId" element= {<ItemListContainer/>} />
          <Route path="/item/:idVino" element= {<ItemDetailContainer/>} />
          <Route path="/cart" element= {<CartView/>} />
        </Routes>
      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
