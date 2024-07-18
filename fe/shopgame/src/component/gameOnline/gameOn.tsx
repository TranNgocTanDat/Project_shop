import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import { Link } from "react-router-dom"

import { CartItem, ProductItem } from "../Pdata"


interface GameOnlineProps {
    productOns: ProductItem[];
    addToCart: (product: CartItem) => void;
}

const GameOnline: React.FC<GameOnlineProps> = ({ productOns, addToCart }) => {
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = productOns.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(productOns.length / itemsPerPage);

    const increment = () => {
        setCount(count + 1)
    }

    const handleProductClick = (product: ProductItem) => {
        addToCart({...product, qty: 1})
    };


    const [products, setProducts] = useState(productOns);

    return (
        <>
            <div className="top__game">
                <h1 className="top__game--title">
                    Game Online
                </h1>
            </div>
            <div className="center__game">
                <div className="f-grid">

                    {currentProducts.map((product) => {
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
            <div className="pagination">
            {currentPage > 1 && (
                    <button className="pagination_btn" onClick={() => goToPage(currentPage - 1)}><i className="fa-solid fa-chevron-left"></i></button>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className="pagination_btn"
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button className="pagination_btn" onClick={() => goToPage(currentPage + 1)}><i className="fa-solid fa-chevron-right"></i></button>
                )}
            </div>
        </>
    )
}

export default GameOnline