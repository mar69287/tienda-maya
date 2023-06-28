import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import HomePage from '../HomePage/HomePage';
import NonUserNavBar from '../../components/NavBar/NonUserNavBar';
import ProductsPage from '../ProductsPage/ProductsPage';
import CategoryPage from '../CategoryPage/CategoryPage';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {/* {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      } */}
      <NonUserNavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:category" element={<CategoryPage />} />
      </Routes>
    </main>
  );
}


