export const loginValidation = (values, name) => {
    let errors = {}
    if (name === 'email') {
      if (!values.email) {
        errors.email = 'Email is required'
      }
    }

    if (name === 'password') {
      if (!values.password) {
        errors.password = 'Password is required'
      }
    }

    return errors
}


