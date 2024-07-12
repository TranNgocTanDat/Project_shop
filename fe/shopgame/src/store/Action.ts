

import { ProductItem } from "../component/Pdata";
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
    payload: ProductItem[];
}

export const addCart = (data: ProductItem[]): AddToCartAction => {
    return {
        type: 'cart.add',
        payload: data,
    };
};