import React, { useState } from 'react'

import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ProductItem, productItems } from "./Pdata";
import { RootState, useAppDispatch, useAppSelector } from '../store/Store';

import { loadProduct } from '../store/Action';

export const Test: React.FC = () => {
    const products = useAppSelector((state: RootState) => state.products);
    return (<div>

        <div className="row">
            {products.map(product => (
                <ProductTest key={product.id}
                    productItems={[product]}
                />
            ))}
        </div>
    </div>
    );
}

interface PTProps {
    productItems: ProductItem[];
}

const settings = {
    slidesToShow: 5,
}

const ProductTest: React.FC<PTProps> = ({ productItems }) => {
    const [products, setProducts] = useState(productItems);
    const dispatch = useAppDispatch();

    const handleProductClick = (product: ProductItem) => {
        dispatch(loadProduct([product]));
    };

    return (
        <Slider {...settings}>
            {products.map((product) => (

                <>
                    <div className='box'>
                        <Link to={`/v/${product.id}`}>
                            <div className='product mtop'>
                                <div className='img'>
                                    <span className='discount'>{product.discount}% Off</span>
                                    <img src={product.cover} alt='' />
                                    <div className='product-like'>
                                        <label>{ }</label> <br />
                                        <i className='fa-regular fa-heart' ></i>
                                    </div>
                                </div>
                                <div className='product-details' onClick={() => handleProductClick(product)}>
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

                                        <button >
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </Link>
                    </div><div className='box'>

                        <div className='product mtop'>
                            <div className='img'>
                                <span className='discount'>{product.discount}% Off</span>
                                <img src={product.cover} alt='' />
                                <div className='product-like'>
                                    <label>{ }</label> <br />
                                    <i className='fa-regular fa-heart' ></i>
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

                                    <button >
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div></>

            ))}
        </Slider>
    )
}

export default ProductTest
