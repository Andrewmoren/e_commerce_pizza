import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestiSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit
          quisquam recusandae repudiandae, tempora amet dignissimos excepturi
          labore libero eligendi fugit officiis aut nisi facilis quaerat,
          expedita odio nobis quo!
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar_img01" className=" rounded" />
          <h6>Jhon Snow</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit
          quisquam recusandae repudiandae, tempora amet dignissimos excepturi
          labore libero eligendi fugit officiis aut nisi facilis quaerat,
          expedita odio nobis quo!
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar_img02" className=" rounded" />
          <h6>Anastasia Kul</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit
          quisquam recusandae repudiandae, tempora amet dignissimos excepturi
          labore libero eligendi fugit officiis aut nisi facilis quaerat,
          expedita odio nobis quo!
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar_img03" className=" rounded" />
          <h6>Andrew Moren</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestiSlider;
