import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {GamePlayItem} from "./gamePlayData";
import './style.css'



// Định nghĩa kiểu cho product item

// Định nghĩa kiểu cho các props của FlashCard
interface GamePlayProps {
    gamePlayItem1: GamePlayItem[];
    gamePlayItem2: GamePlayItem[];
    addToCart: (product: GamePlayItem) => void;
}


const GamePlay: React.FC<GamePlayProps> = ({ gamePlayItem1,gamePlayItem2, addToCart }) => {
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
                    Game Playstation
                </h1>
            </div>
            <Slider {...settings}>
                {gamePlayItem1.map((gamePlayItem1) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gamePlayItem1.discount}% Off</span>
                                        <img className="cover__gamePlay" src={gamePlayItem1.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gamePlayItem1.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gamePlayItem1.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gamePlayItem1)}>
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
                {gamePlayItem2.map((gamePlayItem2) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gamePlayItem2.discount}% Off</span>
                                        <img className="cover__gamePlay" src={gamePlayItem2.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gamePlayItem2.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gamePlayItem2.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gamePlayItem2)}>
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

export default GamePlay;
