import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'


// Định nghĩa kiểu cho product item
interface ProductItem {
    id: number;
    name: string;
    cover: string;
    price: number;
    discount: number;
}

// Định nghĩa kiểu cho các props của FlashCard
interface GameOfflineProps {
    productItems: ProductItem[];
    addToCart: (product: ProductItem) => void;
}

// // Định nghĩa kiểu cho SampleNextArrow và SamplePrevArrow
// interface ArrowProps {
//   onClick?: () => void;
// }


// const SampleNextArrow: React.FC<ArrowProps> = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='next'>
//         <i className='fa fa-long-arrow-alt-right'></i>
//       </button>
//     </div>
//   )
// }
// const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='prev'>
//         <i className='fa fa-long-arrow-alt-left'></i>
//       </button>
//     </div>
//   )
// }
const GameOffline: React.FC<GameOfflineProps> = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const settings = {
        // dots: false,
        // infinite: true,
        // speed: 500,
        slidesToShow: 5,

        // slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    }

    return (
        <>
            <div className="top__game">
                <h1 className="top__game--title">
                    Game Offline
                </h1>
            </div>
            <Slider {...settings}>
                {productItems.map((productItems) => {
                    return (
                        <>

                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{productItems.discount}% Off</span>
                                        <img src={productItems.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{productItems.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${productItems.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(productItems)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div><div className='box'>

                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{productItems.discount}% Off</span>
                                        <img src={productItems.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{productItems.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${productItems.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(productItems)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div></>
                    )
                })}
            </Slider>
        </>
    )
}

export default GameOffline