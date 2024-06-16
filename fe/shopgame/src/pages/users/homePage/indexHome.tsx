import React from 'react'
import Home from '../../../component/MainPage/Home'
import FlashDeals from '../../../component/flashDeals/FlashDeals'
import {productItems} from '../../../component/Pdata'
import TopCate from '../../../component/top/TopCate';
import NewArrivals from '../../../component/newarrivals/NewArrivals';
import Discount from '../../../component/discount/Discount';
import {ProductItem} from '../../../component/Pdata'
import Login from '../../../component/login/login';


interface HomePageProps {
    addToCart: (product: ProductItem) => void;
}
const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
    return (
        <>
            <Home  />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate/>
            <NewArrivals/>
            <Discount/>
            
        </>
    )
}

export default HomePage