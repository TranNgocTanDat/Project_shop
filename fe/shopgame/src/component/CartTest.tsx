import React from 'react';
import { RootState, useAppSelector } from '../store/Store'; // Đảm bảo import RootState từ nơi bạn định nghĩa store

export const CartInfo:React.FC = () => {
    const cart = useAppSelector((state: RootState) => state.cart);

    return (
        <p>Số Sản phẩm trong giỏ hàng: {cart.length}</p>
    );
}

export default CartInfo