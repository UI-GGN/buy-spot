import React, { useState } from 'react'
import validation from './Validation'
import { useDispatch } from 'react-redux'
import './Form.css'
import { Link } from 'react-router-dom'

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

  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(values))

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
    setIsSubmit(true)
  }

  return (
    <div className="register-form">
      {Object.keys(errors).length === 0 && isSubmit ? (
        <div>
          <h3>Successfully Registered</h3>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/buyer-login"
          >
            Buyer
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
