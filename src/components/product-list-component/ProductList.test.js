import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test('should render ProductList component', () => {
    render(<ProductList search={'input'} />);
    const linkElement = screen.getByText('Featured Products');
    expect(linkElement).toBeInTheDocument();
});
