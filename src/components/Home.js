import React from 'react';
import BannerSlider from './banner-component/Bannerslider.js';
import './banner-component/Bannerslider.css';
import ProductList from './product-list-component/ProductList.js';
import './product-list-component/ProductList.css';
import Footer from './footer-component/Footer.js';
import './footer-component/Footer.css';



export const Home = () => {
  return (
    <div>
      <BannerSlider />
      <ProductList />
      <Footer />
    </div>
  )
}
