import React from "react";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerComponent = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    
      const images = [
        'https://bizweb.dktcdn.net/100/449/944/themes/855700/assets/slider_1.jpg?1705392652885',
        'https://bizweb.dktcdn.net/100/449/944/themes/855700/assets/slider_1.jpg?1705392652885',
      ];
    
      return (
        <div className=" max-w-7xl mx-auto py-5">
          <Slider {...settings}>
            {images.map((image, index) => (
              <a key={index} className="" href="/collections">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-72 rounded-xl" />
              </a>
            ))}
          </Slider>
        </div>
      );
}
export default BannerComponent