import React from 'react';
import './banner-component/Bannerslider.css';
import ProductList from './product-list-component/ProductList.js';
import './product-list-component/ProductList.css';
import Footer from './footer-component/Footer.js';
import './footer-component/Footer.css';
import PropTypes from 'prop-types';

export const Search = props => {
    const productData = props.productData;
    Search.propTypes = {
        productData: PropTypes.array.isRequired,
    };
    return (
        <div>
            <ProductList productData={productData} />
            <Footer />
        </div>
    );
};
