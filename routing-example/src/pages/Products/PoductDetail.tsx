import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const params = useParams();

    return (
    <div>
        <p>Product Details Page</p>
        <p>{params.productID}</p>
    </div>)
};

export default ProductDetails;

