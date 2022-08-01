import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SharedModal = (props) => {
  const property = props.property;
  const handleCloseModal = () => props.setShow(false);

  return (
    <Modal className="shared-modal" show={props.show} onHide={handleCloseModal}>
      <Modal.Header class=" border-0" closeButton>
        <Modal.Title>{property}</Modal.Title>
      </Modal.Header>
      <Modal.Body>You want to {property} as</Modal.Body>
      <Modal.Footer class="modal-footer border-0">
        <Button variant="light" onClick={handleCloseModal}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={property === "Login" ? "/buyer-login" : "/buyer-registration"}
          >
            Buyer
          </Link>
        </Button>
        <Button variant="light" onClick={handleCloseModal}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={property === "Login" ? "/seller-login" : "/seller-registration"}
          >
            Seller
          </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
