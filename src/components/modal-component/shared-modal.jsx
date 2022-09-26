import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './shared-modal.css';
import PropTypes from 'prop-types';

export const SharedModal = props => {
    const property = props.property;
    const show = props.show;
    const setShow = props.setShow;
    const handleCloseModal = () => setShow(false);

    SharedModal.propTypes = {
        property: PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        setShow: PropTypes.func.isRequired,
    };

    return (
        <Modal className="shared-modal" show={show} onHide={handleCloseModal}>
            <div className={'shared-modal-design'}>
                <Modal.Header
                    className="modal-header border-0"
                    closeButton
                ></Modal.Header>
                <Modal.Body className={'modal-body'}>
                    <img
                        alt="test-img-2"
                        src={
                            property === 'Login'
                                ? 'images/login_image.png'
                                : 'images/register_image.png'
                        }
                        style={{ maxHeight: '10%', maxWidth: '10%' }}
                    />
                    <div className={'modal-body-content'}>
                        <div style={{ fontSize: 'xx-large' }}>{property}</div>
                        <div style={{ fontSize: 'medium' }}>
                            You want to {property} as
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer border-0">
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            fontSize: '18px',
                        }}
                        to={
                            property === 'Login'
                                ? '/buyer-login'
                                : '/buyer-registration'
                        }
                    >
                        <Button
                            variant="light"
                            onClick={handleCloseModal}
                            data-testid="buyerButton"
                            className={'modal-button-primary'}
                        >
                            Buyer
                        </Button>
                    </Link>

                    <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                fontSize: '18px',
                            }}
                            to={
                                property === 'Login'
                                    ? '/seller-login'
                                    : '/seller-registration'
                            }
                    >
                        <Button
                            variant="light"
                            onClick={handleCloseModal}
                            data-testid="sellerButton"
                            className={'modal-button-secondary'}
                        >  
                            Seller
                        </Button>
                    </Link>
                </Modal.Footer>
            </div>
        </Modal>
    );
};
