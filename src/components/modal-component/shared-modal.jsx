import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './shared-modal.css'

export const SharedModal = (props) => {
  const property = props.property;
  const handleCloseModal = () => props.setShow(false);
  const checkLocation = window.location.pathname === "/";

  return (
    <Modal className="shared-modal" show={props.show} onHide={handleCloseModal}>
        <Modal.Header
            className={checkLocation ? "modal-header modal-primary border-0" : "modal-header modal-secondary border-0"}
            closeButton closeVariant='white'>
        <Modal.Title>{property}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">You want to {property} as</Modal.Body>
      <Modal.Footer className= {checkLocation ? "modal-footer-primary": "modal-footer-secondary"}>
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
