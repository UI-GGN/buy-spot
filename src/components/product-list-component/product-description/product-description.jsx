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
import { useDispatch, useSelector } from 'react-redux';
export const ProductDescription = () => {
    const [productdetails, setProductDetails] = useState([]);
    const cart = useSelector(state => state.cartdetails);
    const count = useSelector(state => state.count);

    console.log('cart===>', cart);

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

    const [isShown, setIsShown] = useState(false);
    const [isRemove, setIsRemove] = useState(false);
    const handleClick = () => {
        const status = verifyExistingProduct();
        console.log("status====>",status);
        if (!status) {
            dispatch({
                type: 'ADD_TO_CART',
                details: {
                    id: productdetails.id,
                    title: productdetails.title,
                    price: productdetails.price,
                    quantity: count + 1,
                },
            });
            setIsShown(true);
        }
            else{
                dispatch({
                    type: 'UPDATE_CART',
                    details: {
                        id: productdetails.id,
                        title: productdetails.title,
                        price: productdetails.price,
                        quantity: count + 1,
                    },
                });
                setIsRemove(true);
            }
        }   

    const verifyExistingProduct = () => {
        const details = !!cart.find(
            productdetails => productdetails.id === cart[0].id,
        );
        console.log("verifyexisting====>",details);
        return details;
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
                            <div className="add_to_cart">
                                <p className="display">Product added to cart</p>
                            </div>
                        )}
                        {isRemove && (
                            <div>
                                <p>Replace the product in cart</p>
                                <button className="remove-btn">
                                    Replace the product in cart
                                </button>
                                <button className="remove-btn">Cancel</button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
