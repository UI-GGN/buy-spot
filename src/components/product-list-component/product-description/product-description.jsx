import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './product-description.css';
import Rating from './Rating';
import Footer from '../../footer-component/Footer';
export const ProductDescription = () => {
    const [productdetails, setProductDetails] = useState([]);

    const { productId } = useParams();

    const getProductdetails = async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`,
        );

        setProductDetails(await response.json());
    };

    useEffect(() => {
        getProductdetails();
    }, []);

    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(true);
    };

    return (
        <>
            <main className="description-container">
                <div className="left-column">
                    <img
                        src={productdetails.image}
                        alt="products"
                        className="img"
                        width="600px"
                        height="600px"
                    />
                </div>
                <div className="right-column">
                    <div className="product-label">
                        <div className="title">
                            <h2>{productdetails.title}</h2>
                        </div>
                        <div className="product-rating">
                            <h6>
                                Rating :
                                <Rating
                                    maxRating={productdetails?.rating?.rate}
                                />
                                {
                                    <span>
                                        {' '}
                                        {productdetails?.rating?.count} customer
                                        reviews{' '}
                                    </span>
                                }
                            </h6>
                        </div>
                        <div className="product-price">
                            <span>
                                <FontAwesomeIcon
                                    icon={faIndianRupee}
                                    className="descruppee"
                                />
                                {productdetails.price}
                            </span>
                        </div>
                    </div>
                    <div className="product-description">
                        <p>Category: {productdetails.category}</p>
                        <p> {productdetails.description}</p>
                    </div>

                    <div>
                        <button onClick={handleClick} className="cart-btn">
                            <AiOutlineShoppingCart />
                            ADD TO CART
                        </button>
                        <button className="wishlist-btn">
                            <AiOutlineHeart />
                            WISHLIST
                        </button>
                        {isShown && (
                            <div className="add-to-cart">
                                <h2>Product added to Cart</h2>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
