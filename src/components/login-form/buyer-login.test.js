import React from 'react'
import { render, screen } from '@testing-library/react'
import { BuyerLogin } from './buyer-login'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockState = {
    users: [],
    loggedInUser: false,
}

const mockStore = configureStore()
const store = mockStore(mockState)

describe('Buyer Login Registration Components', () => {
    describe('should render login input field components', () => {
        test('should render email components', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <BuyerLogin />
                    </BrowserRouter>
                </Provider>,
            )
            const emailField = screen.getByPlaceholderText('Enter email')
            expect(emailField).toBeTruthy()
        })

        test('should render password components', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <BuyerLogin />
                    </BrowserRouter>
                </Provider>,
            )
            const passwordField = screen.getByPlaceholderText('Enter Password')
            expect(passwordField).toBeTruthy()
        })
    })

    describe('should validate input fields', () => {
        test('should show error if email is not entered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <BuyerLogin />
                    </BrowserRouter>
                </Provider>,
            )
            const emailField = screen.getByPlaceholderText('Enter email')
            expect(emailField).toBeInTheDocument('Email is required')
        })

        test('should show error if password is not entered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <BuyerLogin />
                    </BrowserRouter>
                </Provider>,
            )
            const passwordField = screen.getByPlaceholderText('Enter Password')
            expect(passwordField).toBeInTheDocument('Password is required')
        })
    })
})
