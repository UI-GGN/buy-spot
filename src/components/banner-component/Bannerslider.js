import React from "react";
import Carousel from 'react-material-ui-carousel'

const BannerSlider = () => {

    const images = [
        "assets/bannerimg1.jpeg",
        "assets/bannerimg2.jpeg",
    ]


    return (

        <Carousel interval={2000} animation="slide" className="custom-banner-slider">
            {
                images.map((image , i) => <img src={image} className="banner-slider" alt="banner-slider" />)
            }
        </Carousel>
    )
}

export default BannerSlider;