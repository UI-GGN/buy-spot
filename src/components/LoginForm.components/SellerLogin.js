import React from 'react'
import { useForm } from 'react-hook-form'

export const SellerLogin = () => {
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
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Seller Login</h3>

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
                value: 6,
                message: 'Password need to be 6 characters',
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

        <button variant="primary" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
