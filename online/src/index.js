import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import scss
import './scss/navbar.scss';
import './scss/homepage.scss';
import './scss/productpage.scss';
import './scss/footer.scss';
import './scss/shoppage/shoppage.scss';
import './scss/login.scss';
import './scss/shopcart.scss';
import './scss/asidebrand.scss';
import './scss/heart.scss';
import './scss/RWD_style.scss';
//import jsx
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import ShopPage from './Pages/ShopPage';
import Navbar from './Pages/Components/Navbar';
import Login from './Pages/Login';
import ShopCart from './Pages/ShopCart.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Project-React/" element={<HomePage />} />
        <Route path="/Project-React/productPage" element={<ProductPage />} />
        <Route path="/Project-React/shopPage" element={<ShopPage />} />
        <Route path="/Project-React/login" element={<Login />} />
        <Route path="/Project-React/shopCart" element={<ShopCart />} />
        {/* <Route path="hot" element={<HotPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
