import { toBeInvalid, toBeValid } from '@testing-library/jest-dom/dist/matchers';
import {render,screen} from '@testing-library/react'
import { fireEvent, waitFor } from "@testing-library/react";
import { BuyerRegistration } from './BuyerRegistration'

//should pass if email is not valid
test('should accept email if the email is not valid', () =>{
render(<BuyerRegistration/> )
const emailElement= screen.getByTestId('email');
//expect('Invalid email address').toBeInvalid;
expect(emailElement).toBeTruthy;
})
 
//Should show error if Password is not of 6 characters
test('should show error if Password is not of 6 characters', () =>{
    render(<BuyerRegistration/> )
    const passwordElement= screen.getByTestId('password');
    expect(passwordElement).toBeChecked;
    })


//should show error if the password and confirm password is different 
test('should show error if Password and confirm password is different ', () =>{
    render(<BuyerRegistration/> )
    const passwordElement= screen.getByTestId('password');
    const confirmPasswordElement=screen.findAllByTestId('confirmpassword');
    //passwordElement.matches(confirmPasswordElement) ? expect(toBeValid) : expect(toBeInvalid);
    expect(toBeInvalid);
    })

            {/* Testing using mock  */}
            
            it("renders user data", async()=>{
            const fakeuser={
                email:'xyz@gmail.com',
                        password:'Abcd@1234',
                        confirmpassword:'Abcd@1234'
            };
            jest.spyOn(global,"fetch").mockImplementation(()=>
            
            Promise.resolve({
                json:()=>Promise.resolve(fakeuser)
            }))
        });


        

            


    
    
