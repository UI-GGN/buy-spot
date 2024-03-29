const validation = values => {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(
            values.password,
        )
    ) {
        errors.password =
            'Password must contain at least 8 characaters, 1 small letter, 1 capital letter, 1 symbol, max 15 characters'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Password is required'
    } else if (
        values.confirmPassword &&
        values.confirmPassword !== values.password
    ) {
        errors.confirmPassword = 'Passwords do not match'
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone number is required'
    } else if (values.phoneNumber && values.phoneNumber.length !== 10) {
        errors.phoneNumber = 'Phone number must contain 10 characters'
    }

    return errors
}

export default validation
