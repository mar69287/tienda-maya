import { useEffect, useState } from "react";
import { getProducts, getCategory, searchProducts } from "../../utilities/products-api";
import AboutCard from '../../components/AboutCard';
import BenefitsGrid from '../../components/BenefitsGrid';
import Footer from '../../components/Footer';
import HeroCarousel from '../../components/HeroCarousel';
import NewItemsCard from "../../components/NewItemsCard";

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      async function getAll() {
          const products = await getProducts()
          setProducts(products)
      }
      getAll()
  }, [])

  return (
    <>
      <HeroCarousel />
      <NewItemsCard products={products} />
      <BenefitsGrid />
      <AboutCard />
      <Footer />
    </>
  );
};

export default HomePage;
