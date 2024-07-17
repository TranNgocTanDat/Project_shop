import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CartItem, ProductItem } from "../Pdata"
import { Link } from "react-router-dom"

// Định nghĩa kiểu cho các props của FlashCard
interface FlashCardProps {
  productItems: ProductItem[];
  addToCart: (product: CartItem) => void;
}

// Định nghĩa kiểu cho SampleNextArrow và SamplePrevArrow
interface ArrowProps {
  onClick?: () => void;
}


const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
export const FlashCard: React.FC<FlashCardProps> = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }

  const handleProductClick = (product: ProductItem) => {
    addToCart({ ...product, qty: 1 })

  };

  const [products, setProducts] = useState(productItems);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div className='box' >
              <div className='product mtop'>
                <Link to={`/productDetail/${product.id}`}>
                <div className='img'>
                  <span className='discount'>{product.discount}% Off</span>
                  <img className="img__flash" src={product.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                </Link>
                <div className='product-details'>
                  <h3>{product.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${product.price}$ </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => handleProductClick(product)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>



              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

