import React from 'react'
import './product-description.component.css';

export const ProductDescription = (props) => {

    return (

        <main className="container">

            {/* <!-- Left Column / Headphones Image --> */}
            <div className="left-column">
                <img  src={props.images}  />
            </div>


            {/* <!-- Right Column --> */}
            <div className="right-column">

                {/* <!-- Product Description --> */}
                <img src={props.image} alt="products" className="img" />
          <div className="product-label">
            <div className="category">{props.category}</div>
            <div className="price">
              {props.price}
            </div>
          </div>
                <div className="product-description">
                    <span>Headphones</span>
                    <h1>Beats EP</h1>
                    <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                </div>


                {/* <!-- Product Pricing --> */}
                <div className="product-price">
                    <span>148${props.price}</span>
                    <a href="#" class="cart-btn">Add to cart</a>
                </div>
            </div>
        </main>
    )
}



