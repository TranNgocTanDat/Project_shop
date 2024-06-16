import React from "react"
import {FlashCard} from "./FlashCard"
import "./style.css"
import { ProductItem } from "../Pdata"


// Định nghĩa kiểu cho các props của FlashDeals
interface FlashDealsProps {
  productItems: ProductItem[];
  addToCart: (product: ProductItem) => void;
}

const FlashDeals: React.FC<FlashDealsProps> = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />s
        </div>
      </section>
    </>
  )
}

export default FlashDeals
