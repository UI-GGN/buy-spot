import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {SellerRegistration} from "./SellerRegistration";
import configureStore from "redux-mock-store";


const mockState = {
    users: [],
    loggedInUser: false,
}
const mockStore = configureStore();
const store = mockStore(mockState);


describe('Seller Registration Components', () => {

    describe('should render all the input fields and button inside form', () => {
        test('Email field should be truthy', () => {
            render(<Provider store={store}>
                <SellerRegistration/>
            </Provider>);
            const emailField = screen.getByPlaceholderText('Enter email');
            expect(emailField).toBeTruthy();
        })
    })
})