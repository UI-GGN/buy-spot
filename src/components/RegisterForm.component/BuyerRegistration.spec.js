import {render,screen} from '@testing-library/react'
import { fireEvent, waitFor } from "@testing-library/react";
import { BuyerRegistration } from './BuyerRegistration'
//import {when} from "jest-when"

 it('should render Buyer registration page',async () => {
render(<BuyerRegistration/>)
const headingElement = screen.getByText(/Buyer Registration/i);
expect(headingElement).toBeInTheDocument();

})

it('should get textbox role in registration form',async () => {
    render(<BuyerRegistration/>)
    const formElement = screen.getByRole("textbox");
    expect(formElement).toBeInTheDocument();
    
    })

    it('should get by placeholdertext',async () => {
        render(<BuyerRegistration/>)
        const formElement = screen.getByPlaceholderText("Enter email");
        expect(formElement).toBeInTheDocument();
        
        })

        it('should get by testID',async () => {
            render(<BuyerRegistration/>)
            const emailElement = screen.getByTestId("email");
            expect(emailElement).toBeInTheDocument();
            
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

{/*
            describe("basic rendering and functionality", ()=>{
                it("Should call register service api to create account on register", async () => {
                    const userInfoToBeRegistered={
                        email:'xyz@gmail.com',
                        password:'Abcd@1234',
                        confirmpassword:'Abcd@1234'
                    };
                    const handleRegister = jest.fn();
                    const testHistory={push:jest.fn()};

                    const { getByTestId } = render(<BuyerRegistration values={userInfoToBeRegistered} history={testHistory} />);
                    var returnedPayload = when(handleSubmit(onsubmit)).calledWith({
                        email: 'xyz@gmail.com',
                        password: 'Abcd@1234',
                        reenterPassword: 'Abcd@1234'
            
                    })
                        .mockResolvedValue("");
            
                    console.log(returnedPayload['Object']);
                    returnedPayload = returnedPayload;
            
            
                    fireEvent.change(getByTestId("email"), {
                        target: {
                            value: "xyz@gmail.com"
                        }
                    });
            
                    fireEvent.change(getByTestId("password"), {
                        target: {
                            value: "Abcd@1234"
                        }
                    });
                    fireEvent.change(getByTestId("confirmPassword"), {
                        target: {
                            value: "Abcd@1234"
                        }
                    });
            
                    fireEvent.click(getByTestId("register"));
            
                    await expect(returnedPayload).toBeTruthy();
            
                });
            })
        */}
        

            


    
    
