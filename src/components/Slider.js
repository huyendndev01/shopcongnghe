import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://shopcongnghe.com.vn/wp-content/uploads/banner-mc-M1.jpg" />
      </div>
      <div>
        <img src="https://shopcongnghe.com.vn/wp-content/uploads/Dell-XPS-9310.jpg" />
      </div>
      <div>
        <img src="https://shopcongnghe.com.vn/wp-content/uploads/thinkb-1.jpg" />
      </div>
      <div>
        <img src="https://shopcongnghe.com.vn/wp-content/uploads/Surface-Pro-8-1536x554.jpg" />
      </div>
    </Slider>
  );
}
