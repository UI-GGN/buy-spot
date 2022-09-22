import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Dropdown
} from "react-bootstrap";
import { Link} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

const CartonHeader = () => {
    const cart = useSelector(state => state.cartdetails);
    const lengthofcart= cart.length;
    const dispatch=useDispatch();
  return (
    <div>
        <Dropdown >
            <Dropdown.Toggle >
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{ lengthofcart}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {lengthofcart > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/Cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}

export default CartonHeader
