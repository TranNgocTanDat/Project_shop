import React, { useState } from 'react'
import { ProductItem, productItems } from '../Pdata'
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';


import './styleProduct.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import './styleProduct.css'






async function getProduct(id: number): Promise<ProductItem | undefined> {
    return productItems.find((product) => product.id === id);

}

export async function loadProduct({ params }: LoaderFunctionArgs): Promise<ProductItem | null> {
    try {
        const productId = Number(params.id);
        console.log('Params:', params);
        if (isNaN(productId)) {
            throw new Error("Invalid product ID");
        }
        const product = await getProduct(productId);
        console.log(product);
        return product ?? null;  // Trả về null nếu sản phẩm không tồn tại
    } catch (error) {
        console.error("Error loading product:", error);
        return null;  // Trả về null nếu có lỗi
    }
}

// Định nghĩa kiểu cho SampleNextArrow và SamplePrevArrow
interface ArrowProps {
    onClick?: () => void;
}


const SampleNextArrow: React.FC<ArrowProps> = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}

const ViewTest: React.FC = () => {
    const product = useLoaderData() as ProductItem | null;
    console.log('Product in ViewTest:', useLoaderData() as ProductItem | null);

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const settings = {
        // dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (

        <div>
            {product ? (
                <section className="section product" aria-label="product">
                    <div className="container1">
                        <Slider {...settings}>
                            <div className="box">
                                <div className="product mtop">
                                    <div className="img">
                                        <img src={`${product.cover}`}  alt={product.name}
                                            className="img-flash"  width={270} height={270}/>
                                            
                                    </div>
                                </div>

                            </div>
                        </Slider>

                        <div className="product-content">

                            <p className="product-subtitle">{product.name}</p>

                            <h1 className="h1 product-title">Fall Limited Edition Sneakers</h1>

                            <p className="product-text">
                                These low-profile sneakers are your perfect casual wear companion. Featuring a
                                durable rubber outer sole, they’ll withstand everything the weather can offer.
                            </p>

                            <div className="wrapper">

                                <span className="price" data-total-price>${product.price}</span>
                                    <img src={`/images/gameOff/gameoff-1.png`} alt="" width={200} height={200}/>
                                <span className="badge">{product.discount}</span>

                                <del className="del">$40.00</del>

                            </div>

                            <div className="btn-group">

                                <div className="counter-wrapper">

                                    <button className="counter-btn" data-qty-minus>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>

                                    <span className="span" data-qty>1</span>

                                    <button className="counter-btn" data-qty-plus>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>

                                </div>

                                <button className="cart-btn">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <span className="span">Add to cart</span>
                                </button>

                            </div>

                        </div>

                    </div>
                </section>
            ) : (
                <div >No product found </div>
            )}
        </div>
    );
};

export default ViewTest
