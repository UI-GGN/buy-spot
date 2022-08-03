import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './shared-modal.css'

export const SharedModal = (props) => {
  const property = props.property;
  const handleCloseModal = () => props.setShow(false);

  return (
    <Modal className="shared-modal" show={props.show} onHide={handleCloseModal}>
      <Modal.Header className="modal-header border-0" closeButton >
        <Modal.Title>{property}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">You want to {property} as</Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="light" onClick={handleCloseModal} data-testid="buyerButton" >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={property === "Login" ? "/buyer-login" : "/buyer-registration"}
          >
            Buyer
          </Link>
        </Button>
        <Button variant="light" onClick={handleCloseModal} data-testid="sellerButton">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={property === "Login" ? "/seller-login" : "/seller-registration"}
          >
            Seller
          </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
