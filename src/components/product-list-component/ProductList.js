import React from "react";
import Product from "./Product";
import './Product.css';
import { useEffect, useState } from "react";

const ProductList = () => {

    const [productdata, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        setProducts(await response.json())
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="product-list">
            <div className="featured-products"> Featured Products </div>
            <div className="product-container">
                <div className="product-inner-container">
                    {
                        productdata.map((curProduct) => {
                            return (
                                <Product category={curProduct.category} image={curProduct.image} price={curProduct.price} id={curProduct.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList;