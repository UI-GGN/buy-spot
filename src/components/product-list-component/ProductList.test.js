import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test('should return footer featured products text when ProductList rendered', () => {
  render(<ProductList />);
  const linkElement = screen.getByText('Featured Products');
  expect(linkElement).toBeInTheDocument();
});