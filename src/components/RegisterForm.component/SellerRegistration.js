import React, {useState} from 'react'
import './Form.css'
import validation from "./Validation";
import {useDispatch} from "react-redux";

import {Link} from "react-router-dom";

export const SellerRegistration = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        role: "seller"
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setErrors(validation(values, e.target['name']))
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        console.log(errors)
    }

    const dispatch = useDispatch()

    const [isSubmit, setIsSubmit] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'REGISTER',
            payload: {
                id: new Date().getTime(),
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
                phoneNumber: values.phoneNumber,
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
            ):(
            <form onSubmit={handleSubmit}>
            <h3>Seller Registration</h3>

            <div className="form-inputs">
                <label>Email address</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    onKeyUp={handleChange}
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
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    onKeyUp={handleChange}
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
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    onKeyUp={handleChange}
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
                    value={values.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    onKeyUp={handleChange}
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
                        !values.email ||
                        !values.password ||
                        !values.confirmPassword ||
                        !values.phoneNumber
                    }
                >
                    Submit
                </button>
        </form>
                )}
</div>
)
}
