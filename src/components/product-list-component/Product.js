import React from 'react'
import { useSelector } from 'react-redux'
import  PropTypes  from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = props => {
  const image = props.image
  const category = props.category
  const price = props.price

  const showPrice = useSelector(state => {
      return state.loggedInUser
  })

  Product.propTypes = {
      image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
  }
  return (
    <div className="col-md-4 custom-product" data-testid={'product'}>
        <img className="img" src={image} alt="products" />
        <br className="img-gap"></br>
        <div className="product-label">
            <div className="category">{category}</div>

            {showPrice ? (
                <div className="price">
                    <FontAwesomeIcon
                        icon={faIndianRupee}
                        className="ruppee"
                    />
                    {price}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    </div>
)
}

export default Product
