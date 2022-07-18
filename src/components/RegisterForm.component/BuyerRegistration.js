import React from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'
import { Alert } from 'react-bootstrap';

export const BuyerRegistration = () => {
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
  const notify = ()=>{
   Alert("Registered Successfully");
}

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Buyer Registration</h3>

        <div className="form-input-email">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
             data-testid="email"
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
            data-testid="password"
            {...register('password', {
              required: 'Password is Required',
              inputProps:{ "data-testid": "password" },
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
            data-testid="confirmpassword"
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
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button variant="primary" type="submit" onClick={notify}>
          Submit
        </button>
      </form>
    </div>
  )
}
