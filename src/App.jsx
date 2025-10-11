import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { seedProducts } from './utils/seedProducts';
import './App.css';

function App() {

 // useEffect(() => {
 //   seedProducts();
 // }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greeting="Bienvenidos a M.A.G. Soluciones Integrales" />} 
          />
          <Route 
            path="/category/:categoryId" 
            element={<ItemListContainer greeting="Productos por Categoría" />} 
          />
          <Route 
            path="/item/:itemId" 
            element={<ItemDetailContainer />} 
          />
          <Route
            path='/cart'
            element={<Cart/>}
          />
          <Route
            path='/checkout'
            element={<Checkout />}
          />
          <Route
            path="/about" 
            element={<div className="page-container"><h1>Sobre Nosotros</h1><p>Página en construcción...</p></div>} 
          /> 
          <Route 
            path="/presupuestos" 
            element={<div className="page-container"><h1>Presupuestos</h1><p>Página en construcción...</p></div>} 
          />
          <Route 
            path="/contact" 
            element={<div className="page-container"><h1>Contacto</h1><p>Página en construcción...</p></div>} 
          />
          <Route 
            path="*" 
            element={<div className="page-container"><h1>404 - Página no encontrada</h1></div>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;