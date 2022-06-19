import React from 'react';
import './App.css';
import Meals from './components/Menu/Meals/Meals';
import Header from './components/ui/Header/Header';
import { CartContextProvider } from './store/CartContext/CartContext';

function App() {
  return (
    <CartContextProvider>
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
    </CartContextProvider>
  );
}

export default App;
