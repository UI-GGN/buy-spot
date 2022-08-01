import React from 'react'
import './product-description.component.css';


export const ProductDescription = (props) => {
    
    return (
        <div class="container">
            {/* Left Column / product Image */}
            <div class="left-column">
                <img src={props.image} alt="product-image" />
            </div>


            {/* Right Column */}
            <div class="right-column">

                {/* <!-- Product Description -->*/}
                <div class="product-description">
                    <p>
                        <br>Name :{props.category}</br>
                        <br>Price:{props.price} </br>
                    </p>
                </div>

                {/*  <!-- Product Pricing --> */}
                <div class="product-price">
                    <h2>{props.price} </h2>
                    <a href="#" class="cart-btn">Add to cart</a>
                </div>
            </div>
        </div>
    )
}



