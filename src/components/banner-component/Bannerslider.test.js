import { render, screen, cleanup } from '@testing-library/react';
import BannerSlider from './Bannerslider';

describe('banner-image' ,() => {
    test('should return banner-image when banner-slider rendered', () => {
    render(<BannerSlider/>);
    const banner_image1 = screen.getByRole('img');
    expect(banner_image1).toHaveAttribute('src', 'assets/bannerimg1.jpeg');
  });
});

describe('carousel',()=>{
  test('should return carousel when banner-slider rendered',()=>{
  render(<BannerSlider/>);
  const slider=screen.queryByTestId('banner-slider-carousel')
  expect(slider).toBeTruthy;
  });
});