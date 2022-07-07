import React from "react";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
  return (

    <Card className="col-md-4 custom-card">
      <Card.Img variant="top" src={props.image} className="card-img-height" />
      <Card.Body className="card-body">
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