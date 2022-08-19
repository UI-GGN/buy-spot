import React from "react";
import Carousel from "react-material-ui-carousel";

const BannerSlider = () => {
  const images = ["assets/bannerimg1.jpeg", "assets/bannerimg2.jpeg"];
  return (
    <Carousel
      interval={2000}
      animation='slide'
      className='custom-banner-slider'
      data-testid='banner-slider-carousel'
    >
      {images.map((image, i) => (
        <img key={i} src={image} className='banner-slider' alt='test-img' />
      ))}
    </Carousel>
  );
};

export default BannerSlider;
