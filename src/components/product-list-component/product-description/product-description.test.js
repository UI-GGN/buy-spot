import { ProductDescription } from "./product-description";
import { render, screen } from '@testing-library/react';

describe('should render product-description component',()=>
{
    test('should show category of product',() =>{
        render(<ProductDescription/>);
        const descriptionField=screen.getByText('category');
        expect(descriptionField).toBeTruthy();
    })

    test('should show Add to cart button',() =>{
        render(<ProductDescription/>);
        const descriptionField=screen.getByText('ADD TO CART');
        expect(descriptionField).toBeTruthy();
    })

    test('should show wishlist button',() =>{
        render(<ProductDescription/>);
        const descriptionField=screen.getByText('WISHLIST');
        expect(descriptionField).toBeTruthy();
    })

})

