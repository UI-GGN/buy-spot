import React from "react";
import Button from 'react-bootstrap/Button'

const Footerbanner = () => {
    return (
        <div className="container-fluid footer-banner">
            <div className="row">
                <div className="col-md-4">
                    <h1>New lookbook</h1>
                    <Button variant="outline-light" size="lg">Buy Now</Button>
                </div>
            </div>

        </div>
    )
}

export default Footerbanner;