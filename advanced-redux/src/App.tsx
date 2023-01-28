import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout/Layout';
import Cart from './components/Cart/Cart/Cart';
import Products from './components/Shop/Products/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootStoreState } from './atore/redux-store';

function App() {

  const cartIsVisible = useSelector((state: RootStoreState) => state.ui.cartIsVisible);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
