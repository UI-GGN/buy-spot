import { legacy_createStore as createStore } from 'redux';

const intitialState = {
    users: [],
    loggedInUser: false,
};

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case 'LOGIN':
            return {
                ...state,
                loggedInUser: action.payload,
            };

        case 'LOGOUT':
            return {
                ...state,
                loggedInUser: action.payload,
            };

        default:
            return state;
    }
};

export default createStore(reducer);
