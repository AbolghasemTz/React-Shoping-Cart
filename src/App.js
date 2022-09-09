import Footer from './layout/Footer';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
