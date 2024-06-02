import React from 'react'
import Home from '../../../component/MainPage/Home'
import FlashDeals from '../../../component/flashDeals/FlashDeals'
import productItems from '../../../component/flashDeals/Pdata'




// Định nghĩa kiểu cho product item
interface ProductItem {
    id: number;
    name: string;
    cover: string;
    price: number;
    discount: number;
}

const addToCart = (product: ProductItem) => {
    console.log("Product added to cart:", product);
}
const HomePage = () => {
    return (
        <>
            <Home  />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
        </>
    )
}

export default HomePage