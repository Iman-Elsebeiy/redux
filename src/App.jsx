import './App.css'
import Products from './components/products'
import Details from './components/details'
import Cart from './components/cart'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        {/* LOGIN */}
        <Route path="/Login" element={<Login />} />

        {/* HOME (optional protected or public) */}
        <Route path="/" element={<Home />} />

        {/* PRODUCTS (PROTECTED) */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        {/* DETAILS */}
        <Route
          path="/product/details/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
