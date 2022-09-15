import React, { useState } from 'react'
import validation from './validation'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './form.css'

export const BuyerRegistration = () => {
  const [userDetails, setUserDetails] = useState({
    email: null,
    password: null,
    confirmPassword: null,
    phoneNumber: null,
    role: "buyer"
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [touched, setTouchedFields] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    phoneNumber: false
  });

  const resetInputFields = () => {
    setTouchedFields({
      email: false,
      password: false,
      confirmPassword: false,
      phoneNumber: false
    })
    setUserDetails({
      email: null,
      password: null,
      confirmPassword: null,
      phoneNumber: null
    })
  };


  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    })
  };

  const handleValidations = (e) => {
    setTouchedFields({
      ...touched, [e.target.name]: true,
    })
    setErrors(validation(userDetails, e.target['name']))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'REGISTER',
      payload: {
        role:"buyer"
      },
    })
    setIsSubmit(true);
    navigate('/');
    resetInputFields();
  };

  return (
    <div className="register-form">
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
              autoComplete = 'off'
              onBlur={handleValidations}
            />
            <div style={{ height: '36px' }}>
              {touched.email && errors.email && <p>{errors.email}</p>}
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
              autoComplete = 'off'
              onBlur={handleValidations}
            />{' '}
            <div style={{ height: '36px' }}>
              {touched.password && errors.password && <p>{errors.password}</p>}
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
              autoComplete = 'off'
              onBlur={handleValidations}
            />{' '}
            <div style={{ height: '36px' }}>
              {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
              autoComplete = 'off'
              onBlur={handleValidations}
            />{' '}
            <div style={{ height: '36px' }}>
              {touched.phoneNumber && errors.phoneNumber && <p>{errors.phoneNumber}</p>}
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
          { isSubmit ? handleSubmit : '' }
        </form>
    </div>
  )
}
