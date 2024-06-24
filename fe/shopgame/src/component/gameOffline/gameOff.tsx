import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import {ProductOff} from "./GameoffData";



// Định nghĩa kiểu cho product item


// Định nghĩa kiểu cho các props của FlashCard
interface GameOfflineProps {
    productOffs: ProductOff[];
    productOffs1: ProductOff[];
    addToCart: (product: ProductOff) => void;
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
const GameOffline: React.FC<GameOfflineProps> = ({ productOffs,productOffs1, addToCart }) => {
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
                {productOffs.map((productOffs)=> {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{productOffs.discount}% Off</span>
                                        <img className="cover__gameOff" src={productOffs.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{productOffs.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${productOffs.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(productOffs)}>
                                                <a href="/public/gameOff.json" download="/public/gameOff.json"></a>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
            <Slider {...settings}>
                {productOffs1.map((productOffs1)=> {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{productOffs1.discount}% Off</span>
                                        <img className="cover__gameOff" src={productOffs1.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{productOffs1.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${productOffs1.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(productOffs1)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default GameOffline