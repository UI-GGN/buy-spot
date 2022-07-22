import React, { useState } from 'react'
<<<<<<< HEAD
import { useForm } from 'react-hook-form'
import './Form.css'

export const BuyerRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm()

  const [userInfo, setUserInfo] = useState()

  const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data)
    let buyerData = JSON.stringify(userInfo, undefined, 2)
    console.log(buyerData)
=======
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
>>>>>>> 922a5927ab63762d2b46fde3538fbfd663f70518
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

<<<<<<< HEAD
        <div className="form-inputs">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: 'Password is Required',
              minLength: {
                value: 8,
                message: 'Password must be atleast 8 characters',
              },
              maxLength: {
                value: 15,
                message: 'Password must not exceed 15 characters',
              },
            })}
            onKeyUp={() => {
              trigger('password')
            }}
          />{' '}
          <div style={{ height: '30px' }}>
            {errors.password && <p>{errors.password.message}</p>}
=======
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
>>>>>>> 922a5927ab63762d2b46fde3538fbfd663f70518
          </div>

<<<<<<< HEAD
        <div className="form-inputs">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', {
              required: 'Password is Required',
              validate: {
                confirmPassword: (value) =>
                  value === getValues().password || 'Passwords do not match!',
              },
            })}
            onKeyUp={() => {
              trigger('confirmPassword')
            }}
          />{' '}
          <div style={{ height: '30px' }}>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
=======
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
>>>>>>> 922a5927ab63762d2b46fde3538fbfd663f70518
          </div>

<<<<<<< HEAD
        <div className="form-inputs">
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Phone Number"
            {...register('phoneNumber', {
              required: 'Phone Number is Required',
              minLength: {
                value: 10,
                message: 'Phone Number must be 10 characters',
              },
              maxLength: {
                value: 10,
                message: 'Phone Number must be 10 characters',
              },
            })}
            onKeyUp={() => {
              trigger('phoneNumber')
            }}
          />{' '}
          <div style={{ height: '30px' }}>
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </div>
        </div>

        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
=======
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
>>>>>>> 922a5927ab63762d2b46fde3538fbfd663f70518
    </div>
  )
}
