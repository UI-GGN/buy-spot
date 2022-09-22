import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import './product-description.css';
import Rating from './Rating';
import Footer from '../../footer-component/Footer';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

export const ProductDescription = () => {
    const [productdetails, setProductDetails] = useState([]);
   
    const dispatch = useDispatch();

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

    const handleClick = () =>
    {
        dispatch({
            type: "ADD_TO_CART",
              payload: productdetails,
             });

    }
   
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
                
                
                      <Button
                      variant="contained"
                      onClick={() =>
                       dispatch({
                      type: "REMOVE_FROM_CART",
                     payload: productdetails,
                     })
                       }
                     >
                     Wishlist
                     </Button>
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick= {handleClick}
                     >Add to Cart
                    </Button>
                     
                    </div>
                
                </div>
            </main>
            <Footer />
        </>
    )};
