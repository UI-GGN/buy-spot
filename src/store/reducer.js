import { legacy_createStore as createStore } from 'redux'

const intitialState = {
  users: [
    {
      'id': '1',
      'email': 'sree1@gmail.com',
      'password': 'Qwerty345%',
      'confirmPassword': 'Qwerty345%',
      'phoneNumber': '1234567890',
      'role': 'seller'
    }
  ],
  loggedInUser: false,
}

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        users: [...state.users, action.payload],
      }

    case 'LOGIN':
      return {
        ...state,
        loggedInUser: action.payload,
      }

    case 'LOGOUT':
      return {
        ...state,
        loggedInUser: action.payload,
      }

    default:
      return state
  }
}

export default createStore(reducer)
