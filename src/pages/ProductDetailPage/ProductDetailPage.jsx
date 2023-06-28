import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProductById() {
            const product = await getProduct(productId);
            setProduct(product);
        }
        getProductById();
    }, []);


  return (
    <div>ProductDetailPage</div>
  )
}

export default ProductDetailPage