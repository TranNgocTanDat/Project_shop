import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import './style.css'
import {GameMobleItem} from "./gameMobleData";



// Định nghĩa kiểu cho product item

// Định nghĩa kiểu cho các props của FlashCard
interface GameOnlineProps {
    gameMobleItem1: GameMobleItem[];
    gameMobleItem2: GameMobleItem[];
    addToCart: (product: GameMobleItem) => void;
}


const GameMoble: React.FC<GameOnlineProps> = ({ gameMobleItem1,gameMobleItem2, addToCart }) => {
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
                    Game Mobile
                </h1>
            </div>
            <Slider {...settings}>
                {gameMobleItem1.map((gameMobleItem1) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gameMobleItem1.discount}% Off</span>
                                        <img className="cover__gameOn" src={gameMobleItem1.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gameMobleItem1.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gameMobleItem1.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gameMobleItem1)}>
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
                {gameMobleItem2.map((gameMobleItem2) => {
                    return (
                        <>
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{gameMobleItem2.discount}% Off</span>
                                        <img className="cover__gameOn" src={gameMobleItem2.cover} alt='' />
                                        <div className='product-like'>
                                            <label>{count}</label> <br />
                                            <i className='fa-regular fa-heart' onClick={increment}></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h3>{gameMobleItem2.name}</h3>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <div className='price'>
                                            <h4>${gameMobleItem2.price}.00 </h4>
                                            {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                            <button onClick={() => addToCart(gameMobleItem2)}>
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

export default GameMoble;
