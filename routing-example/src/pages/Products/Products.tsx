import { Link } from "react-router-dom";

const Products = ( )=> {
    return (
        <div>
            <h1>
                Prducts Page
            </h1>
            <p>
                Go to <Link to='/'>hme.</Link>
            </p>
            <ul>
                <li><Link to='/products/product-1'>Product 1</Link></li>
                <li><Link to='/products/product-2'>Product 2</Link></li>
                <li><Link to='/products/product-3'>Product 3</Link></li>
            </ul>
        </div>
    );
};

export default Products;
