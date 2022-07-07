import React from "react";
import Product from "./Product";
import PRODUCT from "../data/productdata";

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="featured-products"> Featured Products </div>
            <div className="product-container container">
                <div className="product-inner-container row">
                    {
                        PRODUCT.map(product => {
                            return (
                                <Product name={product.name} image={product.image} price={product.price} id={product.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ProductList;