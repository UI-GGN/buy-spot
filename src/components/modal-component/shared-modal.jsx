import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import './shared-modal.css'

export const SharedModal = (props) => {
    const property = props.property;
    const handleCloseModal = () => props.setShow(false);

    return (
        <Modal className="shared-modal" show={props.show} onHide={handleCloseModal}>
            <Modal.Header className="modal-header border-0" closeButton>
            </Modal.Header>
            <Modal.Body className={"modal-body"}>
                <div className={"modal-body-image"}>
                    <img src={'images/modal_image.png'} style={{maxHeight: '100%', maxWidth: '100%'}}/></div>
                <div className={"modal-body-content"}>
                    <div style={{fontSize: "xx-large"}}><strong>{property}</strong></div>
                    <div style={{fontSize: "medium"}}>You want to {property} as</div>
                    <br/>
                    <Button variant="light" onClick={handleCloseModal} data-testid="buyerButton"
                            className={"modal-button-primary"}>
                        <Link
                            style={{textDecoration: "none", color: "inherit", fontSize: "18px"}}
                            to={property === "Login" ? "/buyer-login" : "/buyer-registration"}
                        >
                            Buyer
                        </Link>
                    </Button>
                    <Button variant="light" onClick={handleCloseModal} data-testid="sellerButton"
                            className={"modal-button-secondary"}>
                        <Link
                            style={{textDecoration: "none", color: "inherit", fontSize: "18px"}}
                            to={property === "Login" ? "/seller-login" : "/seller-registration"}
                        >
                            Seller
                        </Link>
                    </Button>
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-footer border-0">
            </Modal.Footer>
        </Modal>
    );
};
