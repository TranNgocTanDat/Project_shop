import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import { ProductItem } from "../Pdata";
import { RootState } from "../../store/Store";

// Định nghĩa kiểu cho các props của FlashCard
interface GameOfflineProps {
    productItems: ProductItem[];
    addToCart: (product: ProductItem) => void;
}

export const GameOffline: React.FC<GameOfflineProps> = ({ productItems, addToCart }) => {
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
    // const [product, setProduct] = useState(productItems);
    // const dispatch = useDispatch();


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
                                <Link to={`/product/${productItems.id}`}>
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

                                                <button onClick={() => addToCart(productItems)}>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </Link>
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



export default function ProductList() {
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const addToCart = (product: ProductItem) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (<div>

        <div className="row">
            {products.map((product: ProductItem) => (
                <GameOffline key={product.id}
                    productItems={products}
                    addToCart={addToCart}
                />
            ))}
        </div>
    </div>
    );
}
