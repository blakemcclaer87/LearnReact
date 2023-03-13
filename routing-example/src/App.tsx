import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Root from './pages/Root/Root';

const router = createBrowserRouter([
  { path: '/',
    element: <Root/>,
    children: [
      { path: '/', element: <Home/>},
      { path: '/Products', element: <Products/>}
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
