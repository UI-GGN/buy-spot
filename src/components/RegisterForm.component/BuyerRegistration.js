import React, { useState } from 'react'
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
  }

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Seller Registration</h3>

        <div className="form-inputs">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register('email', {
              required: 'Email is Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            onKeyUp={() => {
              trigger('email')
            }}
          />
          <div style={{ height: '30px' }}>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>

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
          </div>
        </div>

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
              // minLength: {
              //   value: 6,
              //   message: 'Password need to be 6 characters',
              // },
            })}
            onKeyUp={() => {
              trigger('confirmPassword')
            }}
          />{' '}
          <div style={{ height: '30px' }}>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <div className="form-inputs">
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Phone Number"
            {...register('phoneNumber', {
              required: 'Phone Number is Required',
              minLength: {
                value: 6,
                message: 'Phone Number need to be 10 characters',
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
    </div>
  )
}
