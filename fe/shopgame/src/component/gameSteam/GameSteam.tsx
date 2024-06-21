import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {GameSteamItem} from "./gameSteamData";




// Định nghĩa kiểu cho product item

// Định nghĩa kiểu cho các props của FlashCard
interface GamePlayProps {
    gameSteamItem1: GameSteamItem[];
    gameSteamItem2: GameSteamItem[];
    addToCart: (product: GameSteamItem) => void;
}


const GameSteam: React.FC<GamePlayProps> = ({ gameSteamItem1,gameSteamItem2, addToCart }) => {
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
                    Game Steam
                </h1>
            </div>
            <Slider {...settings}>
                {gameSteamItem1.map((gameSteamItem1) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gameSteamItem1.discount}% Off</span>
                                        <img className="cover__gamePlay" src={gameSteamItem1.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gameSteamItem1.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gameSteamItem1.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gameSteamItem1)}>
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
                {gameSteamItem2.map((gameSteamItem2) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gameSteamItem2.discount}% Off</span>
                                        <img className="cover__gamePlay" src={gameSteamItem2.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gameSteamItem2.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gameSteamItem2.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gameSteamItem2)}>
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

export default GameSteam;
