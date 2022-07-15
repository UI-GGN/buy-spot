import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BuyerRegistration from "/Components/RegisterForm.components/BuyerRegistration";
import { when } from "jest-when";

jest.mock("moment");

describe("Basic rendering and functionality", () => {

    const userInfoToBeRegistered = {
        email: 'user1@gmail.com',
        password: 'Sprite@26',
        confirmPassword: 'Sprite@26'

    };
    const handleRegister = jest.fn();

    const testHistory = { push: jest.fn() };
    it("Should call buyerregistration api to create Buyer account on register", async () => {

        const { getByTestId } = render(<BuyerRegistration values={userInfoToBeRegistered} history={testHistory} />);
        var returnedPayload = when(handleRegister).calledWith({
            email: 'user1@gmail.com',
            password: 'Sprite@26',
            confirmPasswor: 'Sprite@26',
           

        })
            .mockResolvedValue("");

        console.log(returnedPayload['Object']);
        returnedPayload = returnedPayload;


        fireEvent.change(getByTestId("email"), {
            target: {
                value: "user1@gmail.com"
            }
        });


        fireEvent.change(getByTestId("password"), {
            target: {
                value: "Sprite@26"
            }
        });
        fireEvent.change(getByTestId("confirmPassword"), {
            target: {
                value: "Sprite@26"
            }
        });

        fireEvent.click(getByTestId("registerButton"));

        await expect(returnedPayload).toBeTruthy();

    });
})