import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginValidation } from './loginValidation'

export const SellerLogin = () => {
  const [values, setValues] = useState({
    email: undefined,
    password: undefined,
    role: 'seller',
  })

  const [errors, setErrors] = useState({})
  const [isValid, setValidUser] = useState(true)

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setErrors(loginValidation(values, e.target['name']))
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const verifyExistingUser = () => {
    const payload = !!users.find(
      (user) =>
        user.email === values.email && user.password === values.password && user.role === values.role,
    )

    if (payload) {
      dispatch({
        type: 'LOGIN',
        payload: payload,
      })
      navigate('/')
    } else {
      setValidUser(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyExistingUser()
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h3>Seller Login</h3>

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
          <div style={{ height: '30px' }}>
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
          />
          <div style={{ height: '30px' }}>
            {errors.password && <p>{errors.password}</p>}
            {isValid ? (
              <div className="hidden"></div>
            ) : (
              <p>Please enter valid credentials</p>
            )}
          </div>
        </div>

        <button
          variant="primary"
          type="submit"
          disabled={
            Object.keys(errors).length !== 0 ||
            !values.email ||
            !values.password 
          }
        >
          Submit
        </button>
      </form>
    </div>
  )
}
