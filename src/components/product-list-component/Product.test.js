import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
    it('should render Product component', async () => {
        render(<Product />)
        const product = screen.getByTestId("product")
        expect(product).toBeInTheDocument()
    });
});