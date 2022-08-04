export const loginValidation = (fromInputValues) => {
  const errors = {}

    if (!fromInputValues.email) {
      errors.email = 'Email is required';
  }


    if (!fromInputValues.password) {
      errors.password = 'Password is required';
    } 
    return errors
}  
