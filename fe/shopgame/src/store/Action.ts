// export const loadProduct=(data)=>{
//     return {
//         type:'product/load',
//         payload:data
//     }
// }
// export const addCart=(product)=>{
//     return {
//         type:'cart/add',
//         payload:product
//     }
// }
// export const delCart=(product)=>{
//     return {
//         type:'cart/del',
//         payload:product
//     }
// }

import { ProductItem } from "../component/Pdata";
import { ProductOff } from "../component/gameOffline/GameoffData";
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
    type: 'ADD_TO_CART';
    payload: ProductOff[];
}

export const addCart = (data: ProductOff[]): AddToCartAction => {
    return {
        type: 'ADD_TO_CART',
        payload: data,
    };
};