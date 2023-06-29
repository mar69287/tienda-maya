import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import HomePage from '../HomePage/HomePage';
import NonUserNavBar from '../../components/NavBar/NonUserNavBar';
import ProductsPage from '../ProductsPage/ProductsPage';
import CategoryPage from '../CategoryPage/CategoryPage';
import AuthPage from '../AuthPage/AuthPage'
import UserNavBar from '../../components/NavBar/UserNavBar';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import Footer from '../../components/Footer';
import CartPage from '../CartPage/CartPage';

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState(0)

  return (
    <main className="App">
      {user ? <UserNavBar user={user} setUser={setUser} countCart={countCart} /> : <NonUserNavBar countCart={countCart} />}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage cart={cart} setCart={setCart} setCountCart={setCountCart} />} />
          <Route path="/products/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage user={user} cart={cart} setCart={setCart} setCountCart={setCountCart} />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      </Routes>
      <Footer />
    </main>
  );
}


