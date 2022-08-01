import { render, screen } from '@testing-library/react';
import { BuyerLogin } from './BuyerLogin';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockState = {
    users: [],
    loggedInUser: false,
}

const mockStore = configureStore();
const store = mockStore(mockState);

const mockExistingUser = () => {
    const payload = !!users.find(
        (user) =>
            user.email === values.email && user.password === values.password,
    )
}
test('should render seller login page', () => {
    render(<Provider store={store}>
        <BrowserRouter><SellerLogin /></BrowserRouter>
    </Provider>)
    const sellerLoginNode = screen.getByText('SELLER LOGIN');
    expect(sellerLoginNode).toBeTruthy();
})


describe('Buyer Login Registration Components', () => {
    describe('should render login input field components', () => {
        xtest('should render email components', () => {
            render(<Provider store={store}>
                <BrowserRouter><BuyerLogin /></BrowserRouter>
            </Provider>);
            const emailField = screen.getByPlaceholderText('Enter email');
            expect(emailField).toBeTruthy();
        })

        xtest('should render password components', () => {
            render(<Provider store={store}>
                <BrowserRouter><BuyerLogin /></BrowserRouter>
            </Provider>);
            const passwordField = screen.getByPlaceholderText('Enter Password');
            expect(passwordField).toBeTruthy();
        })

    })

    describe('should validate input fields', () => {
        xtest('should show error if email is not entered', () => {
            render(<Provider store={store}>
                <BrowserRouter><BuyerLogin /></BrowserRouter>
            </Provider>);
            const emailField = screen.getByPlaceholderText('Enter email');
            expect(emailField).toBeInTheDocument('Email is required');
        })

        xtest('should show error if password is not entered', () => {
            render(<Provider store={store}>
                <BrowserRouter><BuyerLogin /></BrowserRouter>
            </Provider>);
            const passwordField = screen.getByPlaceholderText('Enter Password');
            expect(passwordField).toBeInTheDocument('Password is required');
        })
    })


})