import React from 'react';
import Product from './Product';
import './Product.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = props => {
    const search = props.search;
    ProductList.propTypes = {
        search: PropTypes.string.isRequired,
    };
    const [productdata, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        setProducts(await response.json());
        filterProducts();
    };

    const filterProducts = () => {
        console.log(productdata);
        if (search !== '') {
            const data = productdata.filter(
                product =>
                    product.category.includes(search) ||
                    product.title.includes(search),
            );
            setFilteredData(data);
        } else {
            setFilteredData(productdata);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="product-list" data-testid="product-list">
            <div className="featured-products">Featured Products</div>
            <div className="product-container">
                <div className="product-inner-container">
                    {filteredData.slice(1, 20).map(curProduct => {
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
