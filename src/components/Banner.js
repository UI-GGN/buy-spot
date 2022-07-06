import React from "react";
import { BannerImage } from "../data/productdata";

const Banner = () => {
	return (
		<div className="banner-container">
			<img className="banner-image"
			src={BannerImage}
			alt="banner-image" />
		</div>
	)
}

export default Banner;