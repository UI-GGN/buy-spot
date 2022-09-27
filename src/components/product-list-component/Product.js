import React from 'react'
import { useSelector } from 'react-redux'
import  PropTypes  from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = product => {
  const showPrice = useSelector(state => {
      return state.loggedInUser
  })
  
  return (
    <div className="col-md-4 custom-product" data-testid={'product'}>
      <Link to={'product/' + product.product.id} className="product-page-link">
        <img className="img" src={product.product.image} alt="products" />
        <br className="img-gap"></br>
        <div className="product-label"  >
            <div className="category">{product.product.category}</div>

            {showPrice ? (
                <div className="price">
                    <FontAwesomeIcon
                        icon={faIndianRupee}
                        className="ruppee"
                    />
                    {product.product.price}
                </div>
            ) : (
                <div></div>
            )}
        </div>
        </Link>
    </div>
)
}
Product.propTypes = {
  product:PropTypes.object.isRequired ,
}

export default Product
