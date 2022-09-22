import { legacy_createStore as createStore } from 'redux'

const intitialState = {
  users: [],
  loggedInUser: false,
  cartdetails:[],
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

    case 'ADD_TO_CART':
      return {
        ...state,
        cartdetails:[...state.cartdetails,action.payload],
      }
      case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartdetails:[...state.cartdetails,action.payload],
      }

    default:
      return state
  }
}

export default createStore(reducer)
