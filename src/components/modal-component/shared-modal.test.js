import {render, screen} from "@testing-library/react";
import {SharedModal} from "./shared-modal";
import React from 'react';
import {BrowserRouter} from "react-router-dom";


describe("Shared Modal components", () => {
    test("should render Login title", () => {
        render(<BrowserRouter>
                <SharedModal show={true} property={"Login"}/>
            </BrowserRouter>
        );
        const titleElement = screen.getByText("Login");
        const bodyElement = screen.getByText("You want to Login as")
        expect(titleElement).toBeInTheDocument();
        expect(bodyElement).toBeInTheDocument();
    });

    test("should render Register title", () => {
        render(<BrowserRouter>
                <SharedModal show={true} property={"Register"}/>
            </BrowserRouter>
        );
        const titleElement = screen.getByText("Register");
        const bodyElement = screen.getByText("You want to Register as")
        expect(titleElement).toBeInTheDocument();
        expect(bodyElement).toBeInTheDocument();
    });

    test("should render Buyer and Seller buttons", () => {
        render(<BrowserRouter>
                <SharedModal show={true} property={"Register"}/>
            </BrowserRouter>
        );
        const buyerButton = screen.getByTestId('buyerButton');
        const sellerButton = screen.getByTestId('sellerButton');
        expect(buyerButton).toBeInTheDocument();
        expect(sellerButton).toBeInTheDocument();
    });

});
