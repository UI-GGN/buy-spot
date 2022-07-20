import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const user = "abc";
  return (
    <div className="col-md-4 custom-product" data-testid={'product'}>
      <img className="img" src={props.image} alt="products" />
      <br className="img-gap"></br>
      <div className="product-label">
        <div className="category">{props.category}</div>


   {user === 'abc' &&
        <div className="price">
          <FontAwesomeIcon icon={faIndianRupee} className="ruppee" />
          {props.price}
        </div> } 
        
      </div>
    </div>
  )
}

export default Product;