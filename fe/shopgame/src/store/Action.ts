

import { CartItem, ProductItem } from "../component/Pdata";
// Định nghĩa kiểu cho hành động (Action)
interface LoadProductAction {
    type: 'product/load';
    payload: ProductItem[];
}

// Các hàm tạo hành động (Action Creators)
export const loadProduct = (data: ProductItem[]): LoadProductAction => {
    return {
        type: 'product/load',
        payload: data,
    };
};

export interface AddToCartAction {
    type: 'cart.add';
    payload: CartItem[];
}

export const addCart = (data: CartItem[]): AddToCartAction => {
    return {
        type: 'cart.add',
        payload: data,
    };
};

export interface RmToCartAction {
    type: 'cart.minus';
    payload: CartItem[];
}

export const rmCart = (data: CartItem[]): RmToCartAction => {
    return {
        type: 'cart.minus',
        payload: data,
    };
};