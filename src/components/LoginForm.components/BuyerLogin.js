import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import validation from '../RegisterForm.component/Validation'

export const BuyerLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setErrors(validation(values))
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
    console.log(payload)
    if (payload) {
      dispatch({
        type: 'LOGIN',
        payload: payload,
      })
      navigate('/')
    } else {
      alert('Invalid Credentials!')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(values))
    verifyExistingUser()

    console.log('handle')
    console.log('payload')
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
          </div>
        </div>

        <button variant="primary" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
