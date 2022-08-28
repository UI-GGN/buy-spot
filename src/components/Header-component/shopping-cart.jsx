import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge, Nav } from 'react-bootstrap'
import {FiShoppingCart} from 'react-icons/fi'


const shoppingcart = () => {
  return (
    <Nav style={{ color: 'white' }}>
      <Dropdown alignright>
        <Dropdown.Toggle variant='success'>
        <FiShoppingCart />
          <Badge>{10}</Badge>
        </Dropdown.Toggle>
      </Dropdown>
                </Nav>
  )
}

export default shoppingcart