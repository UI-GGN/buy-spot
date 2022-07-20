import { cleanup, render, screen } from '@testing-library/react';
import Footer from './Footer';

afterEach(cleanup);

test('should return footer text when footer rendered', () => {
  render(<Footer />);
  const linkElement = screen.getByText("@BuySpot All Rights Reserved");
  expect(linkElement).toBeInTheDocument();
});