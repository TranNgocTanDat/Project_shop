import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Định nghĩa kiểu cho SampleNextArrow và SamplePrevArrow
interface ArrowProps {
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

function Test() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderSlides = () => {
    return Array(4).fill(null).map((_, index) => (
      <div className="box" key={index}>
        <div className="product mtop">
          <div className="img">
            <span className="discount">% Off</span>
            <img className="img__flash" src="" alt="" />
            <div className="product-like">
              <label>{count}</label> <br />
              <i className="fa-regular fa-heart" onClick={increment}></i>
            </div>
            <div className="product-details">
              <h3></h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>$00</h4>
                <button>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Slider {...settings}>
        {renderSlides()}
      </Slider>
    </>
  );
}

export default Test;