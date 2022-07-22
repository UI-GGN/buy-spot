import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { faL } from '@fortawesome/free-solid-svg-icons'

export const BuyerLogin = () => {
  const [values, setValues] = useState({
    email: undefined,
    password: undefined,
  })

  const [errors, setErrors] = useState({})
  const [isValid, setValidUser] = useState(true)

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setErrors(validation(values, e.target['name']))
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const verifyExistingUser = () => {
    const payload = !!users.find(
      (user) =>
        user.email === values.email && user.password === values.password,
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

  const validation = (values, name) => {
    let errors = {}

    if (name === 'email') {
      if (!values.email) {
        errors.email = 'Email is required'
      }
    }

    if (name === 'password') {
      if (!values.password) {
        errors.password = 'Password is required'
      }
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyExistingUser()
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h3>Buyer Login</h3>

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
          Login
        </button>
      </form>
    </div>
  )
}
