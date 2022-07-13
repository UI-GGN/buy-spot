import React from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'

export const SellerRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    value,
    pattern,
    trigger,
    getValues,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Seller Registration</h3>

        <div className="form-input-email">
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
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form-input-set-password">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: 'Password is Required',
              minLength: {
                value: 6,
                message: 'Password need to be 6 characters',
              },
            })}
            onKeyUp={() => {
              trigger('password')
            }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="form-input-confirm-password">
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
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <div className="form-input-phone-number">
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
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </div>
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}