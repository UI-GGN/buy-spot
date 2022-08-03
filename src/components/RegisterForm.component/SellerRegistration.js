import React, {useState} from 'react'
import './Form.css'
import validation from "./Validation";
import {useDispatch} from "react-redux";

import {Link} from "react-router-dom";

export const SellerRegistration = () => {
    const [userDetails, setUserDetails] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        phoneNumber: null,
        role: "seller"
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        })
    }
    const handleValidations = (e) => {
        setErrors(validation(userDetails, e.target['name']))
    }

    const dispatch = useDispatch()

    const [isSubmit, setIsSubmit] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'REGISTER',
            payload: {
                id: new Date().getTime(),
                email: userDetails.email,
                password: userDetails.password,
                confirmPassword: userDetails.confirmPassword,
                phoneNumber: userDetails.phoneNumber,
                role: "seller"
            },
        })
        setIsSubmit(true)
    }
    return (
        <div className="register-form">
            {Object.keys(errors).length === 0 && isSubmit ? (
                <div className="success-page">
                    <h3>Successfully Registered</h3>
                    <Link
                        style={{textDecoration: 'none', color: 'white'}}
                        to="/seller-login"
                        className="success-page-link"
                    >
                        Login as Seller
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3>Seller Registration</h3>

                    <div className="form-inputs">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            onKeyUp={handleChange}
                            autoComplete="off"
                            onBlur={handleValidations}
                        />
                        <div style={{height: '36px'}}>
                            {errors.email && <p>{errors.email}</p>}
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
                            autoComplete="off"
                            onBlur={handleValidations}
                        />{' '}
                        <div style={{height: '36px'}}>
                            {errors.password && <p>{errors.password}</p>}
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
                            autoComplete="off"
                            onBlur={handleValidations}
                        />{' '}
                        <div style={{height: '36px'}}>
                            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
                            autoComplete="off"
                            onBlur={handleValidations}
                        />{' '}
                        <div style={{height: '36px'}}>
                            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
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
    )
}
