import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('should render footer text ', () => {
    render(<Home />);
    const textElement = screen.getByText('@BuySpot All Rights Reserved');
    expect(textElement).toBeInTheDocument();
});

test('should render banner-slider', () => {
    render(<Home />);
    const banner_image = screen.getByRole('img');
    expect(banner_image).toBeInTheDocument();
});

test('should render product-list', () => {
    render(<Home />);
    const Element = screen.getByText('Featured Products');
    expect(Element).toBeInTheDocument();
});