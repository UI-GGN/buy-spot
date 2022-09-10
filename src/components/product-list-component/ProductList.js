import React from 'react';
import Product from './Product';
import './Product.css';
import PropTypes from 'prop-types';

const ProductList = ({ productData }) => {
    ProductList.propTypes = {
        productData: PropTypes.array.isRequired,
    };

    return (
        <div className="product-list" data-testid="product-list">
            <div className="featured-products">Featured Products</div>
            <div className="product-container">
                <div className="product-inner-container">
                    {productData?.map(curProduct => {
                        return (
                            <Product key={curProduct.id} product={curProduct} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
