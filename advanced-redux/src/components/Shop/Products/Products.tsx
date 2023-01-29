import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import classes from './Products.module.css';

const Products = () => {
    return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      <ProductItem
          productID={1}
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
         <ProductItem
          productID={2}
          title='Test 2'
          price={9}
          description='This is a second product - amazing!'
        />
      </ul>
    </section>)
};

export default Products;