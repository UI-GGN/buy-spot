import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} className="card-img-height" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        <FontAwesomeIcon icon={faIndianRupee} />
         
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default Product;