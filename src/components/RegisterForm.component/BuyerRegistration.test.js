import { Provider } from 'react-redux';
import { toBeInvalid, toBeValid } from '@testing-library/jest-dom/dist/matchers';
import { getByRole, getByTestId, render, screen } from '@testing-library/react'
import { fireEvent, waitFor } from "@testing-library/react";
import { BuyerRegistration } from './BuyerRegistration'
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { Button } from 'bootstrap';

const mockState = {
    users: [],
    loggedInUser: false,
}

const mockStore = configureStore();
const store = mockStore(mockState);

describe('Buyer Registration Components', () => {

    describe(' should render all the input fields and button inside form', () => {
        test('Email field should be truthy', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const emailField = screen.getByPlaceholderText('Enter email');
            expect(emailField).toBeTruthy();
        })

        test('Password field should be truthy', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const passwordField = screen.getByPlaceholderText('Enter Password');
            expect(passwordField).toBeTruthy();
        })

        test('Confirm Password field should be truthy', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const confirmPasswordField = screen.getByPlaceholderText('Confirm Password');
            expect(confirmPasswordField).toBeTruthy();
        })

        test('Phone Number field should be truthy', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const phoneNumberField = screen.getByPlaceholderText('Phone Number');
            expect(phoneNumberField).toBeTruthy();
        })
    })

    describe('Validate Input Fields', () => {
        test('should show error for Invalid password', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);

            const passwordField = screen.getByPlaceholderText('Enter Password');
            userEvent.type(passwordField, 'Abcd1234')
            const errorMessage = screen.getByText('Password must contain at least 8 characaters, 1 small letter, 1 capital letter, 1 symbol'
            );
            expect(errorMessage).toBeInTheDocument();
        })

        test('should show error for Password greater than 15', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const passwordField = screen.getByPlaceholderText('Enter Password');
            userEvent.type(passwordField, 'Abcd@23467890932')
            const errorMessage = screen.getByText('Password must not contain more than 15 characters');
            expect(errorMessage).toBeInTheDocument();
        })

        test('should show error for Invalid email', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);

            const emailField = screen.getByPlaceholderText('Enter email');
            userEvent.type(emailField, 'xyzgmailcom');
            const errorMessage = screen.getByText('Invalid email address');
            expect(errorMessage).toBeInTheDocument();
        })

        test('should show error for invalid PhoneNumber', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const phonenumberField = screen.getByPlaceholderText('Phone Number');
            userEvent.type(phonenumberField, '1234567')
            const errorMessage = screen.getByText('Phone number must contain 10 characters');
            expect(errorMessage).toBeInTheDocument();
        })

        test('should show error for password and confirm password unmatched', () => {
            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const passwordField = screen.getByPlaceholderText('Enter Password');
            const confirmPasswordField = screen.getByPlaceholderText('Confirm Password');
            userEvent.type(passwordField, 'Abcd1234')
            userEvent.type(confirmPasswordField, 'Abcd@1234')
            const errorMessage = screen.getByText('Passwords do not match');
            expect(errorMessage).toBeInTheDocument();
        })

        test('Should Register successfully on submit button', () => {

            render(<Provider store={store}>
                <BuyerRegistration />
            </Provider>);
            const successn = screen.getByRole(Button);
            expect(handlesubmit()).toBeCalled();

        })


    })




})




//should pass if email is not valid
xtest('should accept email if the email is not valid', () => {
    render(<BuyerRegistration />)
    const emailElement = screen.getByTestId('email');
    //expect('Invalid email address').toBeInvalid;
    expect(emailElement).toBeTruthy;
})

//Should show error if Password is not of 6 characters
xtest('should show error if Password is not of 6 characters', () => {
    render(<BuyerRegistration />)
    const passwordElement = screen.getByTestId('password');
    expect(passwordElement).toBeChecked;
})


//should show error if the password and confirm password is different 
xtest('should show error if Password and confirm password is different ', () => {
    render(<BuyerRegistration />)
    const passwordElement = screen.getByTestId('password');
    const confirmPasswordElement = screen.findAllByTestId('confirmpassword');
    //passwordElement.matches(confirmPasswordElement) ? expect(toBeValid) : expect(toBeInvalid);
    expect(toBeInvalid);
})

{/* Testing using mock  */ }

it("renders user data", async () => {
    const fakeuser = {
        email: 'xyz@gmail.com',
        password: 'Abcd@1234',
        confirmpassword: 'Abcd@1234'
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>

        Promise.resolve({
            json: () => Promise.resolve(fakeuser)
        }))
});









