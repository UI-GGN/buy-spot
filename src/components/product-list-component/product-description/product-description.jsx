import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import './product-description.css';
import Rating from './Rating';
import Footer from '../../footer-component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { AiFillCheckCircle } from 'react-icons/ai';
import { NavLink } from 'react-bootstrap';

export const ProductDescription = () => {
    const [productdetails, setProductDetails] = useState([]);
    const [buttonText, setButtonText] = useState('Add to cart');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const dispatch = useDispatch();

    const { productId } = useParams();

    const cart = useSelector(state => state.cartdetails);

    const getProductdetails = async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`,
        );

        setProductDetails(await response.json());
    };

    useEffect(() => {
        getProductdetails();
    }, []);

    const handleClick = () => {
        setButtonText('Product Added');
        setIsShown(true);
        setTimeout(() => {
            setIsShown(false);
        }, 2000);
        setIsDisabled(true);

        dispatch({
            type: 'ADD_TO_CART',
            payload: productdetails,
        });
    };

    const check = id => {
        return id in cart.productId;
    };
    console.log(check);

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
                        <NavLink
                            style={{ color: 'white' }}
                            as={Link}
                            to="/products"
                        >
                            <Button variant="contained">
                                Back to Products
                            </Button>
                        </NavLink>

                        <Button
                            variant="contained"
                            color="secondary"
                            disabled={isDisabled}
                            onClick={handleClick}
                        >
                            {buttonText}
                        </Button>

                        {isShown && (
                            <div className="my-toast">
                                <h3>
                                    <AiFillCheckCircle color="green" />
                                    Product Added to Cart
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
