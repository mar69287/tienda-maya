import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getCategory } from "../../utilities/products-api";


const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProductsByCategory() {
            const products = await getCategory(category);
            setProducts(products);
        }
        getProductsByCategory();
    }, []);

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage