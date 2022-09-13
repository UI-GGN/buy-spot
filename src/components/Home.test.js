import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('should render footer text ', () => {
    render(<Home search={'input'} />);
    const textElement = screen.getByText('@BuySpot All Rights Reserved');
    expect(textElement).toBeInTheDocument();
});

test('should render banner-slider', () => {
    render(<Home search={'input'} />);
    const banner_image = screen.getByRole('img');
    expect(banner_image).toBeInTheDocument();
});

test('should render product-list', () => {
    render(<Home search={'input'} />);
    const Element = screen.getByText('Featured Products');
    expect(Element).toBeInTheDocument();
});
