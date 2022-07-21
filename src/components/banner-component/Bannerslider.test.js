import { render, screen } from '@testing-library/react';
import BannerSlider from './Bannerslider';

describe('banner-image', () => {
  test('should render Bannerslider component', () => {
    render(<BannerSlider />);
    const banner_image1 = screen.getByRole('img');
    expect(banner_image1).toHaveAttribute('src', 'assets/bannerimg1.jpeg');
  });
});
