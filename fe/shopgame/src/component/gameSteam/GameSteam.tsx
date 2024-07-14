import React, { useState } from "react"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import './style.css'

import { CartItem, ProductItem } from "../Pdata"


// Định nghĩa kiểu cho các props của FlashCard
interface GameSteamProps {
    produceSteams: ProductItem[];
    addToCart: (product: CartItem) => void;
    
}

const GameSteam: React.FC<GameSteamProps> = ({ produceSteams, addToCart}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    const handleProductClick = (product: ProductItem) => {
        addToCart({...product, qty: 1})
        
    };


    const [products, setProducts] = useState(produceSteams);

    return (
        <>
            <div className="top__game">
                <h1 className="top__game--title">
                    GameeSteam
                </h1>
               
            </div>
            <div className="center__game">
                <div className="f-grid">

                    {products.map((product) => {
                        return (
                            <>
                                <div className='box f-grid-col'>

                                    <div className='product mtop'>
                                        <Link to={`/productDetail/${product.id}`}>
                                            <div className='img'>
                                                <span className='discount'>{product.discount}% Off</span>
                                                <img className="cover__gameOff" src={product.cover} alt='' />
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
                                                <h4>${product.price}.00 </h4>
                                                <button onClick={() => handleProductClick(product)}>
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
                </div>
            </div>


        </>
    )
}

export default GameSteam