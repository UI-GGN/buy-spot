export const loginValidation = (fromInputValues, name) => {
  const errors = {}

  if (name === 'email') {
    if (!fromInputValues.email) {
      errors.email = 'Email is required';
  }
  }

  if (name === 'password') {
    if (!fromInputValues.password) {
      errors.password = 'Password is required';
    } 
  }
     
    return errors
}  
