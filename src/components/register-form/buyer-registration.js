import React, { useState } from 'react';
import validation from './validation';
import { useDispatch } from 'react-redux';
import './form.css';

import { Link } from 'react-router-dom';

export const BuyerRegistration = () => {
    const [userDetails, setUserDetails] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        phoneNumber: null,
        role: 'buyer',
    });

    const [errors, setErrors] = useState({});

    const [touched, setTouchedFields] = useState({
        email: false,
        password: false,
        confirmPassword: false,
        phoneNumber: false,
    });

    const resetInputFields = () => {
        setTouchedFields({
            email: false,
            password: false,
            confirmPassword: false,
            phoneNumber: false,
        });
        setUserDetails({
            email: null,
            password: null,
            confirmPassword: null,
            phoneNumber: null,
        });
    };

    const handleChange = e => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };
    const handleValidations = e => {
        setTouchedFields({
            ...touched,
            [e.target.name]: true,
        });
        setErrors(validation(userDetails, e.target['name']));
    };

    const dispatch = useDispatch();

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: {
                id: new Date().getTime(),
                email: userDetails.email,
                password: userDetails.password,
                confirmPassword: userDetails.confirmPassword,
                phoneNumber: userDetails.phoneNumber,
                role: 'buyer',
            },
        });
        setIsSubmit(true);
        resetInputFields();
    };

    return (
        <div className="register-form">
            {Object.keys(errors).length === 0 && isSubmit ? (
                <div className="success-page">
                    <h3>Successfully Registered</h3>
                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to="/buyer-login"
                        className="success-page-link"
                    >
                        Login as Buyer
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3>Buyer Registration</h3>

                    <div className="form-inputs">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            onKeyUp={handleChange}
                            onBlur={handleValidations}
                        />
                        <div style={{ height: '36px' }}>
                            {touched.email && errors.email && (
                                <p>{errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div className="form-inputs">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={userDetails.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            onKeyUp={handleChange}
                            onBlur={handleValidations}
                        />{' '}
                        <div style={{ height: '36px' }}>
                            {touched.password && errors.password && (
                                <p>{errors.password}</p>
                            )}
                        </div>
                    </div>

                    <div className="form-inputs">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={userDetails.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            onKeyUp={handleChange}
                            onBlur={handleValidations}
                        />{' '}
                        <div style={{ height: '36px' }}>
                            {touched.confirmPassword &&
                                errors.confirmPassword && (
                                    <p>{errors.confirmPassword}</p>
                                )}
                        </div>
                    </div>

                    <div className="form-inputs">
                        <label>Phone Number</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={userDetails.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            onKeyUp={handleChange}
                            onBlur={handleValidations}
                        />{' '}
                        <div style={{ height: '36px' }}>
                            {touched.phoneNumber && errors.phoneNumber && (
                                <p>{errors.phoneNumber}</p>
                            )}
                        </div>
                    </div>

                    <button
                        variant="primary"
                        type="submit"
                        disabled={
                            Object.keys(errors).length !== 0 ||
                            !userDetails.email ||
                            !userDetails.password ||
                            !userDetails.confirmPassword ||
                            !userDetails.phoneNumber
                        }
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};
