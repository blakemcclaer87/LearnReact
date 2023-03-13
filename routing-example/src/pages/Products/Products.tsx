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
        </div>
    );
};

export default Products;
