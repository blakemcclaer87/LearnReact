import React, { Fragment, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout/Layout';
import Cart from './components/Cart/Cart/Cart';
import Products from './components/Shop/Products/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootStoreState } from './atore/redux-store';
import Notification from './components/UI/Noification/Notification';
import { sendCartData } from './atore/cart-slice';
import { useAppDispatch } from './atore/hooks';

let isInitial = true;

function App() {

  const dispatch      = useAppDispatch();
  const cartIsVisible = useSelector((state: RootStoreState) => state.ui.cartIsVisible);
  const cart          = useSelector((state: RootStoreState) => state.cart);
  const notification = useSelector((state: RootStoreState) => state.ui.notification);

  useEffect(() => {

    if(isInitial){
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} 
      title={notification.title} 
      message={notification.message}></Notification>}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}


export default App;

