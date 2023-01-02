import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout/Layout';
import Cart from './components/Cart/Cart/Cart';
import Products from './components/Shop/Products/Products';

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
