import React from 'react'
import Cart from './Cart';
import { render, screen } from '@testing-library/react';

describe('should render Cart component',()=>
{
    test('should show Subtotal of product',() =>{
        render(<Cart/>);
        const totalitemsField=screen.getByText(/Subtotal/i);
        expect(totalitemsField).toBeInTheDocument();
    })

    test('should show Proceed to checkout button',() =>{
        render(<Cart/>);
        const checkoutButton=screen.getByText(/Proceed to Checkout/i);
        expect(checkoutButton).toBeTruthy();
    })

})

