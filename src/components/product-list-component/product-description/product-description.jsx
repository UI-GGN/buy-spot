import React from 'react'
import { useState, useEffect } from 'react';
import Product from '../Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'

import './product-description.css';

export const ProductDescription = (props) => {

    const [productdetails, setProductDetails] = useState([]);
    const getProductdetails = async () => {
        const response = await fetch('https://fakestoreapi.com/products/2');
        setProductDetails(await response.json())
    }

    useEffect(() => {
        getProductdetails();
    }, []);

    return (
        <main className="container">
            
            {/* <!-- Left Column /  Image --> */}
            <div className="left-column">
                <img src={productdetails.images} alt="products" className="img" />
            </div>

            {/* <!-- Right Column --> */}
            <div className="right-column">

                {/* <!-- Product Description --> */}
                <div className="product-label">
                    <div className="category">
                       <span><h1>{productdetails.category}</h1></span> 
                    </div>
                    <div className="title">
                        <h2>{productdetails.title}</h2>
                    </div>
                </div>

                <div className="product-description">
                    <p>{productdetails.description}</p>
                </div>

                {/* <!-- Product Pricing --> */}
                <div className="price">
                    <FontAwesomeIcon icon={faIndianRupee} className="ruppee" />
                    {productdetails.price}
                </div>
                <a href="#" class="cart-btn">Add to cart</a>
            </div>
        </main >
    )
}



