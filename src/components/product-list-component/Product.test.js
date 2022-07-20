import { render, screen} from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
    it('should render product component', async () => {
        render(<Product/>)
        const product = screen.getByTestId("product")
        expect(product).toBeInTheDocument()
    });
});