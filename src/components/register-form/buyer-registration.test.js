import React from 'react'
import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import { BuyerRegistration } from './buyer-registration'
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event'

const mockState = {
    users: [],
    loggedInUser: false,
}

const mockStore = configureStore()
const store = mockStore(mockState)

describe('Buyer Registration Components', () => {
    describe(' should render all the input fields and button inside form', () => {
        test('Email field should be truthy', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )
            const emailField = screen.getByPlaceholderText('Enter email')
            expect(emailField).toBeTruthy()
        })

        test('Password field should be truthy', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )
            const passwordField = screen.getByPlaceholderText('Enter Password')
            expect(passwordField).toBeTruthy()
        })

        test('Confirm Password field should be truthy', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )
            const confirmPasswordField =
                screen.getByPlaceholderText('Confirm Password')
            expect(confirmPasswordField).toBeTruthy()
        })

        test('Phone Number field should be truthy', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )
            const phoneNumberField = screen.getByPlaceholderText('Phone Number')
            expect(phoneNumberField).toBeTruthy()
        })
    })

    describe('Validate Input Fields', () => {
        test('should show error for Invalid password', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )

            const passwordField = screen.getByPlaceholderText('Enter Password')
            userEvent.type(passwordField, 'Abcd1234')
            fireEvent.focusOut(passwordField)
            const errorMessage = screen.getByText(
                'Password must contain at least 8 characaters, 1 small letter, 1 capital letter, 1 symbol, max 15 characters',
            )
            expect(errorMessage).toBeInTheDocument()
        })

        test('should show error for Invalid email', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )

            const emailField = screen.getByPlaceholderText('Enter email')
            userEvent.type(emailField, 'xyzgmailcom')
            fireEvent.focusOut(emailField)
            const errorMessage = screen.getByText('Invalid email address')
            expect(errorMessage).toBeInTheDocument()
        })

        test('should show error for invalid PhoneNumber', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )
            const phonenumberField = screen.getByPlaceholderText('Phone Number')
            userEvent.type(phonenumberField, '1234567')
            fireEvent.focusOut(phonenumberField)
            const errorMessage = screen.getByText(
                'Phone number must contain 10 characters',
            )
            expect(errorMessage).toBeInTheDocument()
        })

        test('should show error for password and confirm password unmatched', () => {
            render(
                <Provider store={store}>
                    <BuyerRegistration />
                </Provider>,
            )
            const passwordField = screen.getByPlaceholderText('Enter Password')
            const confirmPasswordField =
                screen.getByPlaceholderText('Confirm Password')
            userEvent.type(passwordField, 'Abcd1234')
            userEvent.type(confirmPasswordField, 'Abcd@1234')
            fireEvent.focusOut(confirmPasswordField)
            const errorMessage = screen.getByText('Passwords do not match')
            expect(errorMessage).toBeInTheDocument()
        })

        // xtest('Should Register successfully on submit button', () => {
        //
        //     render(<Provider store={store}>
        //         <BuyerRegistration/>
        //     </Provider>);
        //     expect(handlesubmit()).toBeCalled();
        // })
    })
})
