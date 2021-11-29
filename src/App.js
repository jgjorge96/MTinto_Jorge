import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/category/:categoryId" element= {<ItemListContainer/>} />
          <Route path="/item/:idVino" element= {<ItemDetailContainer/>} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
