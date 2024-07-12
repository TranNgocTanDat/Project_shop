import React, { useState } from "react"
import "./style.css"
import { CartItem as CartItemType } from "../../../../component/Pdata";
import { RootState, useAppSelector } from '../../../../store/Store';

interface CartProps {
  addToCart: (item: CartItemType) => void;
  decreaseQty: (item: CartItemType) => void;
}

const Cart: React.FC<CartProps> = ({ addToCart, decreaseQty }) => {

  const cart = useAppSelector((state: RootState) => state.cart);

  // Sử dụng useState để lưu trữ giá trị của CartItem
  // const [cartItemsState, setCartItemsState] = useState<CartItemType[]>(cart);

  let total = 0;
  // Stpe: 7   calucate total of items
  cart.forEach((item) => {
    if (item.id)
    total += item?.price * item?.qty;
  })
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {cart.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {cart.map((item, index) => {
              const productQty = item.price * item.qty
              if (item.id)
              return (
                <div className='cart-list product d_flex' key={index}>
                  <div className='img'>
                    <img src={item.cover} alt={item.name} />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <span>{item.qty}</span>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>{total}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
