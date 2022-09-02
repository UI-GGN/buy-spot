import { legacy_createStore as createStore } from 'redux'

const intitialState = {
  users: [],
  loggedInUser: false,
  cartdetails:[],
  count: 0
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
        cartdetails:[...state.cartdetails,action.details],
        count:state.count + 1,
      }
      case 'UPDATE_CART':
      return {
        ...state,
        cartdetails: [...state.cartdetails,action.details],
        count:state.count + 1,
      }

    default:
      return state
  }
}

export default createStore(reducer)
