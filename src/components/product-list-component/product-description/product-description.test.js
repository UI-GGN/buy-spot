import { ProductDescription } from "./product-description";
import {getProductDetails} from "./product-description"
import { render, screen } from '@testing-library/react';

describe('should render product-description component',()=>
{
    test('should show category of product',() =>{
        render(<ProductDescription/>);
        const descriptionField=screen.getByText(/Category/i);
        expect(descriptionField).toBeInTheDocument();
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
// describe('should check for function calls',()=>
// {
//     const productDetails =
//     {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//         "rate": 4.1,
//         "count": 259
//         }
//         }

// global.fetch=jest.fn(()=>
// {
//     Promise.resolve({
//         json:()=> Promise.json({productDetails}),
//     })
// });
// it('provide product details based on Id',async()=>{
//     const getProductDetails =await fetch('https://fakestoreapi.com/products/2');
//     expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/2');
//     expect(getProductDetails).toMatch(productDetails);
// })

// })

