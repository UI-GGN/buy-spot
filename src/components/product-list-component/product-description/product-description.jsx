import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./product-description.css";
import Rating from "./Rating";

export const ProductDescription = () => {
  const [productdetails, setProductDetails] = useState([]);
  const { productId } = useParams();
  const getProductdetails = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProductDetails(await response.json());
  };

  useEffect(() => {
    getProductdetails();
  }, []);

  return (
    <main className="description-container">
      {/* <!-- Left Column /  Image --> */}
      <div className="left-column">
        <img
          src={productdetails.image}
          alt="products"
          className="img"
          width="600px"
          height="600px"
        />
      </div>

      {/* <!-- Right Column --> */}
      <div className="right-column">
        {/* <!-- Product Description Top --> */}

        <div className="product-label">
          <div className="title">
            <h2>{productdetails.title}</h2>
          </div>

          {/* <!-- Product Rating--> */}
          <div className="product-rating">
            <h6>
              Rating :<Rating maxRating={productdetails?.rating?.rate} />
              {<span> {productdetails?.rating?.count} customer reviews </span>}
            </h6>
          </div>
          {/*  */}
          {/* <!-- Product Pricing --> */}
          <div className="product-price">
            <span>
              <FontAwesomeIcon icon={faIndianRupee} className="descruppee" />
              {productdetails.price}
            </span>
          </div>
        </div>

        {/* <!-- Product Describe --> */}

        <div className="product-description">
          <p>Category: {productdetails.category}</p>
          <p> {productdetails.description}</p>
        </div>

        <div>
          <a href="/addtocart" class="cart-btn">
            <AiOutlineShoppingCart />
            ADD TO CART
          </a>
          <a href="/wishlist" class="wishlist-btn">
            <AiOutlineHeart />
            WISHLIST
          </a>
        </div>
      </div>
    </main>
  );
};
