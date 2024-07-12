import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import { Link } from "react-router-dom"

import { RootState, useAppDispatch, useAppSelector } from '../../store/Store';
import { addCart, loadProduct } from "../../store/Action"
import { ProductItem } from "../Pdata"
import { useSelector } from "react-redux"







export const Test: React.FC = () => {
    const products = useAppSelector((state: RootState) => state.products);
    // const cart = useAppSelector((state: RootState) => state.cart);

    const dispatch = useAppDispatch();
    const handleAddToCart = (product: ProductItem) => {
        dispatch(addCart([(product)]));
    };

    return (<div>

        <div className="row">
            {products.map(product => (
                <GameOffline key={product.id}
                    productOffs={[product]}
                    addToCart={handleAddToCart}
                />
            ))}
        </div>
    </div>
    );
}


// Định nghĩa kiểu cho các props của FlashCard
interface GameOfflineProps {
    productOffs: ProductItem[];
    addToCart: (product: ProductItem) => void;
}

const GameOffline: React.FC<GameOfflineProps> = ({ productOffs, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const dispatch = useAppDispatch();

    const handleProductClick = (product: ProductItem) => {
        dispatch(addCart([product]));
        addToCart(product)
    };


    const [products, setProducts] = useState(productOffs);

    return (
        <>
            <div className="top__game">
                <h1 className="top__game--title">
                    Game Offline
                </h1>
               
            </div>
            <div className="center__game">
                <div className="f-grid">

                    {products.map((product) => {
                        return (
                            <>
                                <div className='box f-grid-col'>

                                    <div className='product mtop'>
                                        <Link to={`/v/${product.id}`}>
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

export default GameOffline