import React, { useState } from 'react'
import validation from './Validation'
import { useDispatch, useSelector } from 'react-redux'
import './Form.css'
import { Alert } from 'react-bootstrap';

export const BuyerRegistration = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setErrors(validation(values))
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const dispatch = useDispatch()

  const [successfullyReg, setSuccessfullyReg] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(values))
    console.log(values.email)
    console.log(values.password)
    dispatch({
      type: 'REGISTER',
      payload: {
        id: new Date().getTime(),
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        phoneNumber: values.phoneNumber,
      },
    })
    setSuccessfullyReg(true)
  }
  const notify = ()=>{
   Alert("Registered Successfully");
}

  return (
    <div className="register-form">
      {successfullyReg ? (
        <div className="success-page">
          <h3>successfully registered</h3>
          <a href="/">Go to Homepage</a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Buyer Registration</h3>

          <div className="form-inputs">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              data-testId="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter email"
              onKeyUp={handleChange}
            />
            <div style={{ height: '36px' }}>
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>

          <div className="form-inputs">
            <label>Password</label>
            <input
              type="password"
              name="password"
              data-testId="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter Password"
              onKeyUp={handleChange}
            />{' '}
            <div style={{ height: '36px' }}>
              {errors.password && <p>{errors.password}</p>}
            </div>
          </div>

          <div className="form-inputs">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              data-testId="confirmpassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              onKeyUp={handleChange}
            />{' '}
            <div style={{ height: '36px' }}>
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
            <div style={{ height: '36px' }}>
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>
          </div>

          <button variant="primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}
