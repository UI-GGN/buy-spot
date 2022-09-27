import React from 'react';
import Product from './Product';
import './Product.css';
import PropTypes from 'prop-types';

const ProductList = ({ productData }) => {
    const productLength = productData?.length === 0;
    ProductList.propTypes = {
        productData: PropTypes.array.isRequired,
    };
    const success = 'Featured Products';
    const failure = 'No Products found';

    return (
        <div className="product-list" data-testid="product-list">
            <div className="featured-products">
                {' '}
                {productLength ? failure : success}
            </div>
            <div className="product-container">
                <div className="product-inner-container">
                    {productData?.slice(0, 18).map(curProduct => {
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
