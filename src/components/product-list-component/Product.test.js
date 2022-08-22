import React from 'react'
import { render, screen } from '@testing-library/react'
import Product from './Product'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockState = {
    users: [],
    loggedInUser: false,
}

const mockStore = configureStore()
const store = mockStore(mockState)

describe('Product', () => {
    it('should render Product component', async () => {
        render(
            <Provider store={store}>
                <Product />
            </Provider>,
        )
        const product = screen.getByTestId('product')
        expect(product).toBeInTheDocument()
    })
})
