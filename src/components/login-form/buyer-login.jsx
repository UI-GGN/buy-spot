import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginValidation } from './login-validation';


export const BuyerLogin = () => {
  const [fromInputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [isValid, setValidUser] = useState(true);

  const [touched, setTouchedFields] =useState ({
    email: false,
    password: false,
  })
  
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValues({
      ...fromInputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation =(e) => {
    setTouchedFields({
      ...touched,
      [e.target.name]: true,
    })
    setErrors(loginValidation(fromInputValues))
  }
  
  const resetInputFields = () => {
      setTouchedFields({
      email:false,
      password:false,
    })
    setInputValues({ 
      email: '',
      password: '', 
    })
  };


  const verifyExistingUser = () => {
    const payload = !!users.find(
      (user) =>
        user.email === fromInputValues.email && user.password === fromInputValues.password && user.role ===  "buyer"
    );

    if (payload) {
      dispatch({
        type: 'LOGIN',
        payload: payload,
      })
    setValidUser(true);

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
        <h3>Buyer Login</h3>

        <div className="form-inputs">
          <label>Email address</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={fromInputValues.email}
            onChange={handleChange}
            onBlur={handleValidation}
            placeholder="Enter email"
          />
          <div style={{ height: '30px' }}>
            {touched.email && errors.email && <p>{errors.email}</p>}
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
            onBlur={handleValidation}
            placeholder="Enter Password"
          />
          <div style={{ height: '30px' }}>
            {touched.password && errors.password && <p>{errors.password}</p>}
            {isValid ? (
              <div className="hidden"></div>
            ) : (!touched.password &&
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
