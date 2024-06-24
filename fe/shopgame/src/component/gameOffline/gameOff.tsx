import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import { Link } from "react-router-dom"
import { ProductOff } from "./GameoffData";
import { RootState, useAppDispatch, useAppSelector } from '../../store/Store';
import { addCart, loadProduct } from "../../store/Action"





export const Test: React.FC = () => {
    const products = useAppSelector((state: RootState) => state.products);

    const dispatch = useAppDispatch();
    const handleAddToCart = (product: ProductOff) => {
        dispatch(addCart([(product)]));
    };

    return (<div>

        <div className="row">
            {products.map(product => (
                <GameOffline key={product.id}
                    productOffs={[product]}
                    productOffs1={[product]}
                    addToCart={handleAddToCart}
                />
            ))}
        </div>
    </div>
    );
}


// Định nghĩa kiểu cho các props của FlashCard
interface GameOfflineProps {
    productOffs: ProductOff[];
    productOffs1: ProductOff[];
    addToCart: (product: ProductOff) => void;
}

const GameOffline: React.FC<GameOfflineProps> = ({ productOffs, productOffs1, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const dispatch = useAppDispatch();

    const handleProductClick = (product: ProductOff) => {
        dispatch(loadProduct([product]));
    };
    

    const [products, setProducts] = useState(productOffs);
    const [products1, setProducts1] = useState(productOffs1);

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
                {products.map((product) => {
                    return (
                        <>
                            <div className='box'>
                                <Link to={`/v/${product.id}`}>
                                    <div className='product mtop'>
                                        <div className='img'>
                                            <span className='discount'>{product.discount}% Off</span>
                                            <img className="cover__gameOff" src={product.cover} alt='' />
                                            <div className='product-like'>
                                                <label>{count}</label> <br />
                                                <i className='fa-regular fa-heart' onClick={increment}></i>
                                            </div>
                                        </div>
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
                                                {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                                <button onClick={() => addToCart(product)}>
                                                    <a href="/public/gameOff.json" download="/public/gameOff.json"></a>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </Slider>
            <Slider {...settings}>
                {products1.map((product) => {
                    return (
                        <>
                            <div className='box'>
                                <Link to={`/v/${product.id}`}>
                                    <div className='product mtop'>
                                        <div className='img'>
                                            <span className='discount'>{product.discount}% Off</span>
                                            <img className="cover__gameOff" src={product.cover} alt='' />
                                            <div className='product-like'>
                                                <label>{count}</label> <br />
                                                <i className='fa-regular fa-heart' onClick={increment}></i>
                                            </div>
                                        </div>
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
                                                {/* step : 3
     if hami le button ma click garryo bahne
    */}
                                                <button onClick={() => addToCart(product)}>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default GameOffline