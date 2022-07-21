const validation = (values) => {
  let errors = {}

  if (
    !values.email &&
    values.confirmPassword &&
    values.phoneNumber &&
    values.password
  ) {
    errors.email = 'Email is required'
  } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password && values.confirmPassword && values.phoneNumber) {
    errors.password = 'Password is required'
  } else if (
    !/^(?=.*[a-z])+(?=.*[A-Z])+(?=.*[#$@!%&*?])+[A-Za-z\d#$@!%&*?]{8,15}$/.test(
      values.password,
    ) &&
    values.password
  ) {
    errors.password =
      'Password must contain at least 8 characaters, 1 small letter, 1 capital letter, 1 symbol'
  } else if (values.password.length > 15) {
    errors.password = 'Password must not contain more than 15 characters'
  }

  if (!values.confirmPassword && values.phoneNumber) {
    errors.confirmPassword = 'Password is required'
  } else if (
    values.confirmPassword &&
    values.confirmPassword !== values.password
  ) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (
    values.email &&
    values.password &&
    values.confirmPassword &&
    !errors.confirmPassword &&
    values.phoneNumber === ''
  ) {
    errors.phoneNumber = 'Phone number is required'
  } else if (values.phoneNumber && values.phoneNumber.length !== 10) {
    errors.phoneNumber = 'Phone number must contain 10 characters'
  }
  console.log(errors)

  return errors
}

export default validation
