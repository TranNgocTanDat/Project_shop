import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import {GameOnItem} from "./gameOnData";



// Định nghĩa kiểu cho product item

// Định nghĩa kiểu cho các props của FlashCard
interface GameOnlineProps {
    gameOnItem1: GameOnItem[];
    gameOnItem2: GameOnItem[];
    addToCart: (product: GameOnItem) => void;
}


const GameOnline: React.FC<GameOnlineProps> = ({ gameOnItem1,gameOnItem2, addToCart }) => {
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
                    Game Online
                </h1>
            </div>
            <Slider {...settings}>
                {gameOnItem1.map((gameOnItem1) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gameOnItem1.discount}% Off</span>
                                        <img className="cover__gameOn" src={gameOnItem1.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gameOnItem1.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gameOnItem1.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gameOnItem1)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div><div className='box'>

                            </div></>
                    )
                })}
            </Slider>
            <Slider {...settings}>
                {gameOnItem2.map((gameOnItem2) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gameOnItem2.discount}% Off</span>
                                        <img className="cover__gameOn" src={gameOnItem2.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gameOnItem2.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gameOnItem2.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gameOnItem2)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div><div className='box'>
                        </div></>
                    )
                })}
            </Slider>
        </>
    )
}

export default GameOnline
