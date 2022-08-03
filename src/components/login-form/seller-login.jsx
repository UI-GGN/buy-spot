import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginValidation } from './login-validation';


export const SellerLogin = () => {
  const [fromInputValues, setInputValues] = useState({
    email: null,
    password: null,
    role: 'seller',
  });

  const [errors, setErrors] = useState({});

  const [isValid, setValidUser] = useState(true);

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setErrors(loginValidation(fromInputValues, e.target['name']))
    setInputValues({
      ...fromInputValues,
      [e.target.name]: e.target.value,
    })
  };

  const resetInputFields = () => {
    setInputValues({ 
      email: '',
      password: '', 
    })
  };
 

  const verifyExistingUser = () => {
    const payload = !!users.find(
      (user) =>
        user.email === fromInputValues.email && user.password === fromInputValues.password && user.role === fromInputValues.role,
    )

    if (payload) {
      dispatch({
        type: 'LOGIN',
        payload: payload,
      })
      navigate('/')
    } 
    
    else {
      setValidUser(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyExistingUser();

    resetInputFields();
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h3>Seller Login</h3>

        <div className="form-inputs">
          <label>Email address</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={fromInputValues.email}
            onChange={handleChange}
            placeholder="Enter email"

          />
          <div style={{ height: '30px' }}>
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>

        <div className="form-inputs">
          <label>Password</label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={fromInputValues.password}
            onChange={handleChange}
            placeholder="Enter Password"
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
            !fromInputValues.email ||
            !fromInputValues.password
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
