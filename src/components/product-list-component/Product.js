import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = (key, curProduct) => {
  const showPrice = useSelector((state) => {
    return state.loggedInUser
  })
  const showProductPage = useSelector((state) => {
    return state.loggedInUser
  })
 

  return (
    <div className="col-md-4 custom-product" data-testid={'product'}>
      {showProductPage ? (
        <Link to={'product/' + key} className="product-page-link">
          <div
            className="col-md-4 custom-product"
            data-testid={'product'}
          >
            
          </div>
          <img src={curProduct.image} alt="products" className="img" />
          <div className="product-label">
            <div className="category">{curProduct.category}</div>
            <div className="price">
              <FontAwesomeIcon icon={faIndianRupee} className="ruppee" />
              {curProduct.price}
            </div>
          </div>
        </Link>
      ) : (
        <div className="col-md-4 custom-product" data-testid={'product'}>
          <img className="img" src={curProduct.image} alt="products" />
          <br className="img-gap"></br>
          <div className="product-label">
            <div className="category">{curProduct.category}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
